import { emojis, EmojiType } from "@/components/emotions";
import Lottie from "lottie-react";
import React from "react";

const EmotionElement:React.FC<EmotionElementProps> = ({emoji}) => {
    return(
        <div>
            <Lottie animationData={emojis[emoji as keyof typeof emojis]}/>
        </div>
    )
}

export const ReactionInput:React.FC<ReactionInputProps> = ({}) => {
    const emojis:EmojiType[] = ["smile", "angry", "surprised", "love", "sad", "sadWithTear", "neutral", "joy", "mindBlown", "party", "sleep", "updown"];

    return(
        <div className="w-full min-h-64 relative pl-32">
            <div className="absolute top-0 left-0 scale-125">
                <img className="size-36" src="cat.png"/>
            </div>
            <div className="bg-gray-200 rounded-3xl w-full h-full p-6 flex flex-col gap-5">
                <p className="text-3xl font-sans font-semibold">Jak se dneska máš?</p>
                <div className="flex gap-6 items-center p-2">
                    {emojis.map((emoji) => (
                        <EmotionElement emoji={emoji}/>
                    ))}     
                </div>
            </div>
        </div>
    )
}