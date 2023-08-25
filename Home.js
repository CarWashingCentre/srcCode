import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill,BsPlusCircle,bsArrowBarRight}
 from 'react-icons/bs'


import {Link} from 'react-router-dom';
function Home() {


     const handleAddService=()=>
     {
        console.log("Service page called");
     }

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>ADMIN DASHBOARD</h3>
        </div>

        <div  onClick={()=>alert("Hello") } className='main-cards'>
            <div className='card' >
                <div className='card-inner'>
                    <h3>SERVICE</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                    
                </div>
                {/* <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
        Click Me
      </span>
    </button> */}

                <h1>5</h1>
            </div>
            <div onClick={()=>alert("Hello")} className='card'>
                <div className='card-inner'>
                    <h3>EMPLOYEE REGISTRATION</h3>
                    <BsPlusCircle className='card_icon' />
                
                  
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ATTENDANCE</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h3>Present: 05</h3>
            </div>
            
            <div onClick={()=>alert("Hello")} className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMER COUNT</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>

        </div>




<div onClick={()=>alert("Hello")} className='card1'>
                <div className='card-inner'>
                    <h4 className='ADDREM'>ADD/REMOVE SERVICE</h4>
                    <bsArrowBarRight className='card_icon' />
                
                  
                </div>
               
            </div>



    </main>
  )
}

export default Home;
