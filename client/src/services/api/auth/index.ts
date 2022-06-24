import {
  CompanyLoginFormData,
  InfluencerLoginFormData,
} from "../../../components/Login/interface";
import { useAxios, baseURL } from "../../helper";
import {ENDPOINT} from '../../endpoint';

const LoginAsInfluencer = async (auth: InfluencerLoginFormData) => {

  try {
    const res = await useAxios.post(`${baseURL}${ENDPOINT.AUTH_LOGIN}`, auth, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error: any) {
    console.log("error-->", error);
    return error;
  }
};
console.log(`${baseURL}${ENDPOINT.AUTH_LOGIN_COMPANY}`)

const LoginAsCompany = async (auth: CompanyLoginFormData) => {

  try {
    const res = await useAxios.post(`${baseURL}${ENDPOINT.AUTH_LOGIN_COMPANY}`, auth, {
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error: any) {
    console.log("error-->", error);
    return error;
  }
};

export { LoginAsInfluencer, LoginAsCompany };
