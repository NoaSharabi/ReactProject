import { useState } from 'react'
import MyStore from '../../store/MyStore'
import BusinessDetails from '../businessDetails/BusinessDetails'
import Login from '../login/Login'
import { Outlet, Link } from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect } from "react";
import StoreDetails from '../../store/StoreDetails';
import Meeting from '../meeting/Meeting';
import Button from '@mui/material/Button';

const Admin = observer(() => {
  useEffect(() => {
    if (localStorage.getItem("isLogin") === 'true')
      MyStore.setIsLogin(true)
     StoreDetails.initialBusinessDetails();
    StoreDetails.initialbusinessServices();
  }, [])

  return (
    <>
    
      {MyStore.isLogin ?
        <>
           <BusinessDetails></BusinessDetails>
           <div className='button-container'>
            <Button variant="outlined" ><Link to="./services">services</Link></Button>
            <Button variant="outlined" ><Link to="./meeting">meeting</Link></Button>
          </div>
          <Outlet />
        </> : <Login />}
    </>
  )
})

export default Admin








