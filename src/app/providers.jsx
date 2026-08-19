"use client";

import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "@/store/store";
import AuthLoader from "@/auth/AuthLoader";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
          },
        }}
      />

      <AuthLoader>
        {children}
      </AuthLoader>
    </Provider>
  );
} 