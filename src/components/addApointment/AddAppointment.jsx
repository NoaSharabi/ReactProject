import React, { useState, useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import StoreDetails from '../../store/StoreDetails';
import Appointment from '../../store/Appointment';
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';



const AddAppointment = observer(({ i, name }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [appointment, setAppointment] = useState({
    name: name,
    description: i.description,
    price: i.price,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    dateTime: null,


  });

  useEffect(() => {
    StoreDetails.initialbusinessServices();
    Appointment.initialAppointmentList();
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleDateChange = (date) => {
    const d = date.format('YYYY-MM-DDTHH:mm:ss');

    setAppointment({ ...appointment, dateTime: d });

  };

  const handleSubmit = (event) => {
    // Check if appointment date is valid
    if (appointment.dateTime) {
      Appointment.addAppointment(appointment)
      console.log(Appointment.appointmentList)
      setAppointment({
        name: name,
        description: i.description,
        price: i.price,
        clientName: '',
        clientPhone: '',
        clientEmail: '',
        dateTime: null,

      });
    }
    else {
      setAppointment({ ...appointment });
    }
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div >
        <Button variant="outlined" onClick={() => setOpen(true)}>לקביעת פגישה</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent className="dialog">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-item">
                <TextField
                  fullWidth
                  label="Name"
                  name="clientName"
                  value={appointment.clientName}
                  onChange={handleInputChange}
                  placeholder="clientName"
                  className="textField"
                />
              </div>
              <div className="form-item">
                <TextField
                  label="Email"
                  fullWidth
                  name="clientEmail"
                  value={appointment.clientEmail}
                  onChange={handleInputChange}
                  placeholder="clientEmail"
                  className="textField"
                />
              </div>
              <div className="form-item">
                <TextField
                  fullWidth
                  label="Phone"
                  name="clientPhone"
                  value={appointment.clientPhone}
                  onChange={handleInputChange}
                  placeholder="clientPhone"
                  className="textField"
                />
              </div>
              <div className="form-item">
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DemoContainer components={['DateTimePicker']}  >
                    <DateTimePicker label="Basic date time picker"
                      disablePast
                      value={appointment.dateTime}
                      onChange={handleDateChange}
                      required
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
});

export default AddAppointment;
