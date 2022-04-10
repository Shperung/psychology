export type NewsType = {
  descr: string;
  h1: string;
  html: string;
  img: string;
  img_s: string;
  keywords: string;
  unique: string;
}

export type NewsListType = Pick<NewsType, "h1" | "img_s" | "unique">[]