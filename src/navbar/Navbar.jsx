import './Navbar.css'
import { LuSendHorizonal } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <a href="#about">@Eyu.shh</a>
        </div>
        <div className='navbar-center'>
            <a href="#about"><FaRegUser />&nbsp;About</a>
            <a href="#experience"><GoProjectSymlink className='left-margin'/>&nbsp;Experience</a>
            <a href="#projects"><PiSuitcaseSimpleBold className='left-margin'/>&nbsp;Projects</a>
        </div>
        <div className='navbar-right'>
            <a href="#contact">Contact Me&nbsp;<LuSendHorizonal /></a>
        </div>
    </div>
  )
}
