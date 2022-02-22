import { AxiosRequestHeaders } from "axios";

type Oauth = Record<"type" | "token", string>;

export function handleConfig(oauth?: Oauth): AxiosRequestHeaders {
  const headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  if (oauth) {
    headers.Authorization = `${oauth.type} ${oauth.token}`;
  }

  return {
    ...headers,
  };
}
