// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  //2개의 매개변수: 요청, 응답(req, res)
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  //상태코드 200: 요청이 성공적으로 처리되었음
  res.status(200).json({ name: "John Doe" });
}
