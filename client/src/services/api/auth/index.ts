import Cookies from "js-cookie";
import {
  CompanyLoginFormData,
  InfluencerLoginFormData,
} from "../../../components/login/interface";
import { useAxios, baseURL } from "../../config/index";

const LoginAsInfluencer = async (auth: InfluencerLoginFormData) => {

  try {
    const res = await useAxios.post(`${baseURL}/auth/loginUser`, auth, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error: any) {
    console.log("error-->", error);
    return error;
  }
};

const LoginAsCompany = async(auth: CompanyLoginFormData) => {
  try {
    const res = await useAxios.post(`${baseURL}/auth/loginCompany`, auth, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error: any) {
    console.log("error-->", error);
    return error;
  }
};

export { LoginAsInfluencer, LoginAsCompany };
