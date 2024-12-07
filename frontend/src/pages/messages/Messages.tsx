import img from "../../../public/avatar.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";



const Messages = () => {
    const [selectedUser, setSelectedUser] = useState<string>();
    
    const handleSelectUser = (userName: string) => {
      setSelectedUser(userName);
    };

    const users = [
        {
            user: "John Doe",
            messages: [
                {
                    sender: true,
                    message: "Hello"
                },
                {
                    sender: false,
                    message: "Hi"
                },
                {
                    sender: true,
                    message: "How are you?"
                },
                {
                    sender: false,
                    message: "I'm fine, thank you"
                }
            ]
        },
        {
            user: "Jane Doe",
            messages: [
                {
                    sender: true,
                    message: "what's up?"
                },
                {
                    sender: false,
                    message: "Nothing much"
                },
                {
                    sender: true,
                    message: "How are you?"
                },
                {
                    sender: false,
                    message: "I'm ok"
                }
            ]
        },
        {
            user: "Jane Smith",
            messages: [
                {
                    sender: true,
                    message: "hey"
                },
                {
                    sender: false,
                    message: "Hi"
                },
                {
                    sender: true,
                    message: "hows it going?"
                },
                {
                    sender: false,
                    message: "I'm good, thanks"
                }
            ]
        },
        {
            user: "John Smith",
            messages: [
                {
                    sender: true,
                    message: "oi"
                },
                {
                    sender: false,
                    message: "oi mate"
                },
                {
                    sender: true,
                    message: "oi oi?"
                },
                {
                    sender: false,
                    message: "oi"
                }
            ]
        }
    ];

  return (
    <div>
        <div className="flex flex-col gap-8 w-2/3 m-auto z-10 pt-14 h-[calc(100vh-56px)]">
            <div className="flex justify-between items-center gap-4">
                <p className="text-4xl text-white font-sans font-semibold select-none">Chat</p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl h-full">
                <div className="flex gap-4 h-full">
                    <div className="w-1/3 flex flex-col gap-4">
                        {users.map((user, index) => {
                            return (
                                <div key={index} className="flex w-full items-center gap-4 p-2 bg-gray-300 rounded-3xl cursor-pointer" onClick={() => handleSelectUser(user.user)}>
                                    <div className="w-16">
                                        <Avatar className="size-16">
                                            <AvatarImage src={img} alt="avatar" />
                                            <AvatarFallback>{user.user[0]}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-2xl text-black font-sans font-semibold select-none">{user.user}</p>
                                        <p className="text-sm text-black font-sans font-semibold select-none truncate max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-2/3">
                        {selectedUser !== "null" ? 
                        <div className="flex flex-col gap-3 justify-end w-full h-[82%] px-1">
                            {
                                users.map((user, index) => (
                                    user.user === selectedUser ? 
                                    user.messages.map((message, index) => (
                                        message.sender ? 
                                        <div key={index} className="flex justify-end">
                                            <div className="px-3 py-2 text-base bg-gradient-to-r bg-fosterPurple rounded-3xl text-white">{message.message}</div>
                                        </div> :
                                        <div key={index} className="flex items-center gap-2">
                                            <Avatar className="w-8 h-8">
                                                <AvatarImage src={img} />
                                                <AvatarFallback>Avatar</AvatarFallback>
                                            </Avatar>
                                            <div className="px-3 py-2 text-base bg-gradient-to-r bg-fosterPink rounded-3xl text-white">{message.message}</div>
                                        </div>
                                    )) : null
                                ))
                            }
                        </div>
                        :
                        <div className="w-2/3 h-full flex justify-center items-center">
                            <h1>Vyberte uživatele</h1>
                        </div>
                        }
                        <div className="flex w-full gap-2 items-center">
                            <Input type="text" placeholder="Zpráva"/>
                            <Button className="rounded-full size-10 duration-300 hover:bg-fosterPurple" style={{background: "linear-gradient(#e54f95,#4a328a)"}}>
                                <Send className="text-xl size-8"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
                {/*<div className="flex h-full">
                    <ChatNavbar onSelectUser={handleSelectUser} />

                    {selectedUser !== "null" ? <div className="w-2/3 max-h-full flex flex-col justify-center items-center m-4">
                        <div className="flex justify-between h-[10%] w-full p-5">
                            <h2>{selectedUser}</h2>
                            <RxCross1/>
                        </div>
                        <div className="flex flex-col gap-3 justify-end w-full h-[82%] px-1">
                            {
                                users.map((user, index) => (
                                    user.user === selectedUser ? 
                                    user.messages.map((message, index) => (
                                        message.sender ? 
                                        <div key={index} className="flex justify-end">
                                            <div className="px-3 py-2 ring-1 bg-gradient-to-r from-gray-600 to-gray-950 rounded-3xl text-xs text-white">{message.message}</div>
                                        </div> :
                                        <div key={index} className="flex items-center gap-2">
                                            <Avatar className="w-8 h-8">
                                                <AvatarImage src={img} />
                                                <AvatarFallback>Avatar</AvatarFallback>
                                            </Avatar>
                                            <div className="px-3 py-2 ring-1 bg-gradient-to-r from-gray-600 to-gray-950 rounded-3xl text-xs text-white">{message.message}</div>
                                        </div>
                                    )) : null
                                ))
                            }
                        </div>
                        <div className="flex w-full h-[8%]">
                            <input type="text" placeholder="Message" className="w-full text-sm bg-transparent rounded-3xl ring-1 ring-black my-3 ml-3 px-3"/>
                            <button className="bg-transparent cursor-pointer border-none">
                                <IoSend className="text-xl"/>
                            </button>
                        </div>
                    </div>
                    :
                    <div className="w-2/3 h-full flex justify-center items-center">
                        <h1>Vyberte uživatele</h1>
                    </div>
                    }
                </div>*/}
            </div>
        </div>
    )
}

export default Messages