import useSWR from "swr";
import { axiosInstance } from "../utils/axios";
import { useAuthUser } from "react-auth-kit";

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

const useProjects = () => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  const auth = useAuthUser();

  const {
    data,
    error,
    isLoading,
  }: {
    data: IProject[];
    error: unknown;
    isLoading: boolean;
  } = useSWR(`/api/v1/project?userId=${auth()?.id}`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};

export default useProjects;
