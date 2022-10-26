import type { PropsWithChildren } from "react";

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type WithClassName<T = {}> = T & {
  className?: string;
};

export type Post = {
  title: string;
  subtitle: string;
  imageURL: string;
  summary: string;
  url: string;
  category: string;
};
