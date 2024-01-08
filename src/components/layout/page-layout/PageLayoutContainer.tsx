import './style'
import React from "react";
import {SPageLayoutContainer} from "@/components/layout/page-layout/style";

export function PageLayoutContainer({children} : {children: React.ReactNode}) {
    return (
        <SPageLayoutContainer>
            {children}
        </SPageLayoutContainer>
    )
}
