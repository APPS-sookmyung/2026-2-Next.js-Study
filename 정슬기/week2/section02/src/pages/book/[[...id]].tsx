import {useRouter} from "next/router";
export default function Page(){
    const router = useRouter();
    const {id} = router.query;
    console.log(id); //배열 형태
    return <h1>Book {id}</h1>;
}