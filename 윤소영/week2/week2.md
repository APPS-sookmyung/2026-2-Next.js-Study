# week2

### Page Router

- **page router** : pages 폴더의 구조를 기반으로 페이지를 라우팅
    - pages 폴더 아래에 들어있는 파일명을 기반으로 페이지 라우팅
        
        ![image.png](image.png)
        
    - 이때 폴더 이름을 기준으로도 페이지 라우팅 설정 가능
        
        ![image.png](image%201.png)
        
    - 동적 경로에 대응하는 페이지 라우팅의 경우
        
        ![image.png](image%202.png)
        
- page router 버전의 **Next App 생성**하기
    
    ```bash
    npx create-next-app@14 section02
    ```
    
    ![image.png](image%203.png)
    
    - test.tsx 코드와 결과
        
        ```bash
        export default function Page() {
          return <h1>TEST</h1>;
        }
        ```
        
        ![image.png](image%204.png)
        
    - _app.tsx & _document.tsx : Next App의 모든 페이지에 공통적으로 적용될 로직이나 레이아웃 또는 데이터를 다루기 위한 파일
        
        ![image.png](image%205.png)
        
        - **_app.tsx** : Next.js에서는 어떤 페이지를 렌더링하던 간에
            - 앱 컴퍼넌트 밑에 페이지 역할을 하는 컴퍼넌트가 렌더링되는 구조
                
                ![image.png](image%206.png)
                
                ![image.png](image%207.png)
                
        - **_document.tsx** : 모든 페이지에 공통적으로 적용되어야 하는
            - Next.js 앱의 HTML 코드를 설정하는 컴퍼넌트

### 페이지 라우팅 설정

![image.png](image%208.png)

- Search 페이지 - 방법 2가지
    
    ![image.png](image%209.png)
    
    ![image.png](image%2010.png)
    
    - **쿼리 스트링** : 경로의 끝에 물음표와 함께 명시되는 값
        - 페이지 경로에 영향을 주진 않음
        
        ![image.png](image%2011.png)
        
- Book 페이지 - 동적 경로 사용
    
    ![image.png](image%2012.png)
    
- **Catch All Segment** : 모든 구간에 다 대응하는 페이지 만들 것
    
    ![image.png](image%2013.png)
    
- **Optional Catch All Segment** : `/book` 뒤에 아무것도 나타나지 않을 경우를 대응
    
    ![image.png](image%2014.png)
    
- 404 페이지
    
    ![image.png](image%2015.png)
    

### 네비게이팅

![image.png](image%2016.png)

### 프피페칭

- **Pre-Fetching** : 페이지를 사전에 불어오기
    
    ![image.png](image%2017.png)
    
    - 빠른 페이지 이동을 위해 제공되는 기능
        
        ![image.png](image%2018.png)
        
        ![image.png](image%2019.png)
        
    - Next.js 앱에 작성한 리액트 컴포넌트들을 자동으로 페이지별로 분리해서 미리 저장
        - 때문에 사전 렌더링 과정에서 현재 페이지에 해당하는 JS 코드만 전달
            
            ![image.png](image%2020.png)
            
            ![image.png](image%2021.png)
            
- `npm run build`
    
    ![image.png](image%2022.png)
    
- `npm run start` 이용해서 앱 가동
    
    ![image.png](image%2023.png)
    
    - 예외 존재 : 링크 컴포넌트로 명시된 경로가 아니면 프리패칭 NO
        
        ![image.png](image%2024.png)
        
        - test도 프리패칭 하기 위해선
            
            ```bash
            useEffect(() => {
                router.prefetch("/test");
              }, []);
            ```
            
- 링크 컴퍼넌트의 프리패칭을 강제로 해제하는 방법
    - `<Link href={"/search"} prefetch={false}>search</Link>`