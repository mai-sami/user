import React from 'react'
import {Container, Button,Row,Col } from 'react-bootstrap';
import Groups from '../image/user.png'
import eats from '../image/eats.png'


 var lists=[{name:"الفطور",number:33},
 {name:"الغاء",number:12},
 {name:"العشاء",number:22},
 {name:"وجبات خفيفة",number:67},
 {name:"وجبات جانبية",number:87},

]
 
 function IndexS() {
    return (
        <div className="index__chs">
            <p className="index__ch__P">الاحصائيات</p>
            <Container>
  <Row>
     <Col  id="secand_st" sm={8}>
     <div className="st__IndexS__colv">
 <div className="back__imge__yellow">

<img src={eats} className="back__imges" at="Groups" />
<span  className="back__imge__yellow__span">عدد الوجبات</span>
</div>

 
     <div className="secand__set">
     {lists.map((list) => (

<div className="pad__in">
<span className="pad__in__P">    {list.name} </span>
<span className="pad__in___yellow">{list.number}</span>

</div>
))}
 
 
 
</div>
  </div>

     </Col>
    <Col id="first_st" sm={4}> 
    <div className="st__IndexS">
 <div className="back__imge">

<img className="back__imges" src={Groups} at="Groups" />
</div>

<div className="pad__in">
<span className="pad__in__P">إجمالي عدد عملاء </span>
<span className="pad__in__color">40</span>

</div>

 
</div>

</Col>
  </Row>
  </Container>
        </div>
    )
}

export default IndexS
