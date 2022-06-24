import {
  InfluencerFormData,
} from "../../../components/influencer/interface/influencer-interface-data";
import { baseURL, useAxios } from "../../helper";


const registerInfluencer = async (data: InfluencerFormData) => {
  try {
    const res = await useAxios.post(`${baseURL}/users/create`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error:any) {
      return error;
  }
};

const registerCompany = async (data: InfluencerFormData) => {
    try {
      const res = await useAxios.post(`${baseURL}/company/create`, data, {
        headers: { "Content-Type": "application/json" },
      });
      return res;
    } catch (error: any) {
        console.log("error-->", error.response.data);
    }
  };
export { registerInfluencer ,registerCompany};
