import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Branch from "../entities/Branch";
import APIClient from "../services/api-helper";
import branches from "../data/branches";

const apiClient = new APIClient<Branch>("branches/");

const useBranches = () =>
  useQuery({
    queryKey: ["branches"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: branches,
  });

export default useBranches;
