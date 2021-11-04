import React from 'react'
import "./style.css"
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
import Groups from '../image/Groups.png'
import { Button } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrintIcon from '@mui/icons-material/Print';
function createData(id,name, calories, fat, carbs,proteins,proteinss, protein) {
  return { id,name, calories, fat, carbs, proteins,proteinss,protein };
}

const rows = [
  createData('234534',  ' عبد الرحمن الشهري   ', 159, 6.0, 24, 3,66,false),
  createData('234534','Ice creamsandwich', 237, 9.0, 37,23,78, true),
  createData('234534','Eclair', 262, 16.0, 24,788,12, false),
  createData('234534','Cupcake', 305, 3.7, 67, 1234,67,1),
  createData('234534','Gingerbread', 356, 16.0, 49,23,68889, false),
];
function Index() {
 
    return (
        <div className="index__chs">
                   <p className="index__ch__P">الطلبات</p>

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
            <TableCell>التعريف</TableCell>
            <TableCell align="right" className="samll">اسم العميل</TableCell>
            <TableCell  align="right" className="samll ">نوع الاشتراك</TableCell>
            <TableCell  align="right" className="samll ">عدد السعرات  </TableCell>
            <TableCell  align="right" className="samll ">وجبة الفطور  </TableCell>
            <TableCell  align="right" className="samll "> وجبة الغذاء  </TableCell>
            <TableCell  align="right" className="samll "> وجبة العشاء  </TableCell>

            <TableCell  align="right" className=" samll"> الاطباق الجانبية  </TableCell>
            <TableCell  align="right" className=" samll"> الاطباق الخفيفة</TableCell>
            <TableCell  align="right" className=" samll"> موعد التسليم  </TableCell>

            <TableCell   align="right" className="samll "> مكان التوصيل    
</TableCell>
            <TableCell  align="right" className=" samll">  طباعة الايصال  </TableCell>

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
              <TableCell className="rights" align="center">{row.carbs}</TableCell>
              <TableCell className="rights" align="center">{row.carbs}</TableCell>
              <TableCell className="rights" align="center">{row.carbs}</TableCell>

              <TableCell className="rights" align="center">{row.proteins} يوم</TableCell>
              <TableCell className="rights" align="center"> 
               {row.proteinss}
              </TableCell>
            
                 <TableCell className="rights" align="center">
                   {row.proteinss}


               
               
              </TableCell>
           
            
            
              
              <TableCell className="right__s" align="center">
                  <PrintIcon style={{ fontSize:20 }} className="kitachen__imgs"    />
                  طباعة 
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
