import React, { useContext } from "react";
import { completeTipsData, tipsCategories } from "./data";
import { Check, HeartHandshake, Lightbulb, MoveRight, Squirrel, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobalContext } from "@/context/global";

const Life:React.FC<LifeProps> = () => {
    const [categories, setCategories] = React.useState<string[]>(["money", "housing", "school", "fosterCare", "aboutMe"]);
    const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
    const [currentAnswer, setCurrentAnswer] = React.useState<boolean>();

    const globalContext = useContext(GlobalContext);

    console.log(completeTipsData);

    console.log(completeTipsData.filter(tip => categories.includes(tip.category)));

    const mappedIds = completeTipsData.filter(tip => categories.includes(tip.category)).map(tip => tip.id);

    console.log(mappedIds);

    const handleCategoriesChange = (newCategory:string) => {
        setCategories(prev => {
            if(prev.includes(newCategory)) {
                return prev.filter(category => category !== newCategory);
            }
            return [...prev, newCategory];
        })
    }

    const handleNext = () => {
        setCurrentAnswer(undefined);
        if(currentQuestion === mappedIds.length-1) {
            setCurrentQuestion(0);
            return;
        }
        setCurrentQuestion(prev => prev+1);
    }

    return(
        <div className="flex flex-col gap-4 md:w-2/3 max-md:p-8 m-auto z-10 pt-14">
            <div className="flex justify-between items-center gap-4">
                <p className="text-4xl text-white font-sans font-semibold select-none">Plán na život</p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl h-full">
                <div className="flex gap-2 flex-wrap">
                    {tipsCategories.map((category) => (
                        <div className={`p-4 rounded-lg cursor-pointer ${categories.includes(category.id) ? "bg-[linear-gradient(#e54f9599,#4a328a99)]" : "bg-gray-300/80"}`} onClick={() => handleCategoriesChange(category.id)}>
                            {category.icon}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-8 p-8 bg-gray-200 rounded-3xl h-full">
                {mappedIds.length === 0 ? (
                    <div className="flex flex-col gap-4 items-center">
                        <div className="rounded-full p-2"><Squirrel size={54}/></div>
                        <p className="text-xl text-fosterPurple text-center font-sans font-semibold select-none">Žádné položky, upravte filtr</p>
                    </div>
                ) :
                <>
                    <div className="">
                        <p className="text-2xl text-black text-center font-sans font-semibold select-none">{completeTipsData.find(t => t.id === mappedIds[currentQuestion])?.question}</p>
                    </div>
                    {currentAnswer === undefined && <div className="flex gap-4 w-1/2 m-auto py-6">
                        <div className="flex-1" onClick={() => setCurrentAnswer(true)}>
                            <div className="text-2xl text-black text-center font-sans font-semibold select-none hover:text-green-600 duration-150 cursor-pointer flex gap-2 items-center justify-center"><Check/>Ano</div>
                        </div>
                        <div className="flex-1" onClick={() => setCurrentAnswer(false)}>
                            <div className="text-2xl text-black text-center font-sans font-semibold select-none hover:text-red-600 duration-150 cursor-pointer flex gap-2 items-center justify-center"><X/>Ne</div>
                        </div>
                    </div>}
                    {currentAnswer !== undefined && (
                        <div className="flex flex-col gap-8 items-center">
                            <div className="px-8">
                                <p className="text-xl text-fosterPurple leading-9 text-center font-sans font-semibold select-none">{completeTipsData.find(t => t.id === mappedIds[currentQuestion])?.answers[currentAnswer ? "ano" : "ne"]}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="bg-yellow-400 rounded-full p-2"><Lightbulb size={20}/></div>
                                <p className="text-lg text-fosterPurple text-center font-sans font-semibold select-none">{completeTipsData.find(t => t.id === mappedIds[currentQuestion])?.tip}</p>
                            </div>
                        </div>
                    )}
                    {currentAnswer !== undefined && (
                        <div className="flex justify-center gap-4">
                            <Button onClick={handleNext} className="bg-yellow-500 hover:bg-yellow-500/80 text-black">Další<MoveRight/></Button>
                            <Button onClick={() => globalContext.setLinkaOpen(true)} className="bg-orange-600 hover:bg-orange-600/80 text-black">Pomoc<HeartHandshake/></Button>
                        </div>
                    )}
                </>}
            </div>
        </div>
    )
}

export default Life;