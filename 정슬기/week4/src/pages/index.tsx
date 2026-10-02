//CSS Module
//기존의 css 파일을 모듈처럼 사용하게 함.
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import {ReactNode, useEffect} from "react";
import books from '@/mock/books.json'
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

//SSR 방식
//page component보다 먼저 실행이 되어 데이터들을 백엔드 서버 등을 통해 받아옴
//그 후 page component 실행이 됨
//오직 서버측에서만 실행되는 함수
export const getServerSideProps = () => {
  //컴포넌트보다 먼저 실행이 되어서, 컴포넌트에 필요한 데이터 불러오는 함수
    console.log("서버사이드프롭스에요");

    const data = 'hello';

    return {
      props: {
        data,
      },
  };
};

// 이 컴포넌트는 2번이 출력됨
export default function Home({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  useEffect(() => {
    console.log(window);
  }, []);
  return (
    <div className={style.container}>
      <section>
          <h3>지금 추천하는 도서</h3>
          {books.map((book)=><BookItem key={book.id} {...book} />)}
      </section>
      <section>
          <h3>등록된 모든 도서</h3>
          {books.map((book)=><BookItem key={book.id} {...book} />)}

      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}