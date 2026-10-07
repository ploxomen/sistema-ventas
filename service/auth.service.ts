import axios from "axios";
export const loginDB = async (email: string, password: string) => {
  const response = await axios.post(
    "/api/auth/login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};
