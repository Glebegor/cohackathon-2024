
import { RxCross1 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";

import img from "../../../public/avatar.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//dummy data for messages - avatar and message
const messages = [
    {
        sender: true,
        avatar: img,
        message: "Hello"
    },
    {
        sender: false,
        avatar: img,
        message: "Hi"
    },
    {
        sender: true,
        avatar: img,
        message: "How are you?"
    },
    {
        sender: false,
        avatar: img,
        message: "I'm fine, thank you"
    }
]


const Messages = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        {/* Header/Name */}
        <div className="flex justify-between h-[10%] w-full p-5">
            <h2>Name</h2>
            <RxCross1/>
        </div>
        {/* Messages */}
        <div className="flex flex-col gap-3 justify-end w-full h-[82%] px-1">
            {messages.map((message, index) => (
                message.sender ? 
                <div key={index} className="flex justify-end">
                    <div className="px-3 py-2 ring-1 bg-gradient-to-r from-gray-600 to-gray-950 rounded-3xl text-xs text-white">{message.message}</div>
                </div> :
                <div key={index} className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={message.avatar} />
                        <AvatarFallback>Avatar</AvatarFallback>
                    </Avatar>
                    <div className="px-3 py-2 ring-1 bg-gradient-to-r from-gray-600 to-gray-950 rounded-3xl text-xs text-white">{message.message}</div>
                </div>
            ))}
        </div>
        {/* Input */}
        <div className="flex w-full h-[8%]">
            <input type="text" placeholder="Message" className="w-full text-sm bg-transparent rounded-3xl ring-1 ring-black my-3 ml-3 px-3"/>
            <button className="bg-transparent cursor-pointer border-none">
                <IoSend className="text-xl"/>
            </button>
        </div>
    </div>
  )
}

export default Messages