import img from "../../../public/avatar.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { BookCheck, BookOpenCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesignContext } from "@/context/design";
import { EMediaQuery } from "@/enums/design";



const Messages = () => {
    const [selectedUser, setSelectedUser] = useState<string>();
    
    const handleSelectUser = (userName: string) => {
      setSelectedUser(userName);
    };

    const isMobile = useContext(DesignContext).media === EMediaQuery.MOBILE;

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
                },
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
                },
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
                },
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
                },
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
                },
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

    const ChatMessages = () => {
        return(
            <div className="md:w-2/3 h-full flex flex-col gap-3 justify-end">
                {selectedUser ? (
                    <>
                        <div className="flex flex-col gpa-1 overflow-y-auto custom-scrollbar h-[68vh] pr-2">
                        {
                            users.map((user) => (
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
                        <div className="flex w-full gap-2 items-center">
                            <Input type="text" placeholder="Zpráva"/>
                            <Button className="rounded-full size-10 duration-300 hover:bg-fosterPurple" style={{background: "linear-gradient(#e54f95,#4a328a)"}}>
                                <Send className="text-xl size-8"/>
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="h-full justify-center items-center flex flex-col gap-4">
                        <BookOpenCheck size={32} />
                        <p className="text-lg">Vyberte uživatele</p>
                    </div>
                )}
            </div>
        )
    }

  return (
    <div>
        <div className="flex flex-col gap-8 md:w-2/3 max-md:p-8 m-auto z-10 pt-14 md:h-[calc(100vh-56px)]">
            <div className="flex justify-between items-center gap-4">
                <p className="text-4xl text-white font-sans font-semibold select-none">Chat</p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl h-full">
                <div className="flex max-md:flex-col gap-4 h-full">
                    <div className="md:w-1/3 flex flex-col gap-4">
                        {users.map((user, index) => {
                            return (
                                <div key={index} className="flex w-full items-center gap-4 p-2 bg-gray-300 rounded-3xl cursor-pointer" onClick={() => handleSelectUser(user.user)}>
                                    <div className="w-16">
                                        <Avatar className="size-16">
                                            <AvatarImage src={img} alt="avatar" />
                                            <AvatarFallback>{user.user[0]}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="w-full flex flex-col gap-1">
                                        <p className="text-2xl text-black font-sans font-semibold select-none">{user.user}</p>
                                        <p className="text-sm text-black font-sans font-semibold select-none truncate w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {!isMobile && <ChatMessages/>}
                </div>
            </div>
            {isMobile && 
                <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl h-full">
                    <div className="flex max-md:flex-col gap-4 h-full">
                        <ChatMessages/>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Messages