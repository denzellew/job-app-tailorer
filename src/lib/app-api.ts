import axios from "axios";
import { TailorJobApplicationRequest, TailorJobApplicationResponse } from "./types";

export const getTailoredJobApplication = async (req: TailorJobApplicationRequest): Promise<TailorJobApplicationResponse> => {
  const requestBody: TailorJobApplicationRequest = req;

  try {
    const response = await axios.post<TailorJobApplicationResponse>("/api/job", requestBody);
    const data: TailorJobApplicationResponse = response.data;
    return data;
  } catch (error: any) {
    throw new Error(error || "Unable to tailor job application");
  }
};
