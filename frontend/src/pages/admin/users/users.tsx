import { Button } from "@/components/ui/button";
import avatar from "../../../../public/avatar.jpg"
import { UserRoundPlus } from "lucide-react";


//dummy data - avatar, name
const data = [
    {
        avatar: avatar,
        name: "John Doe",
    },
    {
        avatar: avatar,
        name: "John Foe",
    },
    {
        avatar: avatar,
        name: "John Moe",
    },
    {
        avatar: avatar,
        name: "John Boe",
    },
    {
        avatar: avatar,
        name: "John Goe",
    },
    {
        avatar: avatar,
        name: "John Hoe",
    }
]

const Users = () => {
  return (
    <div className='w-full h-full text-black'>
        <div className="flex flex-col gap-6 w-2/3 m-auto z-10 pt-14 h-[calc(100vh-56px)]">
            <div className="flex justify-between px-6">
                <h1 className="text-4xl">Uživatelé</h1>

            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl">
                {/* Users */}
                {data.map((item) => (
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <img src={item.avatar} alt="avatar" className="w-12 h-12 rounded-full"/>
                            <p className="">{item.name}</p>
                        </div>
                        {/* // Profil/Delete button */}
                        <div className="flex gap-4">
                            <Button className="bg-gradient-to-b from-cyan-700 to-cyan-950 w-20 h-10 text-sm">
                                <p>Profil</p>
                            </Button>
                            <Button className="bg-gradient-to-b from-cyan-700 to-cyan-950 w-20 h-10 text-sm">
                                <p>Odstranit</p>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
                <div className="flex justify-end px-6">
                <Button className="bg-gradient-to-b from-cyan-700 to-cyan-950 w-24 h-10 text-sm rounded-3xl">
                    <UserRoundPlus/>
                    <p>Přidat</p>
                </Button>
                </div>
        </div>
    </div>
  )
}

export default Users