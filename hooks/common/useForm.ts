import { apiAxios } from "@/lib/apiAxios";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
interface Props<T> {
  initialForm: T;
  url?: string;
  onSuccess?: (data?: any) => void;
}
export const useForm = <T extends { id?: number }>({
  initialForm,
  url = "",
  onSuccess,
}: Props<T>) => {
  const [form, setForm] = useState<T>({ ...initialForm });
  const [loading, setLoading] = useState(false);
  const onInputChange = ({
    target,
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const { name, value } = target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const setValue = useCallback(
    <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return;
    try {
      setLoading(true);
      const response = form?.id
        ? await apiAxios.put(`${url}/${form.id}`, form)
        : await apiAxios.post(url, form);
        
      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (error) {} finally {
      setLoading(false)
    }
  };
  const onResetForm = (object : T) => {
    setForm({ ...object });
  };

  return {
    form,
    loading,
    onInputChange,
    setValue,
    onResetForm,
    onSubmit,
  };
};
