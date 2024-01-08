'use client'

import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineTopic } from "react-icons/md";

import {useEffect, useState} from "react";

type TopicType = {
    id: number,
    label: string
}

type SheetType = {
    id: number,
    idTopic: number,
    label: string
}

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

const sheetsData: SheetType[] = [
    {
        id: 1,
        idTopic: 1,
        label: 'Sheet T 1'
    },
    {
        id: 2,
        idTopic: 1,
        label: 'Sheet T 1'
    },
    {
        id: 3,
        idTopic: 2,
        label: 'Sheet T 2'
    },
    {
        id: 4,
        idTopic: 3,
        label: 'Sheet T 3'
    },
]

export default function NotebooksEditorPage({ params }: { params: { notebookId: number } }) {
    const [sheets, setSheets] = useState<SheetType[]>([])
    const [topicSelected, setTopicSelected] = useState<TopicType>()

    function renderTopics() {
        return topics.map(topic => {
            return (
                <li key={topic.id} className={`hover:cursor-pointer hover:bg-slate-200`}>
                    <div className={`flex items-center gap-2 ${topic.id === topicSelected?.id ? 'bg-slate-300' : ''}`} onClick={() => selectSheets(topic)}>
                        <MdOutlineTopic/>
                        <span>{topic.label}</span>
                    </div>
                </li>
            )
        })
    }

    function selectSheets(topic: TopicType) {
        setTopicSelected(topic)
        const sheetsFiltered = sheetsData.filter(s => s.idTopic === topic.id)
        if (sheetsFiltered) {
            setSheets(sheetsFiltered)
        }
    }

    return (
        <div className={`flex pt-2 h-full`}>
            <aside className={`w-52 h-full p-4 bg-blue-300`}>
                <ul className={`flex flex-col text-[0.8rem] gap-1`}>
                    {renderTopics()}
                </ul>
            </aside>
            <aside className={`w-52 h-full p-4 bg-green-300`}>

                <ul className={`flex flex-col text-[0.8rem] gap-1`}>
                    <label>{topicSelected?.label}</label>
                    {sheets && sheets.map(sheet => (
                        <li key={sheet.id} className={`hover:cursor-pointer hover:bg-slate-200`}>
                            <div className={`flex items-center gap-2`}>
                                <LuFileSpreadsheet/>
                                <span>{sheet.label}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>
            <div className={`w-full h-full bg-red-300`}>
                <h1>{params.notebookId}</h1>
            </div>
        </div>
    )
}
