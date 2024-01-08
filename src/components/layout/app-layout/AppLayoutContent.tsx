import './style'
import React from "react";
import {SAppLayoutContent} from "@/components/layout/app-layout/style";

export function AppLayoutContent({children} : {children: React.ReactNode}) {
    return(
        <SAppLayoutContent>
            {children}
        </SAppLayoutContent>
    )
}
