import { api } from "@/trpc/server";

export async function GET(
    request: Request,
    { params }: { params: { testHash: string } }
) {
    console.log("request received params", params.testHash);
    let testCode = await api.course.getTestCodeByHash({testHash: params.testHash});
    return Response.json({...testCode});
}