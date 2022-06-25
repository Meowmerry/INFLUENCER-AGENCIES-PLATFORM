import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { NavProfile } from "../../components/Nav-bar/Nav-Profile";
import { HomeSponcerships } from "../../components/sponcership/SponcershipHome";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { getSession } from '../../services/helper'
import { getInfluencerProfile } from "../../services/api/getData";
import Swal from "sweetalert2";
import { UserData } from "../../components/sponcership/interface/user-interface";
const HomeSponcerShipsPage: NextPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>()
  const token = getSession()

  const router = useRouter();
  useEffect(() => {
    setIsLoading(true)
    getProfileInc()
  }, [])

  const getProfileInc = async () => {
    try {
      if (token) {
        setIsLogin(true)
        const res = await getInfluencerProfile();
        const { data } = res;
        if (data?.data?.status) {
          setUserData(data?.data?.data?.user?.sub)
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (err) {
      console.log(err)
    }
  }
 
  const handleLogout = () => {
    Cookies.remove("accessToken");
    setIsLogin(false);
    router.push('/')
  };

  return (
    <div className="bg-sponcer-home">
      <header className="sticky bg-[#4998DD] shadow-md shadow-[#9de5fd] top-0 z-50">
        <NavProfile userData={userData} handleLogout={handleLogout} isLogin={isLogin} isLoading={isLoading} />
      </header>
      <HomeSponcerships userData={userData} isLogin={isLogin} isLoading={isLoading} />
    </div>
  );
};
export default HomeSponcerShipsPage;
