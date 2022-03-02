export interface HttpGetClient {
  get: (params: HttpGetClient.Params) => Promise<any>;
}

export namespace HttpGetClient {
  export type Params = {
    url: string;
    headers?: {
      [key: string]: string;
    };
  };
}
