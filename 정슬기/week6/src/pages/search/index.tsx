import SearchableLayout from "@/components/searchable-layout";
import {ReactNode, useEffect, useState} from "react";
import BookItem from "@/components/book-item";
//import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";
import Head from "next/head";

// export const getStaticProps = async(context : GetStaticPropsContext) => {
//     //GetStaticPropsContext에는 query함수 존재X -> build time에 query string에 어떤 값이 들어올지 알 수 없기 때문
//     //다른 방식도 존재하지 않음
//     //->search page는 SSG방식으로 동작시킬 수 없음
//     //(서버로부터 불러올 수 없음)
//     //page 클라이언트에서 직접 진행하는 방식으로 진행해야함. (꼭 SSG방식으로 하고 싶다면) -클라이언트 측에서 직접 fetching해서 불러오도록
//     const q = context.query.q;
//     const books = await fetchBooks(q as string);

//     return {
//         props: {
//             books,
//         },
//     };
// };

export default function Page(){
    const [books, setBooks] = useState<BookData[]>([]);

    const router = useRouter();
    const q = router.query.q;

    const fetchSearchResult = async() => {
        const data = await fetchBooks(q as string);
        setBooks(data);
    }

    useEffect(() => {
        if (q) {
            //검색 결과를 불러오는 로직 작성
            fetchSearchResult();
        }
    }, [q]);

    return (
        <div>
            <Head>
                <title>한입북스 - 검색결과</title>
                <meta property="og:image" content="/thumbnail.png" />
                <meta property="og:title" content="한입북스 - 검색결과" />
                <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요"/>
            </Head>
            {books.map((book) => (
                <BookItem key = {book.id} {...book}/>
            ))}
        </div>
    );
}

Page.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}