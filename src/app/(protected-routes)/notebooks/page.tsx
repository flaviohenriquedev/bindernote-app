'use client'
import {useRouter} from "next/navigation";
import { GiBlackBook } from "react-icons/gi";


export default function NotebooksPage() {
    const route = useRouter()
    return (
        <div className={`grid grid-cols-4 px-10 py-10`}>
            <div className={`flex items-center gap-3 w-56 hover:cursor-pointer font-semibold text-[1.5rem] bg-primary p-4 rounded-lg`} onClick={() => route.push('/notebooks/editor/1')}>
                <GiBlackBook size={40}/>
                <h2>Matemática</h2>
            </div>
        </div>
    )
}
