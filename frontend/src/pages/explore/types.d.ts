type User = {
    avatar: string;
    name: string;
    emoji: string;
    message?: string
}

type UserProps = {
    user: User
}

type ReactionInputProps = {}

type EmotionElementProps = {
    emoji: EmojiType,
    selectedEmoji: EmojiType,
    setSelectedEmoji: React.Dispatch<React.SetStateAction<EmojiType>>
}