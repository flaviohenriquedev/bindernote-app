import React from "react";
import {AppLayout} from "@/components/layout/app-layout";

export default function ProtectedRouteLayout({children}: { children: React.ReactNode }) {
    // redirect('/')

    return (
        <AppLayout.Container>
            <AppLayout.Header/>
            {children}
        </AppLayout.Container>
    )
}
