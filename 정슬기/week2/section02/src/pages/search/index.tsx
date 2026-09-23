import { useRouter } from "next/router"; //Router 객체 내부에서 사용할수 있도록 반환

export default function Page(){
    const router = useRouter();
    const { q } = router.query;
    return <h1>Search {q}</h1>;
}