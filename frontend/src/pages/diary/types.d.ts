type DiaryProps = {}

type DiaryItemProps = {
    item: DiaryItem
}

type DiaryItem = {
    emoji: EmojiType,
    emojiValue?: number,
    text: string
    date: Date
}