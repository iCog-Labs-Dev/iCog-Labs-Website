import logo from "../public/logo.png"; 
import Image from "next/image"; //will work on this

const Header = () => {
  return (
    <div>
        <div>
            <img src={logo} alt="" />
        </div> 
    </div>
  )
}

export default Header