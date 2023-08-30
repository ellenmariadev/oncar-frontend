export interface LeadData {
  name: string;
  email: string;
  phone: string;
  vehicleid: number;
}

export interface LeadResponse {
  data: LeadData[];
}
