import React, { useState } from 'react';
import StoreDetails from '../../store/StoreDetails';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import FormAddService from '../formAddService/FormAddService'
import { Grid, Card, CardContent, Typography,CardMedia } from '@mui/material';

const Services = observer(() => {
  useEffect(() => {
    StoreDetails.initialbusinessServices();
  }, [])
  const [showEditService, setShowEditService] = useState(false)
  return (
    <>
      <div>
        <Grid container spacing={2} marginTop={10}>
          {StoreDetails.businessServices.map(service => (
            <Grid item key={service.id} xs={12} sm={6} md={4} lg={3} style={{ flexGrow: 1 }}>
              
              <Card  sx={{ width: 300,height:400 }}>

            
                <CardMedia
                  component="img"
                  alt={service.name}
                  image={service.img}
                />
                <CardContent>
                  <Typography variant="h6">{service.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{direction:'rtl'}}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <FormAddService></FormAddService>
      </div>
    </>

  )
});

export default Services;
