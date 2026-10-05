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
  onSuccess?: (data: any) => {};
}
export const useForm = <T extends { id?: number }>({
  initialForm,
  url = "",
  onSuccess,
}: Props<T>) => {
  const [form, setForm] = useState<T>({ ...initialForm });
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
      const response = form?.id
        ? await apiAxios.put(`${url}/${form.id}`, form)
        : await apiAxios.post(url, form);
        
      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (error) {}
  };
  const onResetForm = () => {
    setForm({ ...initialForm });
  };

  return {
    form,
    onInputChange,
    setValue,
    onResetForm,
    onSubmit,
  };
};
