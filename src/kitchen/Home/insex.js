import React from 'react'
import Indexs  from '../Communcations/index'
import Sidebar  from '../Header/Sidebar'
 import Index  from '../Requst/index'
 import Header  from '../Header/Header'
 import IndexS  from '../statistics/IndexS'


function insex() {
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

function communcation() {
    return (
        <>
        <div className="home">
        <div className="homes">

            <Header />
 <Indexs />
            </div>

            <Sidebar />
             </div>
          </>
    )
}
function statistics() {
    return (
        <>
        <div className="home">
        <div className="homes">

            <Header />
 <IndexS />
            </div>

            <Sidebar />
             </div>
          </>
    )
}
export   {insex,communcation,statistics}
