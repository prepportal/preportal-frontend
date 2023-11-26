import axios, { AxiosRequestConfig } from "axios";
import { Pagination } from "../entities/Pagination";


interface FetchResponse<T> {
  hasError: boolean;
  statusCode: number;
  message: string[];
  response: T[];
  pagination?: Pagination;
}

const axiosInstance = axios.create({
  baseURL: "https://prepportal-backend-production.up.railway.app/api/",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }

  get = (id: number | string) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint + id + '/')
      .then((res) => res.data);
  };

  getSubjects = (branch_id: string, semester_id: string) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint + branch_id + '/' + semester_id + '/')
      .then((res) => res.data);
  };
}

export default APIClient;
