# week1

- Next.js에서 제공하는 라우터 : 페이지 라우터 (구 버전) → 앱 라우터 (신규)

### Next.js 소개

- Next.js는 **리액트 전용의 웹 개발 프레임워크**
    - 페이지 라우팅 + 빌트인 최적화 기능 + 다이나믹 HTML 스트리밍
- Next.js는 Library가 아닌 Framework
    - Library vs Framework : 기능 구현의 주도권 차이
        - Library : 주도권이 개발자에게 → 자유도 높지만 기본 기능 외 제공 X
        - Framework : 주도권이 프레임워크에게 → 자유도 낮지만 거의 모든 기능 제공

### Next.js 사전 렌더링

- 사전 렌더링 : 브라우저의 요청에 사전에 렌더링이 완료된 HTML을 응답하는 렌더링 방식
    
    ![image.png](image.png)
    
    - Client Side Rendering의 단점을 효율적으로 해결하는 기술
- CSR (Client Side Rendering) : React.js 앱의 기본적인 렌더링 방식
    - 클라이언트(브라우저)에서 직접 화면을 렌더링 하는 방식
    
    ![image.png](image%201.png)
    
    - 페이지 이동이 매우 빠르고 쾌적하다는 장점 존재
        
        ![image.png](image%202.png)
        
    - FCP 초기 접속 속도는 느리다는 단점 존재

<aside>
💡

FCP (First Contentful Paint)

- 요청 시작 시점으로부터 컨텐츠가 화면에 처음 나타나는데 걸리는 시간
- 요청 시작 ↔ 컨텐츠 렌더링
</aside>

- 인터렉션(= 상호작용) 위해서 수화 (Hydration) 과정 필요
    
    ![image.png](image%203.png)
    
    ![image.png](image%204.png)
    
    - TTI = Time To Interactive
- 페이지 이동 과정
    
    ![image.png](image%205.png)
    
    - 빠른 FCP 달성 (React App 단점 해소) + 빠른 페이지 이동 (React App 장점 승계)

### 백엔드 서버 세팅

https://github.com/onebite-nextjs/vod__onebite-books-server

https://supabase.com/

- 테이블 생성 완료
    
    ![image.png](image%206.png)
    
- 서버 가동 확인 (중단 시 강의 1.3 - 16:30 확인)
    
    ![image.png](image%207.png)