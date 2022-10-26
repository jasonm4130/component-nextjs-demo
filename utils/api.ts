import { Post } from "../types";

export type Response = {
  results: [Post];
};

export function api<Response>(url: string): Promise<Response> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Response>;
  });
}
