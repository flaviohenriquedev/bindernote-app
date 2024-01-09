import {TopicType} from "@/app/types";
import {PageEditor} from "@/components/layout/page-layout/PageEditor";

const topics: TopicType[] = [
    {
        id: 1,
        label: 'Abertura'
    },
    {
        id: 2,
        label: 'Tópico 1'
    },
    {
        id: 3,
        label: 'Tópico 2'
    },
    {
        id: 4,
        label: 'Tópico 3'
    },
]


export default function NotebooksEditorPage({ params }: { params: { notebookId: number } }) {
    return (
        <PageEditor topics={topics} />
    )
}
