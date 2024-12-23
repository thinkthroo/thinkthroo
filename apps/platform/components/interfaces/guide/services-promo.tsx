"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'
import Link from "next/link"

export default function ServicesPromo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        {/* <Globe className="w-12 h-12 mx-auto mb-4 text-primary" /> */}
        <CardTitle className="text-2xl font-bold">Learn the large codebase architecture</CardTitle>
        <CardDescription>Our courses are inspired by Open Source projects</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">
          We provide critical review of features in multiple Open Source projects so you can learn different techniques and practices.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full max-w-xs">
          <Link href={"/best-practices"}>Start learning for free</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}