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
- 이에 대처하기 위해선
    
    ![image.png](image%204.png)