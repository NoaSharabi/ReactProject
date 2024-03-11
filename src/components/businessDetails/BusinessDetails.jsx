import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState } from 'react';
import StoreDetails from '../../store/StoreDetails';
import { observer } from "mobx-react"
import MyStore from '../../store/MyStore';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './BusinessDetails.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const BusinessDetails = observer(() => {
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
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "column"
    };

    const [dataBusiness, setDataBusiness] = useState();
    const [id, setId] = useState(StoreDetails.business.id);
    const [name, setName] = useState(StoreDetails.business.name);
    const [address, setAddress] = useState(StoreDetails.business.address);
    const [phone, setPhone] = useState(StoreDetails.business.phone);
    const [logo, setLogo] = useState(StoreDetails.business.logo);
    const [owner, setOwner] = useState(StoreDetails.business.description);
    const [description, setDescription] = useState(StoreDetails.business.description);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEdit = async () => {
        const response = await fetch("http://localhost:8787/businessData", {// כתיבה עם fetch
            method: "POST",
            body: JSON.stringify({ id, name, address, phone, logo, description, owner }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        StoreDetails.initBusiness();
        handleClose();
    }
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'rgb(9, 9, 36)', display: 'flex' }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between"  >
                        <Grid item xs={6} >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6">{StoreDetails.business.name}</Typography>
                                <Typography variant="subtitle1">{StoreDetails.business.address}</Typography>
                                <Typography variant="body2">Phone: {StoreDetails.business.phone}</Typography>
                                <Typography variant="body2">Owner: {StoreDetails.business.owner}</Typography>
                                {MyStore.isLogin ?
                                    <Button variant='outlined' size="small" onClick={handleOpen} sx={{ width: 10, color: 'white', margin: 'auto' }}>
                                        edit
                                    </Button>
                                    : <></>}
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '1vw' }}>
                            <Avatar src={StoreDetails.business.logo} alt="Business Logo" sx={{ width: '300px', height: '95px', borderRadius: 0, backgroundColor: 'white' }} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
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
                                <InputLabel htmlFor="outlined-adornment-password">id</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    label="id"/>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    label="name"/>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">address</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    label="address" />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">phone</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    label="phone"/>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">logo</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={logo}
                                    onChange={(e) => setLogo(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    label="logo"/>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">description</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    label="description"/>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">owner</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={owner}
                                    onChange={(e) => setOwner(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    label="description"/>
                            </FormControl>
                            <Button variant="outlined" onClick={handleEdit}>submit</Button>
                        </Box>
                    </Fade>
                </Modal>
            </div> : <></>}
        </>
    )
})
export default BusinessDetails;
