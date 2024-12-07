import { EMediaQuery } from "@/enums/design"

import { User } from '../../../../types/user'; 

type MediaContextProps = {
    media: EMediaQuery,
    theme: ETheme
}

type GlobalContextProps = {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}