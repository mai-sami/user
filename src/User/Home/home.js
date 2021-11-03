import React from 'react'
import Header  from '../Headers/Header'
import Sidebar  from '../Headers/Sidebar'
import Food  from '../MyFood/Food'
import Index  from '../Seeting/index'
import Acount  from '../Acount/acount'
import Bill  from '../Bills/Bill'

 
function Home() {
    return (
        <>
        <div className="home">
        <div className="homes">

            <Header />
            <Food />

            </div>

            <Sidebar />
             </div>
          </>
    )
}

function seeting() {
    return (
        <>
        <div className="home">
        <div className="homes">

            <Header />
            <Index />

            </div>

            <Sidebar />
             </div>
          </>
    )
}

function acount() {
    return (
        <>
        <div className="home">
        <div className="homes">

            <Header />
            <Acount />

            </div>

            <Sidebar />
             </div>

             
          </>
    )
}

function Bills() {
    return (
        <>
        <div className="home">
        <div className="homes">

            <Header />
            <Bill/>

            </div>

            <Sidebar />
             </div>
          </>
    )
}


export {Home ,seeting,acount ,Bills}
