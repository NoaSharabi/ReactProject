import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActions } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import StoreDetails from '../../store/StoreDetails';
import { observer } from "mobx-react"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
const FormAddService = observer(() => {
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
    display: 'flex'
    , flexWrap: 'wrap',
    flexDirection: "column"
  };
  const [dataBusiness, setDataBusiness] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    StoreDetails.initialbusinessServices();
  }, []);

  const handleSubmit = (event) => {
    {
      event.preventDefault();
      StoreDetails.addService(addService);
    }
    setAddservice({
      id: StoreDetails.businessServices.length,
      name: "",
      description: "",
      price: "",
      image: ""
    });
    setOpen(false);
  }
  const [addService, setAddservice] = useState({
    id: String(StoreDetails.businessServices.length),
    name: "",
    description: "",
    price: "",
    image: ""

  })
  const handleInput = (event) => {
    const { name, value } = event.target;
    setAddservice({ ...addService, [name]: value });
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            add service
          </Button>
        </CardActions>
      </Card>
      {open ? <div >

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}>
          <Fade in={open}>
            <Box sx={style} >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <TextField
                  fullWidth
                  label="service name"
                  name="name"
                  value={addService.name}
                  onChange={handleInput}
                  placeholder=" service name" />
              </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <TextField
                  fullWidth
                  label=" service description"
                  name="description"
                  value={addService.description}
                  onChange={handleInput}
                  placeholder="service description" />
              </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <TextField
                  fullWidth
                  label="  service Price"
                  name="price"
                  value={addService.price}
                  onChange={handleInput}
                  placeholder="service Price"/>
              </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <TextField
                  fullWidth
                  label="  service image"
                  name="image"
                  value={addService.image}
                  onChange={handleInput}
                  placeholder="service image"/>
              </FormControl>
              <Button variant="outlined" onClick={handleSubmit}>submit</Button>
            </Box>
          </Fade>
        </Modal>
      </div> : <></>}
    </>
  )
})

export default FormAddService;





