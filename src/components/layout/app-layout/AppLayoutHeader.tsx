import './style'
import {SAppLayoutHeader} from "@/components/layout/app-layout/style";

export function AppLayoutHeader() {
    return (
        <SAppLayoutHeader>
            <div id={`left`} className={`flex items-center h-full`}>
                <div id={`logo_bindernote`} className={`pr-4 py-1 border-r-2 border-primary-content`}>
                    <label className={`text-[1.2rem] font-bold`}>BinderNote</label>
                </div>
            </div>
            <div id={`right`} className={`flex items-center h-full`}>
                <div className="flex dropdown dropdown-end">
                    <div tabIndex={0} className="avatar">
                        <div
                            className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:cursor-pointer">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                        </div>
                    </div>
                    <ul tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 top-full text-[0.8rem]">
                        <li>
                            <span>Configurações</span>
                        </li>
                        <hr/>
                        <li>
                            <span>Sair</span>
                        </li>
                    </ul>
                </div>
            </div>
        </SAppLayoutHeader>
    )
}
