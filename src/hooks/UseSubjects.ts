import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-helper";
import Subjects from "../entities/Subject";

const apiClient = new APIClient<Subjects>("subjects/");
const UseSubjects = (branch_id: string, semester_id: string) =>
  useQuery({
    queryKey: ["subjects"],
    queryFn: () => apiClient.getSubjects(branch_id, semester_id),
    staleTime: ms("24h"),
  });

export default UseSubjects;
