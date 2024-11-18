import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'

export default function ServicesPromo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        {/* <Globe className="w-12 h-12 mx-auto mb-4 text-primary" /> */}
        <CardTitle className="text-2xl font-bold">Design. Build. Ship.</CardTitle>
        <CardDescription>We are experts at Next.js, React and Node.js</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">
          We analyse large open-source projects and bring experience and best practices to ship quality software products.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full max-w-xs">Book a free consultation</Button>
      </CardFooter>
    </Card>
  )
}