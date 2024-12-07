type DiaryProps = {}

type DiaryItemProps = {
    item: DiaryItem
}

type DiaryItem = {
    emoji: EmojiType,
    text: string
    date: Date
}