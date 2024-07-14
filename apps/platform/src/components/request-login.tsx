"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function RequestLogin() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <div className="flex flex-col gap-y-2 text-center">
        <h3 className="text-2xl font-semibold">Sign in to access this content</h3>
        <p className="text-muted-foreground">Sign in to solve challenges, save progress and execute tests right from your local CLI</p>
        <Link href={`/signin?redirectTo=${window.location.pathname}`}>
          <Button variant="default" size="sm">
              Sign In
          </Button>
        </Link>
      </div>
    </div>
  )
}