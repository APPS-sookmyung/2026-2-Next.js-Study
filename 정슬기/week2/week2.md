## 2.1. Page Router를 소개합니다

Page Router: 현재 많은 기업에서 사용되고 있는 안정적인 라우터
React Router처럼 페이지 라우팅 기능을 제공함
Pages 폴더의 기반으로 페이지 라우팅을 제공함 구조를

예시
~/ -> index.js
about.js -> ~/about
item.js -> ~/item
파일명 기반의 페이지 라우팅 자동으로 제공
폴더의 이름을 기준으로도 페이지 라우팅 설정 가능

동적 경로를 갖는 페이지 라우팅 설정 가능(Dynamic Routes)
~/item/1
~/item/2

Next.js : Page Router 버전의 Next App 생성

14버전 -> 안정적인 버전

## Page Router를 소개합니다

### 파일 구조

node_modules : 의존성의 실제 코드 저장
package.json : package 관리
next.js : react 앱과 유사한 폴더 구조
public 폴더 안 : 페이지 내부에 보관하는 정적인 이미지들을 주로 넣음
pages : page 역할
styles : 컴포넌트나 앱의 전체적인 스타일 담당

`\_app.tsx`, `\_document.tsx` ->모든 페이지에 공통적으로 적용할 컴포넌트 등

`\_app.tsx`

: react에서의 app컴포넌트(모든 노드들의 부모 컴포넌트(root))

:모든 페이지 역할을 하는 컴포넌트들의 부모 역할을 함.

`\_app.tsx`

Component: page 역할 할 컴포넌트

pageProps: component에 전달될 페이지의 Props를 객체로 전달

App-Pages

`\_app컴포넌트`는 모든 페이지들의 부모 역할을 하는 Next앱의 root component이므로 전체 페이지에 공통으로 포함되는 Header component 또는 레이아웃을 렌더링한다거나 비즈니스 로직들을 작성할 수 있는 공간

`\_document컴포넌트`: 모든 페이지에 공통으로 적용되어야하는 Next앱의 html 코드를 설정하는 컴포넌트

`next.config.mjs` : next앱의 설정 관리

## 2.2 페이지 라우팅 설정하기

[우리가 만들 페이지]

1.Index 페이지

-> 인덱스 경로(/)에 해당하는 페이지

->등록된 도서의 리스트 확인 가능

2.Search페이지

->특정 도서 검색 가능

3.Book페이지 (동적 페이지 사용 =URL 파라미터)

->상세정보 확인 가능

dark모드 적용 이유->globals.css 적용되어있기 때문

쿼리 스트링(Query String) 설정
: 경로 끝에 ?로 지정

query String : 페이지 경로에는 영향을 주지 않음
컴포넌트 내부에서 useRouter hook을 불러와서 router.query 사용

[...id].tsx -: book 뒤에 여러개의 아이디가 들어올 수 있다 (그 모든 아이디를 데려오겠다 Catch ALL segment)

- segment: 구분 (슬래시로 구분되는 하나하나의 구간)

catch all segment로 대응할 수 없는 경로
->/book 뒤의 아무것도 없는 인덱스 경로 불러오면 아무것도 대응할 수 없음
->because /book 뒤에 뭐라도 나와야 대응을 할 수 있기 때문.
=>해결법 [[...id]].tsx 이렇게 사용하기 -> Optional Catch All segment

## 2.3 네비게이팅

React App의 장점 승계(빠른 페이지 이동)
빠른 FCP 달성

`<Link>component` 이용 -> 빠르고 쾌적하게 이용 가능

Programmactic Navigation (프로그래매틱한 페이지 이동)
:특정 버튼 클릭/조건 만족 시 함수 내부에서 페이지 이동

특정 조건 만족/useEffect 만족 -> 함수 내부에서도 client side 렌더링 방식으로 이동 가능

method

- push

- replace: 뒤로가기를 방지하며 페이지 이동

- back: 페이지를 뒤로 이동

## 2.4 프리페칭

**`Pre-Fetching`**: 사전에 미리 불러온다. page를 사전에 불러온다
프리페칭은 빠른 페이지 이동을 위해 제공되는 기능임
이동 가능한 페이지들의 데이터들을 미리 불러옴.
![alt text](image.png)
![alt text](image-1.png)
페이지를 이동시키게 되더라도 서버에 추가적인 리소스를 공유하지 않아도 되는데 왜 추가적인 데이터를 또 불러와야하는건가

JS Bundle: 현재 페이지에 필요한 JS Bundle만 전달된다
![alt text](image-2.png)
만약 모든 페이지의 번들파일을 전달할 경우 용량이 너무 커지게 되며 하이드레이션(브라우저에 렌더링되어있는 html을 연결하는 시간이 느려짐)이 늦어짐. -> TTI가 느려짐
(다운로드 받는 속도 등이 느려짐)
![alt text](image-3.png)
![alt text](image-4.png)
프리페칭은 빠른 페이지 이동을 위해 제공되는 기능임.
연결된 모든 페이지들의 JS를 미리 불러오는 과정
초기 접속 요청 -> Pre Fetching (연결된 모든 페이지의 JS Bundle 불러옴)
![alt text](image-5.png)
![alt text](image-6.png)

Link 페이지만 프리페칭 가능 (`<Link href={"/search"} prefetch={false}>search</Link>` 이런식으로 코드를 작성해도 가능)

앱컴포넌트가 화면에 처음 그려지게 되었을 떄 Router 객체의 특정 method를 통해서 직접 또 프로그래머틱하게 test 페이지를 프리페칭하도록 코드 작성하면 됨.

자동으로 진행되는 링크 컴포넌트의 프리페칭을 강제 해제하는 방법
