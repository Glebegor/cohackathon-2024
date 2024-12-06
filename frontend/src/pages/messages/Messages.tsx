
import { RxCross1 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";


const Messages = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        {/* Header/Name */}
        <div className="flex justify-between h-[10%] w-full p-5">
            <h2>Name</h2>
            <RxCross1/>
        </div>
        {/* Messages */}
        <div className="flex flex-col justify-end w-full h-[80%]">
            <div>
                <p>Message</p>
                <div>sfdfasfsadfasd</div>
            </div>
        </div>
        {/* Input */}
        <div className="flex w-full h-[10%]">
            <input type="text" placeholder="Message" className="w-full bg-transparent rounded-3xl ring-1 ring-black m-3 p-3"/>
            <button className="bg-transparent py-3 pr-7 pl-4 cursor-pointer border-none">
                <IoSend className="text-3xl"/>
            </button>
        </div>
    </div>
  )
}

export default Messages