import { emojis, EmojiType } from "@/components/emotions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Lottie from "lottie-react";
import React from "react";

const EmotionElement:React.FC<EmotionElementProps> = ({emoji, selectedEmoji, setSelectedEmoji}) => {
    return(
        <div className={`${selectedEmoji && selectedEmoji !== emoji &&"opacity-50"}`} onClick={() => setSelectedEmoji(selectedEmoji === emoji ? undefined : emoji)}>
            <Lottie autoplay={selectedEmoji === emoji} loop={selectedEmoji === emoji} animationData={emojis[emoji as keyof typeof emojis]}/>
        </div>
    )
}

export const ReactionInput:React.FC<ReactionInputProps> = ({}) => {
    const emojis:EmojiType[] = ["smile", "angry", "surprised", "love", "sad", "sadWithTear", "neutral", "joy", "mindBlown", "party", "sleep", "updown"];

    const [selectedEmoji, setSelectedEmoji] = React.useState<EmojiType>();

    return(
        <div className="w-full min-h-64 relative pl-32">
            <div className="absolute top-0 left-0 scale-125">
                <img className="size-36" src="cat.png"/>
            </div>
            <div className="bg-gray-200 rounded-3xl w-full h-full p-6 flex flex-col gap-5">
                <p className="text-3xl font-sans font-semibold select-none">Jak se dneska máš?</p>
                <div className="flex gap-6 items-center p-2">
                    {emojis.map((emoji) => (
                        <EmotionElement {...{emoji, selectedEmoji, setSelectedEmoji}} />
                    ))}     
                </div>
                {selectedEmoji && (
                    <div className="flex gap-2">
                        <Input placeholder="Copak se ti dnes přihodilo?" className="w-full"/>
                        <Button className="bg-fosterPink hover:bg-fosterPink/90">Do deníčku</Button>
                        <Button className="bg-fosterPurple hover:bg-fosterPurple/90">Sdílet</Button>
                    </div>
                )}
            </div>
        </div>
    )
}