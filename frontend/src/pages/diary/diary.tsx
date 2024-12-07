import { emojis } from "@/components/emotions";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import { CalendarIcon, CircleXIcon } from "lucide-react";
import React, { useState } from "react";

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

const Diary:React.FC<DiaryProps> = () => {
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
            date: new Date("2024-12-6"),
            emoji: "lost",
        },
        {
            text: "Dneska jsem byla na výletě",
            date: new Date("2024-12-3"),
            emoji: "lost",
        },
    ];

    const [newNote, setNewNote] = useState<DiaryItem>({
        text: "",
        date: new Date(),
        emoji: "smile",
    });

    const [search, setSearch] = React.useState<string>("")
    const [from, setFrom] = React.useState<Date>()
    const [to, setTo] = React.useState<Date>()
    const [emoji, setEmoji] = React.useState<string>()

    const [newForm, setNewForm] = useState<boolean>(false);

    const finalDiaryItems = diaryItems.sort((a, b) => b.date.getTime() - a.date.getTime()).filter(item => (
        (!from || item.date >= from) && (!to || item.date <= to) &&
        (!to || item.date <= to) && (!to || item.date <= to) &&
        (!emoji || item.emoji === emoji) &&
        (!search || item.text.toLowerCase().includes(search.toLowerCase()))
    ));

    const reducedDiaryItems = finalDiaryItems.reduce((acc, item) => {
        const date = item.date.toLocaleString('cs-CZ', { month: 'long', year: "numeric" });
        if (!acc[date]) acc[date] = [];
        acc[date].push(item);
        return acc;
    }, {} as Record<string, DiaryItem[]>);

    return (
        <div className="relative">
            <div className="flex flex-col gap-8 w-2/3 m-auto z-10 pt-14">
                <div className="flex justify-between items-center gap-4">
                    <p className="text-4xl text-white font-sans font-semibold select-none">Můj deníček</p>
                    <Button className="bg-fosterPink hover:bg-fosterPink/90 text-white px-4 py-2 rounded-3xl" onClick={() => setNewForm(prev => !prev)}>Nový záznam</Button>
                </div>
                {newForm && <div className="flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl animate-in duration-1000">
                    <div>
                        <input value={newNote.text} onChange={e => setNewNote(prev => ({...prev, text: e.target.value}))} type="text" placeholder="Jak se dneska máš?" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-4 items-center flex-1">
                            {
                                ["smile", "angry", "surprised", "love", "sad", "sadWithTear", "neutral", "joy", "mindBlown", "party", "sleep", "updown"].map((emj) => (
                                    <div className={`max-w-12 max-h-12 ${newNote.emoji && newNote.emoji !== emj && "opacity-50"}`} onClick={() => setNewNote(prev => ({...prev, emoji: prev.emoji === emj ? undefined : emj}))}>
                                        <Lottie animationData={emojis[emj as keyof typeof emojis]} loop={emj === newNote.emoji} autoplay={true}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex gap-4">
                            <Button className="bg-fosterPink hover:bg-fosterPink/90">Do deníčku</Button>
                            <Button className="bg-fosterPurple hover:bg-fosterPurple/90">Sdílet</Button>
                        </div>
                    </div>
                </div>}
                <div className="flex flex-col gap-6 p-6 bg-gray-200 rounded-3xl">
                    <div>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Vyhledat záznam" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
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
                <div className="flex flex-col gap-6">
                    {reducedDiaryItems && Object.keys(reducedDiaryItems).map((date) => (
                        <>
                            <p className="text-xl font-sans font-semibold">{date}</p>
                            <div className="flex flex-col gap-6 bg-gray-200 rounded-3xl p-6">
                                {reducedDiaryItems[date].map((item) => (
                                    <DiaryItem {...{item}}/>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Diary;