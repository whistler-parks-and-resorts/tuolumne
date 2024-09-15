import type { AxiosRequestConfig } from "axios";
import { Api } from "./ApiClient";

export default function dataClient(): Api<void> {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_MONO_BASE_URL as string,
    headers: { "Access-Control-Allow-Origin": "https://localhost:5001" },
  };

  console.log("request", config);
  console.log("url", import.meta.env.VITE_MONO_BASE_URL);

  return new Api<void>(config);
}
