//CSS Module
//기존의 css 파일을 모듈처럼 사용하게 함.
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import {ReactNode} from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}