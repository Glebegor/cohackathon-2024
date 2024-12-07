import { emojis } from "@/components/emotions";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import { CalendarIcon, CircleXIcon } from "lucide-react";
import React from "react";

const DiaryItem:React.FC<DiaryItemProps> = ({item}) => {
    return(
        <div className={"flex justify-between items-center gap-4"}>
            <div className={"flex gap-4 items-center"}>
                <div className={"w-12 h-12"}>
                    <Lottie animationData={emojis[item.emoji as keyof typeof emojis]} loop={false} autoplay={true}/>
                </div>
                <div>
                    <p className={"text-base font-semibold"}>{item.text}</p>
                </div>
            </div>
            <div>
                <p className={"text-sm text-muted-foreground font-bold"}>{item.date.toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export const Diary:React.FC<DiaryProps> = () => {
    const diaryItems:DiaryItem[] = [
        {
            text: "Dobrý",
            date: new Date(),
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
        }
    ];

    const [from, setFrom] = React.useState<Date>()
    const [to, setTo] = React.useState<Date>()
    const [emoji, setEmoji] = React.useState<string>()

    const finalDiaryItems = diaryItems.filter(item => (
        (!from || item.date >= from) && (!to || item.date <= to) &&
        (!to || item.date <= to) && (!to || item.date <= to) &&
        (!emoji || item.emoji === emoji)
    ));

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
                <div className="flex justify-between items-center gap-4">
                    <p className="text-4xl text-white font-sans font-semibold select-none">Můj deníček</p>
                    <button className="bg-fosterPink hover:bg-fosterPink/90 text-white px-4 py-2 rounded-3xl">Nový záznam</button>
                </div>
                <div className="flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl">
                    <div>
                        <input type="text" placeholder="Vyhledat záznam" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !from && "text-muted-foreground"
                                    )}
                                    >
                                        <CalendarIcon />
                                        {from ? from.toLocaleDateString() : <span>Datum od</span>}
                                        <div className="flex-1"/>
                                        <div className="z-50" onClick={(e) => {e.stopPropagation(); setFrom(undefined)}}>
                                            <CircleXIcon />
                                        </div>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={from}
                                        onSelect={setFrom}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] justify-start text-left font-normal",
                                            !to && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon />
                                        {to ? to.toLocaleDateString() : <span>Datum do</span>}<div className="flex-1"/>
                                        <div className="flex-1"/>
                                        <div className="z-50" onClick={(e) => {e.stopPropagation(); setTo(undefined)}}>
                                            <CircleXIcon />
                                        </div>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={to}
                                        onSelect={setTo}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="flex gap-4 items-center">
                            {
                                ["smile", "angry", "surprised", "love", "sad", "sadWithTear", "neutral", "joy", "mindBlown", "party", "sleep", "updown"].map((emj) => (
                                    <div className={`max-w-12 max-h-12 ${emoji && emoji !== emj && "opacity-50"}`} onClick={() => setEmoji(emoji === emj ? undefined : emj)}>
                                        <Lottie animationData={emojis[emj as keyof typeof emojis]} loop={false} autoplay={true}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl">
                    {finalDiaryItems.map((item) => (
                        <DiaryItem {...{item}}/>
                    ))}
                    {finalDiaryItems.length === 0 && (
                        <p className="text-center text-muted-foreground font-semibold">Nenalezeny žádné záznamy</p>
                    )}
                </div>
            </div>
        </div>
    );
}