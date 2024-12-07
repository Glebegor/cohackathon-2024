import img from "../../../public/avatar.jpg"

//dummy data - users - avatar and name
const users = [
    {
        avatar: img,
        name: "John Doe"
    },
    {
        avatar: img,
        name: "Jane Doe"
    },
    {
        avatar: img,
        name: "John Smith"
    },
    {
        avatar: img,
        name: "Jane Smith"
    }
]


interface ChatNavbarProps {
    onSelectUser: (name: string) => void;
}

const ChatNavbar: React.FC<ChatNavbarProps> = ({ onSelectUser }) => {
    const handleUser = (user: { avatar: string; name: string }) => {
        onSelectUser(user.name);
    }
    return (
    <div className="w-1/3 pt-4 border-r border-gray-500">
        <h3 className="flex justify-center text-xl border-b border-gray-500">Uživatelé</h3>
        <div className="flex flex-col">
            {users.map((user, index) => (
                <div key={index} className="flex items-center gap-3 p-3 cursor-pointer" onClick={() => handleUser(user)}>
                    <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChatNavbar