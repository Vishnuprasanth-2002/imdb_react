import { useState } from "react";
import { Ilogin } from "../components/types";
import { loginUser } from "../services/api";

const LoginForm = () => {
  const [login, setLogin] = useState<Ilogin>({
    email: "",
    user_password: "",
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(login);
  }
  async function handleLogin(user: Ilogin) {
    try {
      const userPayload = {
        email: user.email,
        user_password: user.user_password,
      };
      const response = await loginUser(userPayload);
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in login:", error);
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={login.email}
        placeholder="Email address"
        onChange={handleChange}
        required
      />
      <label htmlFor="user_password">
        Password
        <input
          type="text"
          id="user_password"
          name="user_password"
          value={login.user_password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
