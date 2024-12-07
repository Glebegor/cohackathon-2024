import avatar from "../../../public/avatar.jpg"
import Lottie from "lottie-react";
import { emojis, EmojiType } from "@/components/emotions";
import { Button } from "@/components/ui/button";

// dummy data - avatar, name, text, emoji
const data = [
    {
        avatar: avatar,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        emoji: "sad"
    },
    {
        avatar: avatar,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        emoji: "lost"
    },
    {
        avatar: avatar,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        emoji: "angry"
    },
    {
        avatar: avatar,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        emoji: "sad"
    },
    {
        avatar: avatar,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        emoji: "smile"
    },
    {
        avatar: avatar,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        emoji: "angry"
    }
]

const EmotionElement:React.FC<EmotionElementProps> = ({emoji, selectedEmoji, setSelectedEmoji}) => {
    return(
        <div className={`${selectedEmoji && selectedEmoji !== emoji &&"opacity-50"}`} onClick={() => setSelectedEmoji(selectedEmoji === emoji ? undefined : emoji)}>
            <Lottie autoplay={selectedEmoji === emoji} loop={selectedEmoji === emoji} animationData={emojis[emoji as keyof typeof emojis]}/>
        </div>
    )
}

const Explore = () => {
  return (
    <div className="flex flex-col gap-8 w-2/3 m-auto z-10 pt-14">
        <h1 className="text-white">Explore</h1>
        <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl">
            {/* Explore people */}
            {data.map((item) => (
                <div className="flex gap-4 items-center">
                    <div className="relative">
                        <img src={item.avatar} className="w-12 h-12 rounded-full"/>
                        <div className="w-4 absolute top-0 right-0">
                            <EmotionElement emoji={item.emoji as EmojiType} selectedEmoji={item.emoji as EmojiType} setSelectedEmoji={() => {}}/>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[50%]">
                        <p className="text-lg font-bold">{item.name}</p>
                        <p className="truncate max-w-[90%]">{item.text}</p>
                    </div>
                    <div className="flex gap-4">
                        <Button className="bg-fosterPurple hover:bg-fosterPurple/90">Zažádat</Button>
                        <Button className="bg-fosterPink hover:bg-fosterPink/90">Profil</Button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Explore