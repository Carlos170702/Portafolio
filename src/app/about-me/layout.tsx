import React from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="md:mx-10 space-y-11 mb-5">
            {children}
        </div>
    )
}