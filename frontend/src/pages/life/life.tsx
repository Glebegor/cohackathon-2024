import React from "react";
import { tipsCategories } from "./data";
import { ListChecks } from "lucide-react";

const Life:React.FC<LifeProps> = () => {
    const [categories, setCategories] = React.useState<string[]>(["money", "housing", "school", "fosterCare", "aboutMe"]);

    const handleCategoriesChange = (newCategory:string) => {
        setCategories(prev => {
            if(prev.includes(newCategory)) {
                return prev.filter(category => category !== newCategory);
            }
            return [...prev, newCategory];
        })
    }

    return(
        <div className="flex flex-col gap-8 w-2/3 m-auto z-10 pt-14">
            <div className="flex justify-between items-center gap-4">
                <p className="text-4xl text-white font-sans font-semibold select-none">Plán na život</p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl h-full">
                <div className="flex gap-2">
                    <div className="bg-gray-300 p-4 rounded-lg">
                        <ListChecks/>
                    </div>
                    {tipsCategories.map((category, index) => (
                        <div className={`p-4 rounded-lg cursor-pointer ${categories.includes(category.id) ? "bg-[linear-gradient(#e54f9599,#4a328a99)]" : "bg-gray-300/80"}`} onClick={() => handleCategoriesChange(category.id)}>
                            {category.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Life;