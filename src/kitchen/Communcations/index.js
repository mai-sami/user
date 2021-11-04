import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import down from '../image/down-arrow.png'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './index.css' 
import { Button } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {  Form } from 'react-bootstrap';
function createData(id,name, calories, fat, carbs,proteins,proteinss, protein) {
  return { id,name, calories, fat, carbs, proteins,proteinss,protein };
}

const rows = [
  createData('234534',  ' عبد الرحمن الشهري   ', 159, 6.0, "' abdusd'", 3,66,false),
  createData('234534','Ice creamsandwich', 237, 9.0, 37,23,78, true),
  createData('234534','Eclair', 262, 16.0, 24,788,12, false),
  createData('234534','Cupcake', 305, 3.7, 67, 1234,67,1),
  createData('234534','Gingerbread', 356, 16.0, 49,23,68889, false),
];
function Index() {
 
    return (
        <div className="index__chs">
                   <p className="index__ch__P">التواصل</p>

                    <div className="index__ch">
 
                    <div className="rwo__cell">
                    <div className="export__all"> 
      <div className="export">
 
                    <Button type="submit"   className="account" >
                    xml.xs تصدير

                    </Button>
                    <ArrowDownwardIcon />
                </div>
                <div className="export">
                   

                    <Button type="submit"   className="account" >
                      pdf تصدير

                    </Button>
                    <ArrowDownwardIcon />
                </div>
                </div>

                   <div className="header__search">
        <input className="header__searchInput" placeholder="بحث ..." type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>  

     
       </div>
      
      <br />
      
<TableContainer id="tables" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  >التعريف</TableCell>
            <TableCell align="center" className="samll">اسم العميل</TableCell>
            <TableCell  align="center" className="samll ">رقم الجوال  </TableCell>
            <TableCell  align="center" className="samll ">   العنوان  </TableCell>
            <TableCell  align="center" className="samll ">  مكان مميز   </TableCell>
            <TableCell  align="center" className="samll "> السائق    </TableCell>
            <TableCell  align="center" className="samll "> حالة الطلب للعميل    </TableCell>

          

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="rights" component="th" scope="row">    {row.id}       </TableCell>
              <TableCell className="rights__name" align="center">
              <AccountCircleIcon style={{ fontSize:23}} className="kitachen__img"   />

              
                {row.name}
 
              
              </TableCell>
              <TableCell  className="rights" align="center">{row.fat}</TableCell>
              <TableCell className="rights" align="center">{row.carbs}</TableCell>
              <TableCell className="rights" align="center">{row.carbs}</TableCell>
              <TableCell className="rights" align="center">
              <Form.Select aria-label="Default select example">
<option> اختر السائق</option>
<option value="1"> {row.carbs}</option>
<option value="2"> {row.carbs}</option>
<option value="3"> {row.carbs}</option>
</Form.Select>

                  
                  
                  </TableCell>
              <TableCell className="rights" align="center">
                  <div className="select__table">
              <Form.Select aria-label="Default select example">
              <option> اختر الحالة</option>
<option value="1">  تم التسليم</option>
<option value="2"> {row.carbs}</option>
<option value="3"> {row.carbs}</option>
</Form.Select>
<Button type="submit"   className="select__table__button" >
                  ارسال   
  </Button>
</div>
                  
                  </TableCell>
              
 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

             </div>
             </div>
      
    )
}

export default Index
