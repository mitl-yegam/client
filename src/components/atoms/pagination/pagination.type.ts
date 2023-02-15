export type Props = {
  totalCount: number;
  row: number;
  onFetchList: ({ currentPage, row }: Page) => Promise<void>;
};

type Page = {
  row: number;
  currentPage: number;
};
