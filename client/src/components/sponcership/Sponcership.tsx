import React, { FunctionComponent, useEffect } from "react";
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

interface HomeSponcershipsProps {}

export const HomeSponcerships: FunctionComponent<HomeSponcershipsProps> = () => {
  const token = getSession()
  useEffect(() => {
    getProfileInc()
  }, [])
  
  const getProfileInc = async () => {
    try {
      if (token) {
      
      } else {
      
      }
    } catch (err) {
      console.log(err)
    }
   
  }

  return (
    <div className="z-40 bg-contain bg-center bg-white m-16 mr-40 ml-40 shadow-lg shadow-[#4998DD]  border-solid border-1.5 rounded-lg border-gray-300">
      <div className="p-8 w-full flex flex-wrap justify-evenly aspect-video">
        {itemData.map((item) => (
          <Card sx={{ maxWidth: 450 }} className="pt-4 pr-4 pl-4 m-6  ">
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
                <Button className="text-xs mt-6">Send Propersal</Button>
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

