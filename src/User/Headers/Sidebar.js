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
import { Button, Carousel } from 'react-bootstrap';
import PauseIcon from '@mui/icons-material/Pause';
import { Modal,Col } from 'react-bootstrap';
import puse from '../image/puse.png';
import suucses from '../image/maps-and-flagss.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {Link} from 'react-router-dom';

import Group from '../image/Group.png';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

 
var Numbers = [2, 5, 4, 7, 8, 6,]


function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [success, setSuccess] = React.useState(false);
    const [finh, setFinsh] = React.useState(false);
    const [subsecribe, setSubsecribe] = React.useState(false);

const[taggle,setTaggle] =React.useState(true)

const taggles = () => {
    taggle ? setTaggle(false) : setTaggle(true)
  }
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleSub= () => {
        setFinsh(false)
        setSubsecribe(true)
    }
    const CloseSub = () => {

        setSubsecribe(false)
    }

























    const handleFinsh = () => {
        setSuccess(false)

        setFinsh(true)
    }
    const CloseFinsh = () => {

        setFinsh(false)
        setTaggle(false)
    }


    const handleSuccess = () => {
        setSuccess(true)
    }
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const CloseSuccess = () => {
        setSuccess(false)
    }
    return (
        <div className="sidebar">
            <div className="sidebar__div">

                <img className="sidebaerImage" src={sidebaerImage} alt="sidebaer" />
                <div className="span__text">
                    <span className="span__Colos">?????? ????????????????   :

                    </span>
                    <span className="span__Colo">??????  </span>

                </div>
            </div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >             <Link  className="linl"  to='/food'>

                        <ListItemIcon>
                            <FastfoodIcon />
                        </ListItemIcon>
                        </Link>
                                   <Link  className="linl"  to='/food'>

                         <ListItemText primary="????????????" />
                         </Link>

                     </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        
                        
                        <Link className="linl" to='/account'>
 
                          <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>        
                </Link>

                        <Link className="linl" to='/account'>

                        <ListItemText primary="????????????" />
                        </Link>

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                                                <Link className="linl" to='/seeting'>

                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        </Link>

                        <Link className="linl" to='/seeting'>

                        <ListItemText primary="????????????????" />
                        </Link>

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    > 
                                            <Link className="linl" to='/bills'>

                        <ListItemIcon>
                            <ReceiptLongIcon />
                        </ListItemIcon>
                        </Link>

                        <Link className="linl" to='/bills'>

                        <ListItemText primary="??????????????" />
                        </Link>

                    </ListItemButton>

                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                        id="bottom"
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="?????????? ????????" />


                    </ListItemButton>

                </List>

                {
                  taggle ? (

                <div className="acouunt__dib">
                    <PauseIcon />

                    <Button type="submit" onClick={handleSuccess} className="account" >
                        ?????????? ???????? ????????????

                    </Button>
                </div>
                   ) : (  
                       <div className="taggle__dis">
                           <span className="taggle">
    ??????????      <span className="taggle__small">2 </span>
 ?????? ???????????? ???????????? ??????????????
     </span>
                       <div className="acouunt__dibs">
                   <PlayArrowIcon />
 
                   <Button type="submit" onClick={handleSub} id="suces" >
                          ?????????? ????????????  

                   </Button>
                   </div>
                   </div>

                   )
                }


            </Box>


            <Modal
                show={success}
                onHide={CloseSuccess}
                backdrop="static"
                keyboard={false}
                centered
                id="mod"
            >
                <Modal.Header closeButton>
                    ?????????? ????????????
                </Modal.Header>
                <Modal.Body id="body__sucse">
                    <img src={puse} alt="" />
                    <br />
                    <p id="yes">   ?????? ?????? ???????????? ???????? ???????? ???????????? ???????????? ???????? </p>
 

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {Numbers.map((Number) => (

                            <Carousel.Item id="item">

                                <div className="color__green">   {Number}  </div>

                            </Carousel.Item>
                        ))}


                    </Carousel>
                    <br />
 
                </Modal.Body>
                <div className="div__buttons">


                    <Button type="submit" onClick={CloseSuccess} id="sure" >
                        ??????????

                    </Button>
                    <Button type="submit" id="sure" onClick={handleFinsh} >
                        ??????????

                    </Button>


                </div>
                <br />
            </Modal>


            <Modal
                show={finh}
                onHide={CloseFinsh}
                backdrop="static"
                keyboard={false}
                centered
             >
                <Modal.Header    id="modss"
 closeButton>
                       ???? ?????????? ??????????
                </Modal.Header>
                <Modal.Body id="body__sucse">
                    <img src={suucses} alt="" />
                    <br />
                    <p id="yes">     ..???? ?????????? ???????? ???????? ?????????????? ?????? ???? ?????? ?????????????? </p>
                    {/* <Col>

<div className="div__select" controlId="exampleForm.ControlTextarea1">
  <FormLabel id="details" component="legend">      ???? ???????? ???????????? ?????????????? ?????? ????????????</FormLabel>



  <FormControlLabel value="female" onClick={taggles} control={<Radio />} label="?????? " />
  <FormControlLabel value="male" control={<Radio />} label="????" />

</div>
</Col>    */}
  
                </Modal.Body>
                <div className="div__buttons">


                   
                    <Button type="submit" id="sures" onClick={CloseFinsh} >
                        ????

                    </Button>


                </div>
                <br />
            </Modal>

















            <Modal
                show={subsecribe }
                onHide={CloseSub}
                backdrop="static"
                keyboard={false}
                centered
             >
                <Modal.Header    id="modss"
 closeButton>
                        ?????????? ????????????????
                </Modal.Header>
                <Modal.Body id="body__sucse">
                    <img src={Group} alt="" />
                    <br />
                    <p id="yes">  
                    ???? ???????? ???????????? ???????????? ?????? ??????????   
  </p>
                </Modal.Body>

                <div className="div__buttons">


<Button type="submit" onClick={CloseSub} id="sure__text" >
    ????

</Button>
<Button type="submit" id="sure__text" onClick={CloseSub} >
    ??????

</Button>


</div>
                
                <br />
            </Modal>




















        </div>
    )
}

export default Sidebar
