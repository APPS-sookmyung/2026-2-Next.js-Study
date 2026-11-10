import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import {ReactNode} from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";
//SSR 방식
//page component보다 먼저 실행이 되어 데이터들을 백엔드 서버 등을 통해 받아옴
//그 후 page component 실행이 됨
//오직 서버측에서만 실행되는 함수
//getStaticProps: SSG
export const getStaticProps = async() => {
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

    return {
      props: {
        allBooks,
        recoBooks,
      },
      //revalidate : 3, //유통기한, 재검증 (3초 주기로 재검증)
  };
};

// 이 컴포넌트는 2번이 출력됨
export default function Home({allBooks, recoBooks}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allBooks);

  return (
    <>
    <Head>
      <title>한입북스</title>
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:title" content="한입북스" />
      <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요"/>
    </Head>
    
    `<div className={style.container}>
        <section>
            <h3>지금 추천하는 도서</h3>
            {recoBooks.map((book)=><BookItem key={book.id} {...book} />)}
        </section>
        <section>
            <h3>등록된 모든 도서</h3>
            {allBooks.map((book)=><BookItem key={book.id} {...book} />)}

        </section>
      </div>
    </>
    
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}