import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { LadingPage } from '../../components/landing-page';
import { NavBar } from '../../components/nav-bar/nav-bar';

const HomePage: NextPage = () => {
  return (
    <div >
      <NavBar />
      <LadingPage/>
    </div>
  )
}
export default HomePage
