import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router"; //Router 객체 내부에서 사용할수 있도록 반환
import {ReactNode} from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Page(){
    return (
        <div>
            {books.map((book) => (
                <BookItem key = {book.id} {...book}/>
            ))}
        </div>
    );
}

Page.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}