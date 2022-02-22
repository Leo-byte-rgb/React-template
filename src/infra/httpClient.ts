import {
  HttpDeleteClient,
  HttpGetClient,
  HttpPostClient,
  HttpPutClient,
  HttpAuthClient,
} from "data/protocols";
import { handleConfig } from "utils/handleConfig";
import api, { AxiosResponse } from "axios";

export class HttpClient
  implements
    HttpDeleteClient,
    HttpGetClient,
    HttpPostClient,
    HttpPutClient,
    HttpAuthClient
{
  protected pOauth = "";

  oauth({ token }: HttpAuthClient.Params) {
    this.pOauth = token;
    return this;
  }

  async post(params: HttpPostClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse = {} as AxiosResponse;

    try {
      axiosResponse = await api.post(params.url, params.body, {
        headers: handleConfig({ type: "Bearer", token: this.pOauth }),
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }

  async get(params: HttpGetClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse = {} as AxiosResponse;

    try {
      axiosResponse = await api.get(params.url, {
        headers: handleConfig({ type: "Bearer", token: this.pOauth }),
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }

  async put(params: HttpPutClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse = {} as AxiosResponse;

    try {
      axiosResponse = await api.put(params.url, params.body, {
        headers: handleConfig({ type: "Bearer", token: this.pOauth }),
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }

  async delete(params: HttpDeleteClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse = {} as AxiosResponse;

    try {
      axiosResponse = await api.delete(params.url, {
        headers: handleConfig({ type: "Bearer", token: this.pOauth }),
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
}
