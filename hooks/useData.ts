import { VehicleResponse } from "@/interfaces/vehicle";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetchData = async (): AxiosPromise<VehicleResponse> => {
  const response = await axios.get<VehicleResponse>(
    `http://localhost:5000/api/vehicles`
  );
  return response;
};

export function useData() {
  const query = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["vehicle-data"],
    retry: false,
    keepPreviousData: true,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
