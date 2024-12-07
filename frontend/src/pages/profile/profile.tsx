import { emojis, EmojiType } from "@/components/emotions";
import Lottie from "lottie-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatarImg from "../../../public/avatar.jpg"

const EmotionElement:React.FC<EmotionElementProps> = ({emoji}) => {
    return(
        <div>
            <Lottie animationData={emojis[emoji as keyof typeof emojis]}/>
        </div>
    )
}


//dummy data - diary - date, emoji, text
const diary = [
    {
        date: "2022-10-10",
        emoji: "smile",
        text: "Today was a good day"
    },
    {
        date: "2022-10-11",
        emoji: "angry",
        text: "Today was a bad day"
    },
    {
        date: "2022-10-12",
        emoji: "sad",
        text: "Today was a great day"
    },
    {
        date: "2022-10-13",
        emoji: "love",
        text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        date: "2022-10-14",
        emoji: "sadWithTear",
        text: "Today was a great day"
    },
    {
        date: "2022-10-15",
        emoji: "neutral",
        text: "Today was a great day"
    },
    {
        date: "2022-10-16",
        emoji: "joy",
        text: "Today was a great day"
    },
    {
        date: "2022-10-17",
        emoji: "mindBlown",
        text: "Today was a great day"
    },
    {
        date: "2022-10-18",
        emoji: "party",
        text: "Today was a great day"
    },
    {
        date: "2022-10-19",
        emoji: "sleep",
        text: "Today was a great day"
    },
    {
        date: "2022-10-20",
        emoji: "updown",
        text: "Today was a great day"
    }
]

const profile = () => {

  return (
    <div className="flex h-full w-full z-0 relative">
        <div className="-z-50 top-0 left-0 absolute w-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{
                top: 0,
                left: 0,
                opacity: 1,
                width: "100%",
                height: "50%",
                zIndex: 1,
                }}
            >
                <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#e54f95", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#4a328a", stopOpacity: 1 }} />
                </linearGradient>
                </defs>
                <path
                d="M0,64L30,69.3C60,75,120,85,180,101.3C240,117,300,139,360,133.3C420,128,480,96,540,90.7C600,85,660,107,720,122.7C780,139,840,149,900,133.3C960,117,1020,75,1080,74.7C1140,75,1200,117,1260,128C1320,139,1380,149,1410,154.7L1440,160V0H1410C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
                fill="url(#wave-gradient)"
                />
            </svg>
        </div>

        <div className="flex w-full h-full">
            {/* Profil */}
            <div className="flex flex-col w-1/2 items-center">
                <div className="w-3/4 h-1/2 mt-[30%]">
                    <div className="flex gap-8 items-center">
                        <Avatar className="w-20 h-20">
                            <AvatarImage src={avatarImg} />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                        <h1>Jméno</h1>
                    </div>
                    <div className="flex flex-col p-6 text-xl gap-3">
                        <p>Věk: 18</p>
                        <p>Stav: Student</p>
                        <p>Bydliště: Brno</p>
                        <p>Domov: Sirotčinec Adama Hojera</p>
                    </div>
                </div>
            </div>
            {/* Deník */}
            <div className="flex w-1/2 justify-center">
                <div className="w-3/4 h-1/2 mt-[30%]">
                    <p className="text-3xl font-sans border-none font-semibold mb-6">Diář</p>
                    <div className="flex flex-col gap-5 p-5 rounded-2xl max-h-[500px] overflow-y-auto scrollbar bg-gray-200">
                        <input type="text" placeholder="Hledání" className="bg-transparent p-2 rounded-lg ring-1"/>
                        {diary.map((entry) => (
                            <div className="flex gap-5">
                                <div className="w-6">
                                    <EmotionElement emoji={entry.emoji} selectedEmoji={undefined} setSelectedEmoji={function (value: any): void {
                                        throw new Error("Function not implemented.");
                                    } }/>
                                </div>
                                <div className="w-5/6">
                                    <p className="text-md font-sans font-semibold">{entry.date}</p>
                                    <p className="text-sm font-sans">{entry.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default profile