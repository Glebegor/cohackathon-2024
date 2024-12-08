"use client";

import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/HomeNavbar"
import background1 from "../../../public/mainBackground1.svg"
import background2 from "../../../public/mainBackground2.svg"
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";
import { pb } from "@/App";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const Login = () => {

  const mediaContext = useContext(DesignContext);

  const [mode, setMode] = useState(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === MODE.LOGIN
      ? "Přihlášení"
      : mode === MODE.REGISTER
      ? "Registrace"
      : mode === MODE.RESET_PASSWORD
      ? "Reset hesla"
      : "Verifikace emailu";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Přihlásit"
      : mode === MODE.REGISTER
      ? "Registrovat"
      : mode === MODE.RESET_PASSWORD
      ? "Resetovat heslo"
      : "Ověřit email";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

        switch (mode) {
          case MODE.LOGIN:
            pb.collection("users").authWithPassword(email, password).then((e) => {window.location.href = "/explore"}).catch((err) => {setError("Něco se pokazilo.")});
            break;
          case MODE.REGISTER:
            //register
            //resoponse =
            break;
          case MODE.RESET_PASSWORD:
            //optional
            setMessage("Resetovací email byl odeslán. Zkontrolujte email.");
            break;
          case MODE.EMAIL_VERIFICATION:
            //optional - email verification
            break;
          default:
            break;
        }

      } catch (err) {
        console.log(err);
        setError("Něco se pokazilo.");
      } finally {
        setIsLoading(false);
      }
  }


  return (
    <div className="h-screen w-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-start justify-center">


      {mediaContext.media === EMediaQuery.DESKTOP &&
        <>
          <Navbar/>
          <img src={background1} alt="mainImage" className="absolute top-24 right-0 max-h-[80vh]"/>
          <img src={background2} alt="mainImage2" className="absolute bottom-3 left-0 max-h-[80vh]"/>
        </>
      }
      {mediaContext.media === EMediaQuery.MOBILE && 
        <>
          <Navbar/>
          <img src={background1} alt="mainImage" className="absolute top-1/4 opacity-15 right-0 w-2/4"/>
        </>
      }

      <form className="flex flex-col gap-8 w-64 my-auto z-10" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold">{formTitle}</h1>
        {/* Reginster */}
        {mode === MODE.REGISTER && (
            <>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Username</label>
                    <input
                    type="text"
                    name="username"
                    placeholder="Karel"
                    className="ring-1 ring-black rounded-md p-4 bg-transparent"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="karel@email.cz"
                        className="ring-1 ring-black rounded-md p-4 bg-transparent"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Heslo</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Heslo"
                    className="ring-1 ring-black rounded-md p-4 bg-transparent"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </>
        )}
        {/* Login */}
        {mode === MODE.LOGIN && (
            <>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="karel@email.cz"
                        className="ring-1 ring-black rounded-md p-4 bg-transparent"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Heslo</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Heslo"
                        className="ring-1 ring-black rounded-md p-4 bg-transparent"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </>
        )}
        {/* Reset hesla */}
        {mode === MODE.RESET_PASSWORD && (
            <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">Email</label>
                <input
                type="email"
                name="email"
                placeholder="Email"
                className="ring-1 ring-black rounded-md p-4 bg-transparent"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        )}
        {/* Ověření emailu */}
        {mode === MODE.EMAIL_VERIFICATION && (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Verifikační kód</label>
            <input
              type="text"
              name="emailCode"
              placeholder="Kód"
              className="ring-1 ring-black rounded-md p-4 bg-transparent"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}

        {/* Label */}
        {/* Button */}
        {/* <button
          className="bg-wapit text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button> */}
        <Button disabled={isLoading} className="bg-gradient-to-b from-purple-600 to-pink-700">
            {isLoading ? "Loading..." : buttonTitle}
        </Button>
        {/* Labels */}
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Už máte učet?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Zpět na přihlášení
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default Login;
