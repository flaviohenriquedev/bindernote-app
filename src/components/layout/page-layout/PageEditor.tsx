'use client'

import './style'
import React, {useState} from "react";
import {SPageLayoutContainer, SPageLayoutContent, SPageSection, STextarea} from "@/components/layout/page-layout/style";
import {LuFileSpreadsheet} from "react-icons/lu";
import {useRouter} from "next/navigation";
import {SheetType, TopicType} from "@/app/types";
import {MdOutlineTopic} from "react-icons/md";

interface Props {
    topics: TopicType[]
}


const sheetsData: SheetType[] = [
    {
        id: 1,
        idTopic: 1,
        label: 'Página 1',
        content: 'Conteúdo da Página 1'
    },
    {
        id: 2,
        idTopic: 1,
        label: 'Página 2',
        content: 'Conteúdo da Página 2'
    },
    {
        id: 3,
        idTopic: 2,
        label: 'Página 1',
        content: 'Flavio Henrique'
    },
    {
        id: 4,
        idTopic: 3,
        label: 'Página 1',
        content: 'Sistema Top'
    },
]

export function PageEditor({topics}: Props) {
    const route = useRouter()
    const [sheets, setSheets] = useState<SheetType[]>([])
    const [topicSelected, setTopicSelected] = useState<TopicType>()
    const [renderSheetList, setRenderSheetList] = useState<boolean>(false)
    const [sheetContent, setSheetContent] = useState<string>('')


    function renderTopics() {
        return topics.map(topic => {
            return (
                <li key={topic.id} className={`hover:cursor-pointer hover:bg-slate-200`}>
                    <div className={`flex items-center gap-2 ${topic.id === topicSelected?.id ? 'bg-slate-300' : ''}`}
                         onClick={() => selectSheets(topic)}>
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

    return (
        <SPageLayoutContainer>
            <div className={` flex h-full`}>
                <aside
                    className={`w-52 h-full p-4 bg-blue-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary`}>
                    <ul className={`flex flex-col text-[0.8rem] gap-1 pb-10`}>
                        {renderTopics()}
                    </ul>
                </aside>
                {renderSheetList && (
                    <aside
                        className={`w-52 h-full p-4 bg-green-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary`}>
                        <ul className={`flex flex-col text-[0.8rem] gap-1`}>
                            <div className={`flex items-center justify-between`}>
                                <label>{topicSelected?.label}</label>
                                <label onClick={() => setRenderSheetList(false)}
                                       className={`hover:cursor-pointer`}>X</label>
                            </div>

                            {sheets && sheets.map(sheet => (
                                <li key={sheet.id} className={`hover:cursor-pointer hover:bg-slate-200`} onClick={() => route.push(`#${String(sheet.id)}`)}>
                                    <div className={`flex items-center gap-2`}>
                                        <LuFileSpreadsheet/>
                                        <span>{sheet.label}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>

            <SPageLayoutContent>
                <div className={`flex text-center flex-col w-full h-auto`}>
                    {sheets && sheets.map(sheet => (
                        <SPageSection key={sheet.id} id={String(sheet.id)}>
                            <STextarea value={sheet.content}
                                       onChange={(e) => sheet.content = e.target.value}/>
                        </SPageSection>
                    ))}
                </div>
            </SPageLayoutContent>

        </SPageLayoutContainer>
    )
}
