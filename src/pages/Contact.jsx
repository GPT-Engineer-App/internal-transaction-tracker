import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Feel free to reach out to us for any queries.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;