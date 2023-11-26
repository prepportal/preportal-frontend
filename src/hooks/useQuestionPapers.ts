import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-helper";
import { QuestionPaper } from "../entities/QuestionPaper";

const apiClient = new APIClient<QuestionPaper>("question-papers/");
const useQuestionPapers = (subject_id: string) =>
  useQuery({
    queryKey: ["question-papers"],
    queryFn: () => apiClient.get(subject_id),
    staleTime: ms("24h"),
  });

export default useQuestionPapers;
