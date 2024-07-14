"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { useRouter } from 'next/navigation'

export function MarkAsCompleted(props: any) {

    const router = useRouter()

    const mutation = api.course.markStepAsComplete.useMutation();

    const handleMarkAsCompleted = async () => {

        if (!props?.user?.email) {
            router.push(`/signin?redirectTo=${window.location.pathname}`)
            return;
        }

        mutation.mutate({ userId: props?.user?.id, stepId: props?.stepId });
    }

    return (
        <Button variant="secondary" size="sm" onClick={handleMarkAsCompleted}>
            Mark as Completed
        </Button>
    )
}