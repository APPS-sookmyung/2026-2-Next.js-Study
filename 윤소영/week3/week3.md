# week3

### API Routes

- Next.js 앱에서 API를 구출할 수 있게 해주는 기능
    
    ![image.png](image.png)
    
- API 응답을 정의하는 파일로서 자동으로 설정
    
    ![image.png](image%201.png)
    
    ![image.png](image%202.png)
    
- 현재 시간을 반환하는 API 만들기
    
    ```tsx
    import type { NextApiRequest, NextApiResponse } from "next";
    
    export default function handler(
      req: NextApiRequest,
      res: NextApiResponse
    ) {
      const date = new Date();
      res.json({ time: date.toLocaleString() });
    }
    ```
    
    ![image.png](image%203.png)
    

### 스타일링

- 앱 컴포넌트가 아닌 파일에서는 임포트 문을 통해 css 파일을 불러오는 걸 제한
- 이에 대처하기 위해서 module 사용
    
    ![image.png](image%204.png)
    

### 글로벌 레이아웃

- 모든 페이지에 일괄적으로 적용되는 글로벌 레이아웃 설정
    
    ```tsx
    // global-layout.tsx
    
    import { ReactNode } from "react";
    import Link from "next/link";
    import style from "./global-layout.module.css";
    
    export default function GlobalLayout({
      children,
    }: {
      children: ReactNode;
    }) {
      return (
        <div className={style.container}>
          <header className={style.header}>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main className={style.main}>{children}</main>
          <footer className={style.footer}>제작 @soyoung</footer>
        </div>
      );
    }
    ```
    
    ```tsx
    // globals.css
    
    html,
    body {
      margin: 0px;
      padding: 0px;
      background-color: rgb(250, 250, 250);
    }
    ```
    
    ```tsx
    // global-layout.module.css
    
    .container {
      background-color: white;
      max-width: 600px;
      min-height: 100vh;
      margin: 0 auto;
    
      box-shadow: rgba(100, 100, 100, 0.2) 0px 0px 29px 0px;
      padding: 0px 15px;
    }
    
    .header {
      height: 60px;
    
      font-weight: bold;
      font-size: 18px;
      line-height: 60px;
    }
    
    .header > a {
      color: black;
      text-decoration: none;
    }
    
    .main {
      padding-top: 10px;
    }
    
    .footer {
      padding: 100px 0px;
      color: gray;
    }
    ```
    
    ![image.png](image%205.png)
    

### 페이지별 레이아웃

```tsx
// _app.tsx

import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout =
    Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
```

```tsx
// index.tsx

// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
```

```tsx
// searchable-layout.tsx

import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요 ..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
```

```tsx
// searchable-layout.module.css

.searchbar_container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.searchbar_container > input {
  flex: 1;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);
}

.searchbar_container > button {
  width: 80px;
  border-radius: 5px;
  border: none;
  background-color: rgb(37, 147, 255);
  color: white;
  cursor: pointer;
}
```