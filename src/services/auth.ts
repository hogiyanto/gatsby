interface LoginForm {
  username: string;
  password: string;
}

interface User {
  username: string;
  name: string;
  email: string;
}

export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser") || "")
    : {};

const setUser = (user: User | Record<string, unknown>) =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = ({ username, password }: LoginForm) => {
  if (username === `john` && password === `pass`) {
    setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    });
    return true;
  }
  return false;
};

export const isLoggedIn = () => {
  const user = getUser();
  return user?.username;
};

export const logout = (callback: any) => {
  setUser({});
  callback();
};
