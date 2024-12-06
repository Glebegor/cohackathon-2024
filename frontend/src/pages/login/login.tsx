"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const Login = () => {

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

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       let response;

//       switch (mode) {
//         case MODE.LOGIN:
//           response = await wixClient.auth.login({
//             email,
//             password,
//           });
//           break;
//         case MODE.REGISTER:
//           response = await wixClient.auth.register({
//             email,
//             password,
//             profile: { nickname: username },
//           });
//           break;
//         case MODE.RESET_PASSWORD:
//           response = await wixClient.auth.sendPasswordResetEmail(
//             email,
//             window.location.href
//           );
//           setMessage("Resetovací email byl odeslán. Zkontrolujte email.");
//           break;
//         case MODE.EMAIL_VERIFICATION:
//           response = await wixClient.auth.processVerification({
//             verificationCode: emailCode,
//           });
//           break;
//         default:
//           break;
//       }

//       // console.log(response);

//       switch (response?.loginState) {
//         case LoginState.SUCCESS:
//           setMessage("Jste přihlášen");
//           const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
//             response.data.sessionToken!
//           );

//           // console.log(tokens);

//           Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//             expires: 2,
//           });
//           wixClient.auth.setTokens(tokens);
//           router.push("/");

//           break;
//         case LoginState.FAILURE:
//           if (
//             response.errorCode === "invalidEmail" ||
//             response.errorCode === "invalidPassword"
//           ) {
//             setError("Špatný email nebo heslo.");
//           } else if (response.errorCode === "emailAlreadyExists") {
//             setError("Email už existuje.");
//           } else if (response.errorCode === "resetPassword") {
//             setError("Musíte resetovat heslo.");
//           } else {
//             setError("Něco se pokazilo.");
//           }
//           break;
//         case LoginState.EMAIL_VERIFICATION_REQUIRED:
//           setMode(MODE.EMAIL_VERIFICATION);
//           break;
//         case LoginState.OWNER_APPROVAL_REQUIRED:
//           setMessage("Čekáme na schválení");
//           break;
//         default:
//           break;
//       }
//     } catch (err) {
//       console.log(err);
//       setError("Něco se pokazilo.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

  return (
    <div className="h-[calc(100vh-80px)] w-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8 w-64" /*onSubmit={handleSubmit}*/>
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
                    className="ring-2 ring-gray-300 rounded-md p-4 bg-transparent"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="karel@email.cz"
                        className="ring-2 ring-gray-300 rounded-md p-4 bg-transparent"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Heslo</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Heslo"
                    className="ring-2 ring-gray-300 rounded-md p-4 bg-transparent"
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
                        className="ring-2 ring-gray-300 rounded-md p-4 bg-transparent"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-700">Heslo</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Heslo"
                        className="ring-2 ring-gray-300 rounded-md p-4 bg-transparent"
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
                className="ring-1 ring-gray-300 rounded-md p-4 bg-transparent"
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
              className="ring-1 ring-gray-300 rounded-md p-4 bg-transparent"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}

        {/* Label */}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Zapomenuté heslo?
          </div>
        )}
        {/* Button */}
        {/* <button
          className="bg-wapit text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button> */}
        <Button disabled={isLoading}>
            {isLoading ? "Loading..." : buttonTitle}
        </Button>
        {/* Labels */}
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REGISTER)}
          >
            Nemáte učet?
          </div>
        )}
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
