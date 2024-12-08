import { Navbar } from "@/components/HomeNavbar"
import background1 from "../../../public/mainBackground1.svg"
import background2 from "../../../public/mainBackground2.svg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useContext, useState } from "react";
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import { Input } from "@/components/ui/input";


const Home = () => {
  const designContext = useContext(DesignContext)

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    window.location.href = "/explore";
  }

  return (<>
    <Navbar/>
    {designContext.media === EMediaQuery.DESKTOP ? 
      <div className="flex py-14 justify-center min-h-screen w-full">
        <img src={background1} alt="mainImage" className="absolute top-24 right-0 max-h-[80vh]"/>
        <img src={background2} alt="mainImage2" className="absolute bottom-3 left-0 max-h-[80vh]"/>

        <div className="flex flex-col gap-6 w-[45%] h-full justify-center items-start my-auto">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-purple-600 to-pink-700 text-transparent bg-clip-text pb-4">Interaktivní aplikace pro děti v&nbsp;pěstounské péči</h1>
          <h3 className="w-2/3 text-lg">Nevíš si rady? Potřebuješ se s někým seznámit? Přidej se a už nikdy <strong>nebudeš sám!</strong></h3>
          <Link to="/login">
            <Button className="bg-gradient-to-b from-purple-600 to-pink-700 w-40 h-12 text-md rounded-lg rounded-tl-[25px] rounded-br-[25px]">
                  <p>Přihlásit se</p>
            </Button>
          </Link>
          {/* <div className="bg-gray-200 p-8 rounded-xl w-1/2 self-end flex gap-8 flex-col m-auto mt-20">
            <h2 className="text-2xl text-black/80 text-center">Přihlásit se</h2>
            <div className="flex flex-col gap-4">
              <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full"/>
              <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Heslo" type="password" className="w-full"/>
            </div>
            <Button onClick={login} className="bg-gradient-to-b from-purple-600 to-pink-700 w-full text-md rounded-lg">
                <p>Přihlásit se</p>
            </Button>
          </div> */}
        </div>
      </div> 
      :
      <div className="flex items-center justify-center min-h-screen w-full">
        <img src={background1} alt="mainImage" className="absolute top-1/4 opacity-50 right-0 w-2/4"/>

        <div className="flex flex-col gap-4 w-10/12 h-1/2 justify-center items-start z-0">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-purple-600 to-pink-700 text-transparent bg-clip-text">Interaktivní aplikace pro děti v pěstounské péči</h1>
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