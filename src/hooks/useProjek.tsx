import useSWR from "swr";
import { axiosInstance } from "../utils/axios";
import { useParams } from "react-router-dom";

export interface ITask {
  id: number;
  title: string;
  description: string;
  project_id: number;
  status: string;
  date: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  user_id: number;
  tasks: ITask[];
}

const useProjek = () => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  const { id } = useParams<{ id: string }>();

  const {
    data,
    error,
    isLoading,
  }: {
    data: IProject;
    error: unknown;
    isLoading: boolean;
  } = useSWR(`/api/v1/projek?id=${id}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useProjek;
