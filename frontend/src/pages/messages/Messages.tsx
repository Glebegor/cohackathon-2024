
import { RxCross1 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";

import img from "../../../public/avatar.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ChatNavbar from "@/components/chatNavbar/ChatNavbar";
import { useState } from "react";

//dummy data for messages for each user- avatar and message different text for each user
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
    },
]



const Messages = () => {
    const [selectedUser, setSelectedUser] = useState("null");
    
    const handleSelectUser = (userName: string) => {
      setSelectedUser(userName);
    };

  return (
    <div className="flex h-full">
        <ChatNavbar onSelectUser={handleSelectUser} />

        {selectedUser !== "null" ? <div className="w-2/3 h-full flex flex-col justify-center items-center">
            {/* Header/Name */}
            <div className="flex justify-between h-[10%] w-full p-5">
                <h2>{selectedUser}</h2>
                <RxCross1/>
            </div>
            {/* Messages */}
            <div className="flex flex-col gap-3 justify-end w-full h-[82%] px-1">
                {/* {messages.map((message, index) => (
                    user.message.sender ? 
                    <div key={index} className="flex justify-end">
                        <div className="px-3 py-2 ring-1 bg-gradient-to-r from-gray-600 to-gray-950 rounded-3xl text-xs text-white">{message.message}</div>
                    </div> :
                    <div key={index} className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={user.message.avatar} />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                        <div className="px-3 py-2 ring-1 bg-gradient-to-r from-gray-600 to-gray-950 rounded-3xl text-xs text-white">{message.message}</div>
                    </div>
                ))} */}
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
            {/* Input */}
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
    </div>
  )
}

export default Messages