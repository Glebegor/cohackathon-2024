import avatar from "../../../public/avatar.jpg"
import Lottie from "lottie-react";
import { emojis, EmojiType } from "@/components/emotions";
import { useState } from "react";
import { BookUser, MessageCircle, UserPlus } from "lucide-react";
import { ReactionInput } from "./reaction";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const users = [
    {
        avatar: avatar,
        name: "Adam Hojer",
        message: "hodně práce, málo času",
        emoji: "sad"
    },
    {
        avatar: avatar,
        message: "prošlo mi maso ve večerce :/",
        name: "Hoang Huy Phi",
        emoji: "angry"
    },
    {
        avatar: avatar,
        name: "Robert Velebný",
        emoji: "smile"
    },
    {
        avatar: avatar,
        name: "Maxmilián Janda",
        emoji: "lost"
    }
]

const EmotionElement:React.FC<EmotionElementProps> = ({emoji}) => {
    return(
        <div>
            <Lottie autoplay={true} loop={false} animationData={emojis[emoji as keyof typeof emojis]}/>
        </div>
    )
}

const User:React.FC<UserProps> = ({user}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-6">
            <div className="size-24 relative" onClick={() => setExpanded(prev => !prev)}>
                {user.message && (
                    <div className="absolute top-0 left-0 w-full select-none">{expanded ? (
                        <div className="bg-white rounded shadow-lg p-2 text-sm leading-5">
                            {user.message}
                        </div>    
                    ) : (
                        <div>
                            <MessageCircle className="size-8 fill-orange-500 stroke-black"/>
                        </div>
                    )}</div>
                )}
                <img src={user.avatar} className="size-24 rounded-full"/>
                <div className="absolute -bottom-4 -right-4 size-14">
                    <EmotionElement emoji={user.emoji as EmojiType} selectedEmoji={user.emoji as EmojiType} setSelectedEmoji={() => {}}/>
                </div>
            </div>
            <p className="text-base font-sans font-semibold">{user.name}</p>
        </div>
    );
}

const Explore = () => {
    const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="relative">
        <div className="flex flex-col gap-8 md:w-2/3 max-md:p-8 m-auto z-10 pt-14">
            <div className="flex justify-between items-center gap-4">
                <p className="text-4xl text-white font-sans font-semibold select-none">Objevy</p>
            </div>
            <div className="flex flex-col gap-8 p-6 bg-gray-200 rounded-3xl">
                <p className="text-2xl font-sans font-semibold">Přátelé</p>
                <div className="flex gap-14 items-center overflow-x-auto custom-scrollbar pb-4">
                    {users.map((user) => (
                        <User {...{user}}/>
                    ))}
                </div>
            </div>
            <ReactionInput/>
            <div className="flex flex-col gap-8 p-6 bg-gray-200 rounded-3xl">
                <p className="text-2xl font-sans font-semibold">Noví lidé</p>
                <div>
                    <Input value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Hledejte..." />
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
                    {users.map((user) => (
                        <div className="flex items-center gap-4">
                            <img src={user.avatar} className="size-16 rounded-full"/>
                            <div className="flex flex-col gap-1 flex-1">
                                <p className="text-2xl font-semibold">{user.name}</p>
                                <p className="text-base">{"DOMUS Tachov"}</p>
                            </div>
                            <div className="flex gap-2 items-center justify-end">
                                <Button className="bg-fosterPurple hover:bg-fosterPurple/80 size-12"><BookUser/></Button>
                                <Button className="bg-fosterPink hover:bg-fosterPink/80 size-12"><UserPlus/></Button>
                            </div>                      
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore