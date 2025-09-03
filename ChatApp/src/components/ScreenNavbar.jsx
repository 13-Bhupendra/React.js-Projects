import React from 'react'
import userOneProfile from '../assets/user1.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ScreenNavbar = ({name }) => {
  return (
       <nav className='p-3 d-flex justify-content-between align-items-center '>
                <div className="profile d-flex align-items-center ">
                  <img src={userOneProfile} className='rounded rounded-circle me-4' alt=""  height={"50px"}/>
                    <section>
                        <h5 className='p-0 m-0'>{name}</h5>
                      <span style={{fontSize:"13px" , color:"whitesmoke"}}>Online</span>
                    </section>
                </div>

                <div className="calling">
                      <FaPhoneAlt   style={{fontSize:"24px", cursor:"pointer"}}/> &nbsp;&nbsp;&nbsp; 
                      <FaVideo   style={{fontSize:"24px", cursor:"pointer"}}/>&nbsp;&nbsp;&nbsp;
                      <BsThreeDotsVertical  style={{fontSize:"24px", cursor:"pointer"}} />
                </div>
            </nav>
  )
}

export default ScreenNavbar
