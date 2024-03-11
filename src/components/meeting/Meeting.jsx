import React, { useState } from 'react';
import Appointment from '../../store/Appointment';
import { observer } from 'mobx-react'
import { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
const Meeting = observer(() => {
  useEffect(() => {

    Appointment.initialAppointmentList();

  }, []);
  const getAppointmentColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0)
      return 'none'
    else
      if (diffDays === 1) {
        return 'red'; // היום
      } else if (diffDays <= 7) {
        return 'orange'; //השבוע
      }
      else if (diffDays >= 7) {
        return 'green'; // רחוק
      }
  };
  return (
    <div>
      <h2>Business Appointments</h2>
      <div>
        <Grid container spacing={2}>
          {Appointment.appointmentList.map(appointment => (
            <Grid item key={appointment.id}>
              <Card sx={{ width: 300, height: 200 }}>
                <CardContent>
                <PendingActionsRoundedIcon sx={{ color: getAppointmentColor(appointment.dateTime) }} />
                  <Typography variant="h6">{appointment.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>{appointment.clientName}</p>
                    <p>{appointment.clientPhone}</p>
                    <p> {appointment.clientEmail}</p>
                    <p>{appointment.dateTime}</p>  
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
});
export default Meeting;