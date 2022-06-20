import {
  InfluencerFormData,
} from "../../components/influencer/interface/influencer-op-data";
import { useAxios, baseURL } from "../config/index";

const registerInfluencer = async (data: InfluencerFormData) => {
  try {
    const res = await useAxios.post(`${baseURL}/users/create`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error) {
    console.log("error-->", error);
  }
};
export { registerInfluencer };
