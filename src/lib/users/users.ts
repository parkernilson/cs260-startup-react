import { UserInfo } from "../interfaces";

export const login = async (
  username: string,
  password: string
): Promise<UserInfo> => {
  return fetch("/api/auth/login", {
    method: "post",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Login failed");
  });
};

export const createUser = async (
  username: string,
  password: string
): Promise<void> => {
  return fetch("/api/auth/create", {
    method: "post",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (response.ok) {
      return;
    }
    throw new Error("Create user failed");
  });
};

export const logout = () =>
  fetch(`/api/auth/logout`, { method: "delete" }).then((response) => {
    if (response.ok) {
      return;
    }
    throw new Error("Logout failed");
  });

export const getUser = (username: string) =>
  fetch(`/api/user/${username}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Get user failed");
  });
