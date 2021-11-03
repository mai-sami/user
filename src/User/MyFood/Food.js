import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap';
import Flickity from 'react-flickity-component'
import msg from '../image/messenger.png'
import foodim from '../image/foodim.png'
import { InputGroup } from 'react-bootstrap';
import 'flickity/dist/flickity.min.css';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import yallow from '../image/yallow.png'
import green from '../image/green.png'
import greens from '../image/greens.png'
import red from '../image/red.png'
import yellow from '../image/yellow.png'
import smGreen from '../image/smGreen.png'
 
import BigGreen from '../image/BigGreen.png'

import reds from '../image/reds.png'

import './style.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
 import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import comments from '../image/comments.png'
import time from '../image/time.png'
import { Steps } from 'antd';

  var foods = [{ day: "فطور  ", role:"5",image: foodim,  name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
 
{ day: "  غذاء", image: yallow, role: "3",   name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "عشاء  ", image: green, role: "2",   name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "  سلطة", image: red, role: "4",  name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "  وجبات خفيفة", image: greens, role: "1",  name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
 
];


const steps = [
  {
    label: ' جاري توصيل الطلب',
    description: "سيصل الك موظف التوصيل في أقرب وقت ممكن",
  },
  {
    label: '  تم التسيلم     ',
    description:
      ' الطلب الان وصل اليك في المكان المناسب ',
  },
  
];


const getBadgeColor = role => {
    switch (role) {
      case "1":
        return "#FF987A";
        case "2":
        return "#F4BB50";
        case "3":
          return "#84C504";
          case "4":
            return "#FA858C";
            case "5":
              return "#749466";
      default:
        return "gray";
    }
  };
function Food() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { Step } = Steps;

  

  const flickityOptions = {
    initialIndex: 0,
     pageDots:false,
      groupCells: true,
   }

    
    return (
    

        <div className="foods">
                <p  className="food__P">وجباتي</p>

         <div className="food">

    < >

    <Col  xs={4} id="row">
<div className="req__ust">
  <p  className="req__ust__P"> حالة الطلب</p>


   <Steps direction="vertical" size="small" current={0}>
 
    <Step id="lable__step" title="جاري توصيل الطلب" description="سيصل الك موظف التوصيل في أقرب وقت ممكن    " />
    <Step title="تم التسيلم  " id="lable__step" description="الطلب الان وصل اليك في المكان المناسب " />
 
 
   </Steps>
 

</div>

<br />

<div className="req__ust">
 <div className="secand__step">
 <p  className="secand__step__P">موعد التوصيل</p>

 <p  className="secand__blue">تعديل  </p>

  
 </div>

 <div className="therd__step">
 
<img src={time} alr="time" /> 
<p  className="secand__step__Ps">الفترة الصباحية  </p>

 </div>
 <br />
 <div className="therd__step">
 <img src={comments} alr="comments" /> 

<input className="in__Put" placeholder="اكتب تعليق.... " />
 </div>
 <br />

</div>
    </Col>

   
    </ >


     <  >
         <div className="cell">
          <div className="cell__all">

<div className="row__first"> 
<Button type="submit"  id="row__button" >
    تأجيل الوجبات

</Button>
<p className="row_p">اليوم الأول</p>
 

          </div>

  
 
<div className="as">
  <Flickity
                id={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
 
                data-flickity='{ "groupCells": true }'>
 
                {foods.map((food) => (
                    <>
                    <div className="name__food"  >
         <span className="name__food"  style={{ color: ` ${getBadgeColor(food.role)} ` }}> {food.day}</span>
</div>
                   <div value="2" className="carousel-cells"    
                     >
                  

                    <img src={food.image} className="im" alt="msg" />
                    <div className="a">

                      <div className="flex__foods">
                        <span className="flex__foods__span"> {food.price} #</span>
                        <div className=" ">

                          <img className="flex__foods__img"  style={{ color: ` ${getBadgeColor(food.role)} ` }} src={yellow} alt="msg" />
                          <span className="flex__foods__span">{food.priceType}</span>
                          <span className="flex__foods__span"> سعره</span>
                        </div>

                      </div>
                      <span className="flex__foods__PP">    {food.name}  </span>
                      <Stack spacing={1}>
                        <Rating name="size-medium" defaultValue={3} />
                      </Stack>
                    </div>
                   </div>  
  
                        </>
                 ))}
                </Flickity>    
                      
 
               </div>
 
        </div>
        </div>

    </ >
    
     
         </div>
         </div>
    )
}

export default Food
