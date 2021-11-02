import React from 'react'
import "./style.css"
import image from '../image/Ellipse 230.png';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Row,Form } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import { Button } from 'react-bootstrap';

import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
function index() {
    return (
        <div className="index">
            <p  className="index__p">الحساب</p>
            <div class="profile-pic">
  <label class="-label" for="file">
    <span class="glyphicon glyphicon-camera"></span>
    <span>Change Image
        {/* <LinkedCameraIcon /> */}
          </span>
  </label>
  <input id="file" type="file" onchange="loadFile(event)"/>
  <img src={image} id="output" width="150" />
</div>
<div className="seeting__div"> 
<p  className="index__p">البيانات الشخصية</p>
<Form>
  <div className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label id="lable__seting">الاسم  </Form.Label>
    <Form.Control id="input__seeting" type="text" placeholder=" عبد الرخمن المشهراوي" />
  </div>
  <div className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label id="lable__seting">   الايميل  </Form.Label>
    <Form.Control  id="input__seeting" type="email" placeholder="name@example.com" />
  </div>
  <div className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label id="lable__seting">  رقم الجوال</Form.Label>
    <Form.Control   id="input__seeting" placeholder="123456789" />
  </div>
  <div className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label id="lable__seting">   كلمة المرور  </Form.Label>
    <Form.Control  id="input__seeting" type="email" placeholder="name@example.com" />
  </div>

   
  <FormLabel component="legend"  id="lable__seting">الجنس</FormLabel>

  <FormControl component="fieldset">
       <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel id="lable__seting"  value="female" control={<Radio />} label="ذكر" />
        <FormControlLabel id="lable__seting"  value="male" control={<Radio />} label="أنثى" />
        
      </RadioGroup>
    </FormControl>
    <div className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label id="lable__seting">العمر  </Form.Label>
    <Form.Control id="input__seeting" type="text" placeholder=" عبد الرخمن المشهراوي" />
  </div>
  <div className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label id="lable__seting">الجنسية  </Form.Label>
    <Form.Control id="input__seeting" type="text" placeholder=" عبد الرخمن المشهراوي" />
  </div>
  <div className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label id="lable__seting">العنوان  </Form.Label>
    <Form.Control id="input__seeting" type="text" placeholder=" عبد الرخمن المشهراوي" />
  </div>
        <br />
        
        <Button type="submit" id="save" >
                          حفظ  

                   </Button>
 </Form>
 </div>
        </div>
    )
}

export default index
