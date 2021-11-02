import React from 'react'
import "./style.css"
import { Row,Col,Container,Button, Modal} from 'react-bootstrap';
import edit from '../image/edit.png';
import puse from '../image/puse.png';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function Acount() {

    const [show, setShow] = React.useState(false);


    const handleSub= () => {
        setShow(true)
    }
    const CloseSub = () => {

        setShow(false)
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
 

</Col>
<Col>
<p className="p__color">3</p>

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
                id="body__sucses"
             >
                <Modal.Header    
 closeButton>
                        تفعيل الاشتراك
                </Modal.Header>
                <Modal.Body id="body__sucses">
                <FormControl component="fieldset">
      <FormLabel component="legend">ما هوة سبب الغالء الاشتراك ؟ </FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="لا أستفيد من الخدمة" />
        <FormControlLabel value="male" control={<Radio />} label="الطعام لا يصل في الوقت المحدد" />
        <FormControlLabel value="other" control={<Radio />} label="سبب آخر" />
        <textarea className="textarea">اكتب هناا..</textarea>
      </RadioGroup>
    </FormControl>
                    <br />
 
                </Modal.Body>

                <div className="div__buttons">
                <Button type="submit" id="sure__text" onClick={CloseSub} >
    تاكيد

</Button>

<Button type="submit" onClick={CloseSub} id="sure__text" >
  الغاء

</Button>
 

 
</div>
<span className="sun__small">ملاحظة/ يرجى مراجعة الشروط والأحكام الخاصة 
    
    <span  className="sun__small__clor">   بإلغاء الاشتراك
    </span>
       </span>         
                <br />
            </Modal>

        </div>

    )
}

export default Acount
