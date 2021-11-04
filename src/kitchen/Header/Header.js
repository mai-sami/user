import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
    return (
      <div className="header">
       <Navbar expand="lg" id="navBar"  sticky="top" bg="light">
      <Container>
       
        <Navbar.Brand href="#"> 
<Badge    badgeContent={1000} variant="dot" anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}  >
        <NotificationsNoneIcon  className="icon"     style={{ fontSize:30 }}/>
      </Badge>
      <SettingsIcon  className="icons"   style={{ fontSize:27 }}/> 
      </Navbar.Brand>
  
      <Navbar.Brand href="#">
      <div className="seeting">

<div className="seeting__p">
  <span className="seeting__name">عبد الرحمن الشهري</span>
  <span className="seeting__id">رقم التعريف: 2110001</span>
   </div>
        <AccountCircleIcon style={{ fontSize:38}} className="icon" />
        </div>

      </Navbar.Brand>
 
        </Container>
    </Navbar>
    </div>
    )
    }


export default Header
