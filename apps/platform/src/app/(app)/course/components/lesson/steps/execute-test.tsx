"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/trpc/react";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export function ExecuteTest(props: any) {

  const router = useRouter()

  const [stepId, setStepId] = useState("");

  // https://github.com/trpc/trpc/discussions/2067#discussioncomment-4900056
  // enabled flag is important to avoid trigger until stepId is set via a click
  // Hacky? not sure. I am inclined make this and mark-as-completed server rendered. 
  // Not sure if its possible, needs more research
  let query = api.course.generateOrGetTestHash.useQuery({userId: props.user.id, stepId}, {enabled: !!stepId, refetchInterval: 2000});

  const handleDialog = async () => {

    if (!props?.user?.email) {
      router.push(`/signin?redirectTo=${window.location.pathname}`)
      return;
    }

    setStepId(props.stepId);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleDialog}>Execute test</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Execute Test</DialogTitle>
          <DialogDescription>
            Download the test by executing command below
          </DialogDescription>
        </DialogHeader>

        <code>npx tthroo setup-test {query.data}</code>

        <p className="text-lg font-medium">Waiting for your test execution...</p>

        <div>Should contain function named shadowDom</div>

        <div>Contains function named shadowDom</div>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
