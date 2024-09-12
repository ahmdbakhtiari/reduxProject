"use client";
import store from "@/Redux/Store/Store";
import { Provider } from "react-redux";

interface ProviderProps {
  children: React.ReactElement;
}




export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>{children}</Provider>
  );
}
