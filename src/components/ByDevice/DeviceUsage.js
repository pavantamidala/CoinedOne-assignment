import React from 'react'
import { AiOutlineLaptop } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import "../../styles/DeviceUsage.css";
import timeConvert from '../../methods/minutesToHours'
function DeviceUsage(props) {
  console.log(props)
    const [lapHours,lapMin] = timeConvert(props.deviceUsage.laptop)
    const [phoneHours,phoneMin] = timeConvert(props.deviceUsage.mobile)
    let laptop = lapHours !==0?`${lapHours}h.${lapMin}m`: `${lapMin} m`
    let phone = phoneHours !==0? `${phoneHours}h.${phoneMin}m`: `${phoneMin} m`
    return (
        <div className="device-usage"> 
            <h3> By Devices </h3>
            <div className="phone">
                <IconContext.Provider value={{size:"60px"}}>
                    <IoPhonePortraitOutline />
                </IconContext.Provider>
                <span className="detail">
                 Adi's phone
                </span> <br />
                {phone}
            </div>
            <div className="laptop">
                <IconContext.Provider value={{size:"110px"}}>
                    <AiOutlineLaptop />     
                </IconContext.Provider>
                <span className="detail">
                 Adi's laptop
                </span> <br />
                {laptop}
            </div>
        </div>
    )
}

export default DeviceUsage
