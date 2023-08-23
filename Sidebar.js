import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsMap,BsGear}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
             Washing Center
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> ADD NAME
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> ADD NAME
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Add Employee
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> ADD NAME
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Profile
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;
