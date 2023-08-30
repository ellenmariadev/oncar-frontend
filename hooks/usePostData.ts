import axios from "axios";
import { LeadData } from "@/interfaces/lead";

export const postData = async (data: LeadData) => {
  try {
    const response = await axios.post("http://localhost:5000/api/lead", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
