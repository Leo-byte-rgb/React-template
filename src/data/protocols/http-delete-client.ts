export interface HttpDeleteClient {
  delete: (params: HttpDeleteClient.Params) => Promise<any>;
}

export namespace HttpDeleteClient {
  export type Params = {
    url: string;
    headers?: {
      [key: string]: string;
    };
  };
}
