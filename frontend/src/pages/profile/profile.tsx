import { emojis, EmojiType } from "@/components/emotions";
import Lottie from "lottie-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatarImg from "../../../public/avatar.jpg"
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { User, UserProfile } from '../../../../types/user'; 
import { GlobalContext } from "@/context/global";
import { UserRoundCheck, UserRoundPlus } from "lucide-react";

const EmotionElement:React.FC<EmotionElementProps> = ({emoji}) => {
    return(
        <div>
            <Lottie animationData={emojis[emoji as keyof typeof emojis]}/>
        </div>
    )
}

const Profile = () => {
    const globalContext = useContext(GlobalContext);
    const [isFriend, setIsFriend] = useState<boolean>(false);

    const isMe = false;

    const [user, setUser] = useState<UserProfile>(
        {
            user: globalContext.user,
            description: "Student střední školy, který se zajímá o programování a design. Rád se učím nové věci a jsem otevřený novým přátelstvím.",
            interests: ["Frontend", "Backend", "UI/UX", "Design", "Mobile", "Web"],
            note: "Ajťák",
            profile_picture: "avatarImg",
            back_story: "Hustej týpek"
        }
    );

    return(
        <div className="relative">
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
            <div className="flex flex-col gap-8 w-2/3 m-auto z-10 pt-14">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex gap-4 items-center">
                        <Avatar className="size-16">
                            <AvatarImage src={avatarImg} alt="avatar" />
                            <AvatarFallback>{user.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <p className="text-4xl text-white font-sans font-semibold select-none">{`${user.user.name} ${user.user.surname}`}</p>
                    </div>
                    <Button className="bg-fosterPink hover:bg-fosterPink/90 text-white px-4 py-2 rounded-3xl" onClick={() => setIsFriend(prev => !prev)}>
                        {isFriend ? <UserRoundCheck/> : <UserRoundPlus/>}
                        {isFriend ? "Přátelé" : "Do přátel"}
                    </Button>
                </div>
                <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl animate-in duration-1000">
                    <p className="text-xl font-sans font-semibold">O mně</p>
                    <p className="text-lg text-black/80 font-sans font-semibold">{user.description}</p>
                    <p className="text-xl font-sans font-semibold">Zájmy</p>
                    <div className="flex gap-2">
                        {user.interests.map((interest) => (
                            <Button variant="outline" size="sm" key={interest}>{interest}</Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile