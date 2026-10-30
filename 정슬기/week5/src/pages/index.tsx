//CSS Module
//기존의 css 파일을 모듈처럼 사용하게 함.
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import {ReactNode} from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

//SSR 방식
//page component보다 먼저 실행이 되어 데이터들을 백엔드 서버 등을 통해 받아옴
//그 후 page component 실행이 됨
//오직 서버측에서만 실행되는 함수
//getStaticProps: SSG
export const getStaticProps = async() => {
  console.log("인덱스 페이지");

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

    return {
      props: {
        allBooks,
        recoBooks,
      },
  };
};

// 이 컴포넌트는 2번이 출력됨
export default function Home({allBooks, recoBooks}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allBooks);

  return (
    <div className={style.container}>
      <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book)=><BookItem key={book.id} {...book} />)}
      </section>
      <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book)=><BookItem key={book.id} {...book} />)}

      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}