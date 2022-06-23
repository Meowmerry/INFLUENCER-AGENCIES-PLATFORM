import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
interface HomeSponcershipsProps {}

export const HomeSponcerships: FunctionComponent<HomeSponcershipsProps> = (
  props
) => {
  return (
    <div className="bg-contain bg-center bg-white m-16 mr-40 ml-40 shadow-lg shadow-[#4998DD]  border-solid border-1.5 rounded-lg border-gray-300 ">
      <div className="p-8 flex flex-wrap justify-evenly">
        <div>
          <Card sx={{ maxWidth: 345 }} className="p-6 m-6">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/assets/images/sponcer4.png"
            />
            <CardContent>
              <Typography   component="div"  className="text-center mt-2 mb-1">
                Skincare Review
                          </Typography>
                          <Divider />
                          <Typography   component="div"  className="text-center  mt-2 mb-1">
                Budget 1,000 - 2,000
                          </Typography>
                          <Divider />
                          <Typography  component="div"  className="text-center  mt-2 mb-1 flex justify-between items-center ">
              <span>Channel:</span><span  className="flex justify-between items-center "><img src="/assets/images/ig.png" className="mr-1"/> <img src="/assets/images/fb.png"/></span>
                          </Typography>
                          <Divider />
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 345 }} className="p-6 m-6">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/assets/images/sponcer4.png"
            />
            <CardContent>
              <Typography  variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }} className="p-6 m-6">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/assets/images/sponcer4.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }} className="p-6 m-6">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/assets/images/sponcer4.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
