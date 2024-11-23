import { HeightNavBar } from "@/assets";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {

    return (
        <div className={`h-[calc(100vh-${HeightNavBar})] flex`}>
            {children}
        </div>
    )

}