import React from "react";
import {AppLayout} from "@/components/layout/app-layout";

export default function ProtectedRouteLayout({children}: { children: React.ReactNode }) {
    // redirect('/')

    return (
        <AppLayout.Container>
            <AppLayout.Header/>
            <AppLayout.Content>
                {children}
            </AppLayout.Content>
        </AppLayout.Container>
    )
}
