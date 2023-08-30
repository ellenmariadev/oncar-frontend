export interface VehicleData {
  id: number;
  brand: string;
  model: string;
  price: string;
  year: number;
}

export interface VehicleResponse {
  data: VehicleData[];
}
