import React from "react";
import { ReactionInput } from "../explore/reaction";

const Dashboard:React.FC<DashboardProps> = () => {
    return(
        <div>
            <div className="flex p-8 flex-col gap-8 z-10 pt-14 w-2/3 m-auto">
                <ReactionInput/>
            </div>
        </div>
    )
}

export default Dashboard;