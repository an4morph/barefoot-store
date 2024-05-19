import { catalog } from "./data";

export async function GET(request: Request) {
  return Response.json(catalog)
}