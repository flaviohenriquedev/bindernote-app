export type TopicType = {
    id: number,
    label: string
}

export type SheetType = {
    id: number,
    idTopic: number,
    label: string,
    content?: string
}
