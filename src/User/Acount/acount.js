import React from 'react'
import "./style.css"
import { Row,Col,Container,Button, Modal,Form} from 'react-bootstrap';
import edit from '../image/edit.png';
 import requst from '../image/requst.png';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
 import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
function Acount() {
  const [taggle, setTaggle] = React.useState(false)
  const [age, setAge] = React.useState('');

  const taggles = () => {
    taggle ? setTaggle(false) : setTaggle(true)
  }
const tagglesSecand=()=>{
  taggle ? setTaggle(true) : setTaggle(false)
}
    const [show, setShow] = React.useState(false);
    const [addres, setAddres] = React.useState(false);

    const [finh, setFinh] = React.useState(false);

    const handleAddrees= () => {
      setAddres(true)
  }
  const CloseAddrees = () => {

    setAddres(false)
  }




    const handleSub= () => {
        setShow(true)
    }
    const CloseSub = () => {

        setShow(false)
    }
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleFinsh= () => {
      setShow(false)

      setFinh(true)
  }
  const CloseFinsh = () => {

    setFinh(false)
  }
     
    return (
        <div className="acount">
        <p  className="index__p">الاعدادات</p>
        <div className="acount__div"> 

        <Container>
        <Row>

    <Col>    
    <p className="acount__P">البرنامج</p>
    </Col>
    <Col>
<img src={edit}  className="img" />

    </Col>
    <Col>
    <p className="acount__P__small">كيتو</p>

    </Col>
  </Row>
  <br /> 
  <Row>

<Col>    
<p className="acount__P">تاريخ البدء</p>
</Col>
<Col>
 

</Col>
<Col>
<p className="acount__P__small">18/1/2021</p>

</Col>
</Row>
<br />

<Row>

<Col>    
<p className="acount__P">تاريخ الانتهاء</p>
</Col>
<Col>
<img src={edit} className="img" />

</Col>
<Col>
<p className="acount__P__small">18/1/2021</p>

</Col>
</Row>
<br />
  <Row>

<Col>    
<p className="acount__P">  الايام المتبقية</p>
</Col>
<Col>
<img src={edit} className="img" />


</Col>
<Col>
<p className="p__color">3</p>

</Col>
</Row>
<br />
<Row>

<Col>    
<p className="acount__P">  العنوان  </p>
</Col>
<Col>
<img src={edit} onClick={handleAddrees} className="img" />


</Col>
<Col>
<p className="acount__Ps"> .الرياض، الغدير، طريق الملك عبد العزيز

 
</p>
<span className="place">
مكان مميز: 
<span className="place__color">
شركة الاتصالات
</span>
</span>

</Col>
</Row>
<br />

  <Row>

<Col>    
 </Col>
<Col>
 

</Col>

<Col>
<p className="p__color" onClick={handleSub}>الغاء الاشتراك</p>

</Col>
</Row>
</Container>
        </div>
        <Modal
                show={show }
                onHide={CloseSub}
                backdrop="static"
                keyboard={false}
                centered
              >
                <Modal.Header    
 closeButton>
                        تفعيل الاشتراك
                </Modal.Header>
                <Modal.Body id="body__sucses"                 
>
                <FormControl component="fieldset">
      <FormLabel component="legend" id="subs">ما هوة سبب الغالء الاشتراك ؟ </FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female"  id="subs__teaxt" control={<Radio />} label="لا أستفيد من الخدمة" />
        <FormControlLabel value="male"  id="subs__teaxt"  control={<Radio />} label="الطعام لا يصل في الوقت المحدد" />
        <FormControlLabel value="other" id="subs__teaxt"   control={<Radio />} label="سبب آخر" />
        <textarea className="textarea">اكتب هناا..</textarea>
      </RadioGroup>
    </FormControl>
                    <br />
 
                </Modal.Body>

                <div className="div__buttons">
                <Button type="submit" onClick={CloseSub} id="sure" >
  الغاء

</Button>
                <Button type="submit" id="sure" onClick={handleFinsh} >
    تاكيد

</Button>

 
 

 
</div>
<span className="sun__small">ملاحظة/ يرجى مراجعة الشروط والأحكام الخاصة 
    
    <span  className="sun__small__clor">   بإلغاء الاشتراك
    </span>
       </span>         
                <br />
            </Modal>
            <Modal
                show={finh}
                onHide={CloseFinsh}
                backdrop="static"
                keyboard={false}
                centered
             >
                <Modal.Header    id="mods"
 closeButton>
                         مراجعة الطلب
                </Modal.Header>
                <Modal.Body id="body__requst">
                    <img src={requst} alt="" />
                    <br />
                    <p id="yes__requst">  تم تقديم طلبك   ...    </p>
                    <br />

                    <span className="normal">   سيتم مراجعة الطلب والرد عليه خلال
                    
                    <span className="time"> 24 ساعة      
                    </span>
                             </span>

                </Modal.Body>
                <div className="div__buttons">


                   
                    <Button type="submit" id="sures" onClick={CloseFinsh} >
                        تم

                    </Button>


                </div>
                <br />
            </Modal>

            <Modal
                show={addres }
                onHide={CloseAddrees}
                backdrop="static"
                keyboard={false}
                centered
             >
                <Modal.Header    id="modss"
 closeButton>
                       العنوان
                </Modal.Header>
                <Modal.Body id="body__sucse">
                    
                <Col>

<div className="select__place" controlId="exampleForm.ControlTextarea1">
  <FormLabel id="select__place__p " >      هل ترغب بتوصيل الوجبات إلى مكانك؟</FormLabel>
 
  <FormControlLabel value="female" onClick={taggles} control={<Radio />} label="نعم " />
  <FormControlLabel value="male" onClick={tagglesSecand}control={<Radio />} label="لا" />

</div>
</Col>

   {taggle ?
   <div>  <FormControl
   fullWidth>
   <Select
     className="css-root"
     labelId="demo-simple-select-label"
     id="demo-simple-select"

     onChange={handleChange}>
     <option  >اختر المنطقة</option>

     < MenuItem  id="MenuItem">
      <span>   الدمام
     </span>
     <span>   تكلفة التوصيل: 200 ريال</span>
      </ MenuItem >
      < MenuItem  id="MenuItem">
      <span>   الدمام
     </span>
     <span>   تكلفة التوصيل: 200 ريال</span>
      </ MenuItem >
      < MenuItem  id="MenuItem">
      <span>   الدمام
     </span>
     <span>   تكلفة التوصيل: 200 ريال</span>
      </ MenuItem >              </Select>
 </FormControl>

 <Form.Control
   placeholder="أدخل العنوان   "
   id="pre"

 />

 <Form.Control
   placeholder="مكان مميز بعنوانك  "
   id="pre"

 />
</div >
   :<p>sdvs</p>}
                </Modal.Body>

                <div className="div__buttons">


 
<Button type="submit" id="sure__text" onClick={CloseAddrees} >
تاكيد</Button>


</div>
                
                <br />
            </Modal>

        </div>

    )
}

export default Acount
