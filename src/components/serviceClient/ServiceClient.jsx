import React from 'react';
import { useEffect } from 'react';
import Meeting from '../meeting/Meeting';
import AppointmentClient from '../addApointment/AddAppointment';
import { useState } from 'react'
import AddAppointment from '../addApointment/AddAppointment';
import StoreDetails from '../../store/StoreDetails';
import { observer } from 'mobx-react';
import FormAddService from '../formAddService/FormAddService'
import { Grid, Card, CardContent, Typography,CardMedia } from '@mui/material';
import Appointment from '../../store/Appointment';


const ServiceClient = observer(() => {
  useEffect(() => {

    StoreDetails.initialbusinessServices();
    Appointment.initialAppointmentList();

  }, []);
  const [selectedService, setSelectedService] = React.useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };
 
    const [showAppointmentClient, setShowAppointmentClient] = useState(false);

    const handleAddAppointment = () => {
      setShowAppointmentClient(true);
    };
    return (
      <Grid container spacing={2} marginTop={10}>
          {StoreDetails.businessServices.map(service => (
            <Grid item key={service.id} xs={12} sm={6} md={4} lg={3} style={{ flexGrow: 1 }}>
               
              <Card  sx={{ maxWidth: 345,height:500 }}>
           
                <CardMedia
                  component="img"
                  alt={service.name}
                  width={'33vh'}
                  image={service.img}
                />
                <CardContent>
                <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: {service.price}</p>
           
            <AddAppointment i={service} name={service&&service.name}></AddAppointment>
                  {/* ניתן להוסיף יותר מידע ורכיבים של Mui לכרטיסיה */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
  );
 })
export default ServiceClient;
