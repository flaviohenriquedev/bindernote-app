'use client'

import * as S from './style'
import { CiLogin } from "react-icons/ci";
import {useRouter} from "next/navigation";


export function PaginaInicialComponente() {
    const route = useRouter()

    function handleEntrar() {
        route.replace('/login')
    }

    return (
        <S.Container>
            <S.Header>
                <label className={`text-[1.2rem] font-bold`}>BinderNote</label>
                <div onClick={handleEntrar}  className={`flex items-center gap-2 hover:cursor-pointer`}>
                    <CiLogin size={25}/>
                    <span className={`font-light text-[0.8rem]`}>Entrar</span>
                </div>
            </S.Header>
        </S.Container>
    )
}
