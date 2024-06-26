import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Welcome to the Transaction Management Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This tool helps you manage your transactions efficiently.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;