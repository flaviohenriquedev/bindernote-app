'use client'

import {LuFileSpreadsheet} from "react-icons/lu";
import {SheetType, TopicType} from "@/app/types";
import {MdOutlineTopic} from "react-icons/md";
import {useRouter} from "next/navigation";
import {useState} from "react";

interface Props {
    topics: TopicType[]
}

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

export function PageLayoutSidebar({topics} : Props) {
    const route = useRouter()
    const [sheets, setSheets] = useState<SheetType[]>([])
    const [topicSelected, setTopicSelected] = useState<TopicType>()
    const [renderSheetList, setRenderSheetList] = useState<boolean>(false)
    const [sheetContent, setSheetContent] = useState<string>('')


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
        setRenderSheetList(true)
        const sheetsFiltered = sheetsData.filter(s => s.idTopic === topic.id)
        if (sheetsFiltered) {
            setSheets(sheetsFiltered)
        }
    }

    return(
        <div className={`flex pt-2 h-full`}>
            <aside className={`w-52 h-full p-4 bg-blue-300`}>
                <ul className={`flex flex-col text-[0.8rem] gap-1`}>
                    {renderTopics()}
                </ul>
            </aside>
            {renderSheetList && (
                <aside className={`w-52 h-full p-4 bg-green-300`}>
                    <ul className={`flex flex-col text-[0.8rem] gap-1`}>
                        <div className={`flex items-center justify-between`}>
                            <label>{topicSelected?.label}</label>
                            <label onClick={() => setRenderSheetList(false)}
                                   className={`hover:cursor-pointer`}>X</label>
                        </div>

                        {sheets && sheets.map(sheet => (
                            <li key={sheet.id} className={`hover:cursor-pointer hover:bg-slate-200`}>
                                <div className={`flex items-center gap-2`}
                                     onClick={() => route.push(`#${String(sheet.id)}`)}>
                                    <LuFileSpreadsheet/>
                                    <span>{sheet.label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </div>
    )
}
