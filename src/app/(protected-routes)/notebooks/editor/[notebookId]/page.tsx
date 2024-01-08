import {TopicType} from "@/app/types";
import {PageLayout} from "@/components/layout/page-layout";
import {PageLayoutContent} from "@/components/layout/page-layout/PageLayoutContent";

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
        <PageLayout.Container>
            <PageLayout.Sidebar topics={topics} />
            <PageLayoutContent></PageLayoutContent>
        </PageLayout.Container>
    )
}
