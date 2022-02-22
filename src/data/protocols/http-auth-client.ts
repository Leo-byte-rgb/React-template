export interface HttpAuthClient {
  oauth: (params: HttpAuthClient.Params) => this;
}

export namespace HttpAuthClient {
  export type Params = {
    token: string;
  };
}
