//async 붙일 수 있는 이유: 서버 컴포넌트
export default async function Page({
    searchParams,
} : {
    searchParams: Promise<{ q: string}>;
}) {
    const { q } = await searchParams;
    return <div>Search 페이지 : {q}</div>;
}
