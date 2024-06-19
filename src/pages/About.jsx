import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We provide the best tools to manage your transactions.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;