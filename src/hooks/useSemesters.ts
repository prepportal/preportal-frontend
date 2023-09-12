import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Semester from "../entities/Semester";
import APIClient from "../services/api-helper";
import semesters from "../data/semesters";

const apiClient = new APIClient<Semester>("semesters/");

const useSemesters = (branch_id: string) =>
  useQuery({
    queryKey: ["semester"],
    queryFn: () => apiClient.get(branch_id),
    staleTime: ms("24h"),
    initialData: semesters
  });

export default useSemesters;
