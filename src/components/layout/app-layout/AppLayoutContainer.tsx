import './style'
import {SAppLayoutContainer} from "@/components/layout/app-layout/style";
import React from "react";

interface Props {
    children: React.ReactNode
}

export function AppLayoutContainer({children}: Props) {
    return (
        <SAppLayoutContainer>
            {children}
        </SAppLayoutContainer>
    )
}
