import React from 'react'
import MainHeader from '../components/MainHeader';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <React.Fragment>
        <MainHeader />
        <Outlet />
    </React.Fragment>
  )
}

export default RootLayout
