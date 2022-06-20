import {
  InfluencerFormData,
} from "../../../components/influencer/interface/influencer-interface-data";
import { useAxios, baseURL } from "../../config/index";

const registerInfluencer = async (data: InfluencerFormData) => {
  try {
    const res = await useAxios.post(`${baseURL}/users/create`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error:any) {
      console.log("error-->", error);
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
