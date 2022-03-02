export interface HttpPostClient {
  post: (params: HttpPostClient.Params) => Promise<any>;
}

export namespace HttpPostClient {
  export type Params = {
    url: string;
    body?: unknown;
    headers?: {
      [key: string]: string;
    };
  };
}
