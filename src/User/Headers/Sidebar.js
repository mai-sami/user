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
                    <span className="span__Colos">نوع الاشتراك   :

                    </span>
                    <span className="span__Colo">شهر  </span>

                </div>
            </div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <FastfoodIcon />
                        </ListItemIcon>
                        <Link  className="linl"  to='/food'>
                        <ListItemText primary="وجباتي" />
                        </Link>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <Link className="linl" to='/account'>

                        <ListItemText primary="الحساب" />
                        </Link>

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <Link className="linl" to='/seeting'>

                        <ListItemText primary="الاعدادت" />
                        </Link>

                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    > 
                        <ListItemIcon>
                            <ReceiptLongIcon />
                        </ListItemIcon>
                        <Link className="linl" to='/bills'>

                        <ListItemText primary="الفوترة" />
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
                        <ListItemText primary="تسجيل خروج" />


                    </ListItemButton>

                </List>

                {
                  taggle ? (

                <div className="acouunt__dib">
                    <PauseIcon />

                    <Button type="submit" onClick={handleSuccess} className="account" >
                        تفعيل مؤقت للحساب

                    </Button>
                </div>
                   ) : (  
                       <div className="taggle__dis">
                           <span className="taggle">
    متبقي      <span className="taggle__small">2 </span>
 يوم لتفعيل الحساب تلقائيا
     </span>
                       <div className="acouunt__dibs">
                   <PlayArrowIcon />
 
                   <Button type="submit" onClick={handleSub} id="suces" >
                          تفعيل الحساب  

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
                    إيقاف الحساب
                </Modal.Header>
                <Modal.Body id="body__sucse">
                    <img src={puse} alt="" />
                    <br />
                    <p id="yes">   حدد عدد الأيام التي ترغب بإيقاف الحساب بها؟ </p>
 

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
                        الغاء

                    </Button>
                    <Button type="submit" id="sure" onClick={handleFinsh} >
                        تأكيد

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
                       تم ارسال الطلب
                </Modal.Header>
                <Modal.Body id="body__sucse">
                    <img src={suucses} alt="" />
                    <br />
                    <Col>

<div className="div__select" controlId="exampleForm.ControlTextarea1">
  <FormLabel id="details" component="legend">      هل ترغب بتوصيل الوجبات إلى مكانك؟</FormLabel>



  <FormControlLabel value="female" onClick={taggles} control={<Radio />} label="نعم " />
  <FormControlLabel value="male" control={<Radio />} label="لا" />

</div>
</Col>   
  
                </Modal.Body>
                <div className="div__buttons">


                   
                    <Button type="submit" id="sures" onClick={CloseFinsh} >
                        تم

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
                        تفعيل الاشتراك
                </Modal.Header>
                <Modal.Body id="body__sucse">
                    <img src={Group} alt="" />
                    <br />
                    <p id="yes">  
                    هل ترغب بتفعيل الحساب مرة أخرى؟   
  </p>
                </Modal.Body>

                <div className="div__buttons">


<Button type="submit" onClick={CloseSub} id="sure__text" >
    لا

</Button>
<Button type="submit" id="sure__text" onClick={CloseSub} >
    نعم

</Button>


</div>
                
                <br />
            </Modal>




















        </div>
    )
}

export default Sidebar
