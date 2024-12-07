import { Navbar } from "@/components/HomeNavbar"
import background1 from "../../../public/mainBackground1.svg"
import background2 from "../../../public/mainBackground2.svg"

const Home = () => {
  return (
    <div className="flex items-start justify-start h-full w-full">
        <Navbar/>
        <img src={background1} alt="mainImage" className="absolute top-20 right-0 w-1/4"/>
        <img src={background2} alt="mainImage" className="absolute top-60 left-0 w-1/4"/>
    </div>
  )
}

export default Home