import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import down from '../image/down-arrow.png'

import Groups from '../image/Groups.png'




 
function createData(name, calories, fat, carbs,proteins,proteinss, protein) {
    return { name, calories, fat, carbs, proteins,proteinss,protein };
  }
  
  const rows = [
    createData('  yoghurt', 159, 6.0, 24, 3,66,false),
    createData('Ice cream sandwich', 237, 9.0, 37,23,78, true),
    createData('Eclair', 262, 16.0, 24,788,12, false),
    createData('Cupcake', 305, 3.7, 67, 1234,67,1),
    createData('Gingerbread', 356, 16.0, 49,23,68889, false),
  ];
function Bill() {
    return (
        <div className="bill">
            <p className="bill__p">الفوترة</p>
        <div className="all__texts">
            <div className="line">

            </div>

<div className="vertical__text">
    <p className="p__text">المبلغ المستحق</p>
    <span className="span__texts">100.

<span  className="span__texts__sppa">0</span>
    </span>

 
<div>
<p> </p>


</div>


</div>

<br />
 
 
 
         </div>
 
<div className="pay__now"> 
<p>ريال</p>
        <Button className="pay__nows">الدفع الان</Button>
       </div>
       
<br />

<TableContainer id="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> #</TableCell>
            <TableCell align="right" className="right">التاريخ</TableCell>
            <TableCell  align="right" className="right">المبلغ</TableCell>
            <TableCell  align="right" className="right">نوع الحمية</TableCell>
            <TableCell  align="right" className="right">مدة الاشتراك</TableCell>
            <TableCell  align="right" className="right"> طريقة الدفع</TableCell>
            <TableCell   align="right" className="right"> حالة عملية الدفع
</TableCell>
            <TableCell  align="right" className="right">تحميل الفاتورة  </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="right__" component="th" scope="row">
#              </TableCell>
              <TableCell className="right__" align="center">{row.calories}</TableCell>
              <TableCell  className="rights" align="center">{row.fat}</TableCell>
              <TableCell className="rights" align="center">{row.carbs}</TableCell>
              <TableCell className="rights" align="center">{row.proteins} يوم</TableCell>
              <TableCell className="rights" align="center"> 
              <img src={Groups} alt="Groups" className="Groups" />
              {row.proteinss}
              </TableCell>
            
              {row.protein ?    <TableCell className="rights" align="center">
                  <div className="green__all">
تم الدفع

                  </div>
               
              </TableCell>
                  : 
                  <TableCell className="rights" align="center">
                  <div className="yellow__all">
فشلت

                  </div>
               
              </TableCell>
                  }
            
              {/* <TableCell className="rights" align="center">
                  <div className="green__all">
تم الدفع

                  </div>
               
              </TableCell> */}
              
              <TableCell className="right__" align="center">
                  <img className="cen__ter" src={down} />
              </TableCell>
 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Bill
