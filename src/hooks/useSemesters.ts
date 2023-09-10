import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Semester from "../entities/Semester";
import APIClient from "../services/api-helper";

const apiClient = new APIClient<Semester>("semesters/");

const useSemesters = (branch_id: string) =>
  useQuery({
    queryKey: ["semester", branch_id],
    queryFn: () => apiClient.get(branch_id),
    staleTime: ms("24h"),
    // initialData: branches,
  });

export default useSemesters;
