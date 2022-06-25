import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";
import { itemData } from "./mockData";
import {getSession} from '../../services/helper'
import { getInfluencerProfile } from "../../services/api/getData";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { UserData } from "./interface/user-interface";

interface HomeSponcershipsProps {
  isLogin: boolean;
  isLoading?: boolean;
  userData: UserData | undefined
}

export const HomeSponcerships: FunctionComponent<HomeSponcershipsProps> = () => {
  const router = useRouter();
  const token = getSession()
  const [userData, setUserData] = useState()
  
  const SandPropersal = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Send Propersal Success!",
      showConfirmButton: false,
      timer: 2000,
    });
    router.push("/home-sponcerships");
  }

  return (
    <div className="z-40 bg-contain bg-center bg-white m-16 mr-40 ml-40 shadow-lg shadow-[#4998DD]  border-solid border-1.5 rounded-lg border-gray-300">
      <div className="p-8 w-full flex flex-wrap justify-evenly aspect-video">
        {itemData.map((item, i) => (
          <Card sx={{ maxWidth: 450 }} className="pt-4 pr-4 pl-4 m-6" key={i}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.img}
            />
            <CardContent className="min-h-fit">
              <Typography component="div" className="text-center mt-2 mb-1">
                {item.title}
              </Typography>
              <Divider />
              <Typography component="div" className="text-center  mt-2 mb-1">
                {item.bugget}
              </Typography>
              <Divider />
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center  mt-2 mb-1 flex justify-between items-center text-xs "
              >
                <span>Channel:</span>
                <span className="flex justify-between items-center ">
                  <img src="/assets/images/ig.png" className="mr-1" />
                  <img src="/assets/images/fb.png" />
                </span>
              </Typography>
              <Divider />
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-center  mt-2 mb-1 flex justify-between items-center text-xs "
              >
                <span>Follower:</span>
                <span className="flex justify-between items-center ">
                  {item.follower}
                </span>
              </Typography>
              <Divider />
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-xs"
              >
                Detail:
                <br />
               {item.details}
              </Typography>
              <span className="flex justify-center text-xs btn-persal">
                <Button onClick={ ()=> SandPropersal()} className="text-xs mt-6">Send Propersal</Button>
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

