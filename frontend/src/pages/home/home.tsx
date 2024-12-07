import { Navbar } from "@/components/HomeNavbar"
import background1 from "../../../public/mainBackground1.svg"
import background2 from "../../../public/mainBackground2.svg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useContext } from "react";
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";


const Home = () => {
  const designContext = useContext(DesignContext)

  return (<>
    <Navbar/>
    {designContext.media === EMediaQuery.DESKTOP ? 
      <div className="flex items-center justify-center min-h-screen w-full">
        <img src={background1} alt="mainImage" className="absolute top-24 right-0 w-1/4"/>
        <img src={background2} alt="mainImage2" className="absolute bottom-3 left-0 w-1/5"/>

        <div className="flex flex-col gap-4 w-1/2 h-1/2 justify-center items-start">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-purple-600 to-pink-700 text-transparent bg-clip-text">Interaktivní prostředí pro děti v nouzi</h1>
          <h3 className="w-2/3">Nevíš si rady? Potřebuješ se s někým seznámit? Zaregistruj se a nikdy <strong>nebudeš sám!</strong></h3>
          <Link to={"/login"}>
            <Button className="bg-gradient-to-b from-purple-600 to-pink-700 w-40 h-14 text-md rounded-tl-[25px] rounded-br-[25px]">
                <p>Zaregistrovat se</p>
            </Button>
          </Link>
        </div>
      </div> 
      :
      <div className="flex items-center justify-center min-h-screen w-full">
        <img src={background1} alt="mainImage" className="absolute top-1/4 opacity-50 right-0 w-2/4"/>

        <div className="flex flex-col gap-4 w-10/12 h-1/2 justify-center items-start z-0">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-purple-600 to-pink-700 text-transparent bg-clip-text">Interaktivní prostředí pro děti v nouzi</h1>
          <h3 className="w-2/3">Nevíš si rady? Potřebuješ se s někým seznámit? Zaregistruj se a nikdy <strong>nebudeš sám!</strong></h3>
          <Link to={"/login"}>
            <Button className="bg-gradient-to-b from-purple-600 to-pink-700 w-40 h-14 text-md rounded-tl-[25px] rounded-br-[25px]">
                <p>Zaregistrovat se</p>
            </Button>
          </Link>
        </div>
      </div> 
      }
    </>
  )

  
}

export default Home