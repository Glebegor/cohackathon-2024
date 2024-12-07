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
        <div>
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