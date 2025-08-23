import { seedTransactions } from "@/actions/seed";
// localhost:3000/api/seed
// for seeding our transactions in db
export async function GET() {
  const result = await seedTransactions();
  return Response.json(result);
}
