import { ReactNode } from "react";
import Searchbar from "./searchbar";

export default function Layout({children} : {
    children: ReactNode;
}) {
    return (
    <div>
        <Searchbar/>
        <div>임시 서치바</div>
        {children}
    </div>
    );
}
