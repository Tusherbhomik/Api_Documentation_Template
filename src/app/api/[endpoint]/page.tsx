import { notFound } from "next/navigation";
import { apiEndpoints } from "@/lib/api-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/CodeBlock";
import { Typography } from "@/components/ui/Typography";

interface EndpointPageProps {
  params: Promise<{ endpoint: string }>;
}

export default async function EndpointPage({ params }: EndpointPageProps) {
  const { endpoint } = await params; // Await the params object
  const endpointData = apiEndpoints.find((e) => e.id === endpoint);

  if (!endpointData) {
    notFound();
  }

  // Color mapping for HTTP methods (matching Sidebar.tsx)
  const methodColors: Record<string, string> = {
    GET: "bg-green-500",
    POST: "bg-blue-500",
    PUT: "bg-yellow-500",
    DELETE: "bg-red-500",
  };

  return (
    <div className="space-y-8">
      <Typography variant="h1">{endpointData.title}</Typography>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge
              className={`${methodColors[endpointData.method] || "bg-gray-500"} text-white font-semibold px-2 py-1 rounded-md`}
            >
              {endpointData.method}
            </Badge>
            <span className="font-mono text-lg text-foreground">
              {endpointData.endpoint}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Typography variant="p">{endpointData.description}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Request Example</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={endpointData.requestExample} language="bash" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Response Example</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={endpointData.responseExample} language="json" />
        </CardContent>
      </Card>
    </div>
  );
}