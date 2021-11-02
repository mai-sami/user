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
var foods = [{ day: "فطور  ", role:"5",image: foodim,  name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
 
{ day: "  غذاء", image: yallow, role: "3",   name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "عشاء  ", image: green, role: "2",   name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "  سلطة", image: red, role: "4",  name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "  وجبات خفيفة", image: greens, role: "1",  name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },
{ day: "  فطور", image: foodim, role: "6",   name: "توست الأفوكادو مع البيض", price: 220, priceType: 120 },

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
    const flickityOptions = {
        initialIndex: 1,
        pageDots: false

      }
    
    return (
        <div className="food">
<p  className="food__P">وجباتي</p>
   <Row>

    <Col  xs={4} id="v">1 of 2</Col>


    <Col>  
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
                pageDots={false}

                data-flickity='{ "groupCells": false }'>
 
                {foods.map((food) => (
                    <>
         <span className="name__food"  style={{ color: ` ${getBadgeColor(food.role)} ` }}> {food.day}</span>

                  <div value="2" class="carousel-cells"    
                     >
                  

                    <img src={food.image} class="im" alt="msg" />
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
    
       </Col>
  </Row>
   
             sadddddddddddddddd
        </div>
    )
}

export default Food
