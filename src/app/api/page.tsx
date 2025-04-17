import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { apiEndpoints } from "@/lib/api-data";
import { Typography } from "@/components/ui/Typography";

export default function ApiPage() {
  return (
    <div className="space-y-8">
      <Typography variant="h1">API Reference</Typography>
      <div className="grid gap-4">
        {apiEndpoints.map((endpoint) => (
          <Card key={endpoint.id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/api/${endpoint.id}`} className="hover:underline">
                  {endpoint.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="p">
                <span className="font-semibold">{endpoint.method}</span>{" "}
                {endpoint.endpoint}
              </Typography>
              <Typography variant="p">{endpoint.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}