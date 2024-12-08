import { emojis } from "@/components/emotions";
import Lottie from "lottie-react";
import { emojisComplete, EmojiType } from "@/components/emotions";
import Chart from "../../components/Chart"
import { Button } from "@/components/ui/button";

const EmotionElement:React.FC<EmotionElementProps> = ({emoji}) => {
    return(
        <div>
            <Lottie animationData={emojis[emoji as keyof typeof emojis]}/>
        </div>
    )
}

const Statistics:React.FC<DiaryProps> = () => {

    const diaryItems:DiaryItem[] = [
        {
            text: "Dobrý",
            date: new Date("2024-10-10"),
            emoji: "smile",
        },
        {
            text: "Dostala jsem pětku od učitelky",
            date: new Date(),
            emoji: "sad",
        },
        {
            text: "Dneska jsem byla na výletě",
            date: new Date(),
            emoji: "smile",
        },
        {
            text: "dnes nic moc, ale zítra bude líp",
            date: new Date("2024-12-6"),
            emoji: "lost",
        },
        {
            text: "super",
            date: new Date("2024-12-5"),
            emoji: "love",
        },
        {
            text: "blablabla",
            date: new Date("2024-12-4"),
            emoji: "lost",
        },
        {
            text: "jsem unavený, ale zítra bude líp",
            date: new Date("2024-12-3"),
            emoji: "lost",
        },
        {
            text: "dneska byl super den",
            date: new Date("2024-12-2"),
            emoji: "smile",
        },
        {
            text: "dneska byl super den",
            date: new Date("2024-12-1"),
            emoji: "smile",
        },
        {
            text: "dneska byl super den",
            date: new Date("2024-12-7"),
            emoji: "smile",
        }
    ];

    const finalDiaryItems = diaryItems.filter(item => (
        item.date >= new Date("2024-12-01") && item.date <= new Date("2024-12-31")
    )).map(item => ({...item, emojiValue: emojisComplete[item.emoji as EmojiType].value}));

    const handleEmojiCount = (emojis: string[]) => {
        let counts: { [key: string]: number } = {};
        emojis.forEach(function(x) { counts[x] = (counts[x] || 0) + 1; });
        return counts;
    }

  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:w-2/3 max-md:p-8 m-auto z-10 pt-14">
            <div className="flex justify-between items-center gap-4">
                <p className="text-4xl text-white font-sans font-semibold select-none">Statistiky deníčku</p>
            </div>
            <div className="flex gap-8 justify-stretch items-stretch max-md:flex-col">
                <div className="md:w-1/4 flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl justify-stretch items-stretch">
                    <h2 className="w-full text-xl">Nejčastější nálady</h2>
                    <div className="flex flex-col gap-4">
                        {Object.entries(handleEmojiCount(finalDiaryItems.map(item => item.emoji))).map(([emoji, count]) => (
                            <div key={emoji} className="flex gap-4 justify-between items-center px-8">
                                <div className="size-12">
                                    <EmotionElement emoji={emoji} selectedEmoji={undefined} setSelectedEmoji={function (value: any): void {
                                        throw new Error("Function not implemented.");
                                    } }/>
                                </div>
                                <div className="text-lg flex">{count} <div>x</div></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:w-3/4 flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl">
                    <h2 className="w-full text-xl">Highligths z deníčku</h2>
                    {finalDiaryItems.sort((a, b) => b.emojiValue - a.emojiValue).slice(0, 4).map(item =>
                        <div className="flex gap-4 items-center">
                            <div className="size-10">
                                <EmotionElement emoji={item.emoji} selectedEmoji={undefined} setSelectedEmoji={function (value: any): void {
                                    throw new Error("Function not implemented.");
                                }}/>
                            </div>
                            <div className="flex-1">{item.text}</div>
                            <div>{item.date.toLocaleDateString()}</div>
                        </div>
                    )}
                </div>
            </div>
            <Chart data={finalDiaryItems}/>
        </div>
    </div>
  )
}

export default Statistics