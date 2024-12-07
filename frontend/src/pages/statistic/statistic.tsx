import { emojisComplete, EmojiType } from "@/components/emotions";
import Chart from "../../components/Chart"

export const Statistic:React.FC<DiaryProps> = () => {

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
            text: "Dneska jsem byla na výletě",
            date: new Date("2024-12-6"),
            emoji: "lost",
        },
        {
            text: "Dneska jsem byla na výletě",
            date: new Date("2024-12-5"),
            emoji: "love",
        },
        {
            text: "Dneska jsem byla na výletě",
            date: new Date("2024-12-4"),
            emoji: "lost",
        },
        {
            text: "Dneska jsem byla na výletě",
            date: new Date("2024-12-3"),
            emoji: "lost",
        },
    ];

    const finalDiaryItems = diaryItems.filter(item => (
        item.date >= new Date("2024-12-01") && item.date <= new Date("2024-12-31")
    )).map(item => ({...item, emojiValue: emojisComplete[item.emoji as EmojiType].value}));

  return (
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
            <Chart data={finalDiaryItems}/>
        </div>
    </div>
  )
}

export default Statistic