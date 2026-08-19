"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  login,
  logout,
  stopLoading,
} from "@/auth/authSlice";

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          dispatch(logout());
          return;
        }

        const result = await response.json();

        if (result?.data) {
          dispatch(login(result.data));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("AuthLoader Error:", error);

        dispatch(logout());
      } finally {
        dispatch(stopLoading());
      }
    };

    loadUser();
  }, [dispatch]);

  return children;
};

export default AuthLoader;