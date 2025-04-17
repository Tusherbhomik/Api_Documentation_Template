import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";

export default function Home() {
  return (
    <div className="space-y-8">
      <Typography variant="h1">API Documentation</Typography>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the API Docs</CardTitle>
        </CardHeader>
        <CardContent>
          <Typography variant="p">
            This documentation provides detailed information about our API
            endpoints, including request and response examples, authentication
            details, and usage guidelines. Use the sidebar to navigate through
            available endpoints.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}