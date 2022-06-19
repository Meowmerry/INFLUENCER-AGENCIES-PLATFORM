import * as dayjs from 'dayjs'
//dayjs().format()
import { InfluencerFormData } from './interface/influencer-op-data';
import {InfluencerOpInterfaces as In} from './influencer-op-wrap'

export function formToInfluencerOp(fd: InfluencerFormData): In.InfluencerRegister {
    const copyOfFormData = { ...fd }
   // const channels: In.Channels[]: []
    const address: In.InfluencerAddress = {
        address: fd.address,
        city: fd.city,
        country: fd.city,
        zipcode: fd.zipcode
    }
    const newInfluencer: In.InfluencerRegister = {
        firstName: fd.firstName,
        lastName: fd.lastName,
        email: fd.email,
        password: fd.password,
        role: fd.role,
        address:address,

    }
    return newInfluencer
}