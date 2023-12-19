import useSWR from "swr";
import { axiosInstance } from "../utils/axios";

interface IMember {
  id: number;
  name: string;
  email: string;
}

const useMembers = () => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  const {
    data,
    error,
    isLoading,
  }: {
    data: IMember[];
    error: unknown;
    isLoading: boolean;
  } = useSWR(`/api/v1/member`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useMembers;
