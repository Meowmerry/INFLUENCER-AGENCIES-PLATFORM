import { InfluencerFormData, InfluencerRegister } from "../../components/influencer/interface/influencer-op-data";
import { useAxios, baseURL } from "../config/index";

const registerInfluencer = async (data: InfluencerFormData) => {
    console.log('data==>', data)
    //const formData = 
    try {
        const res = await useAxios.post(`${baseURL}/users/create`,data,
        { headers: { 'Content-Type': 'multipart/form-data' }}
		)
        console.log('res==>', res)
        return res;
    }catch (error) {
        console.log("error-->", error);
      }
    
}
export {registerInfluencer}