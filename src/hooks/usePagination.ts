import { useInfiniteQuery } from "@tanstack/react-query";
import { client } from "../lib/axios/client";

type UniversalResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

type PaginationArgs = {
  queryKey: any[];
  url: string;
  params?: Record<string, any>;
  pageSize?: number;
  gcTime?: number;
  enabled?: boolean;
};

export function usePagination<T>({
  queryKey,
  url,
  params,
  pageSize = 10,
  gcTime,
  enabled,
}: PaginationArgs) {
  return useInfiniteQuery<UniversalResponse<T>>({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const response = await client.get<UniversalResponse<T>>(url, {
        params: {
          ...params,
          offset: pageParam,
          limit: pageSize,
        },
      });
      return response.data;
    },
    enabled,
    gcTime,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;

      const nextUrl = new URL(lastPage.next);
      const offset = nextUrl.searchParams.get("offset");
      return offset ? parseInt(offset) : undefined;
    },
    initialPageParam: 0,
  });
}
