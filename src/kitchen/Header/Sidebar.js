import React from 'react'
import './sidebar.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import sidebaerImage from '../image/sidebaerImage.png';
import SettingsIcon from '@mui/icons-material/Settings';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
 import Stack from '@mui/material/Stack';


function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const [index, setIndex] = React.useState(0);
    const [value, setValue] = React.useState(new Date());

    return (
        <div className="sidebar">
            <div className="sidebar__div">

                <img className="sidebaerImage" src={sidebaerImage} alt="sidebaer" />
                <br />

                <div className="div__kitchen">
                    <span className="span__kitchen"> التاريخ

                    </span>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                        <Stack>
                            <DatePicker
                                disableFuture
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>

                </div>
            </div>
            <br />
            <br />
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >             <Link className="linl" to='/requst'>

                            <ListItemIcon>
                                <FastfoodIcon />
                            </ListItemIcon>
                        </Link>
                        <Link className="linl" to='/home'>

                            <ListItemText primary="الطلبات" />
                        </Link>

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                         <Link className="linl" to='/communcation'>

                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                        </Link>

                        <Link className="linl" to='/communcation'>

                            <ListItemText primary="التواصل" />
                        </Link>

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <Link className="linl" to='/statistics'>

                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                        </Link>

                        <Link className="linl" to='/statistics'>

                            <ListItemText primary="الاحصائيات" />
                        </Link>

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                        id="bottoms"
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="تسجيل  " />


                    </ListItemButton>

                </List>
            </Box>
        </div>
    )
}

export default Sidebar
