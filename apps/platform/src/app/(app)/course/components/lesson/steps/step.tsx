import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MarkAsCompleted } from "./mark-as-completed";
import { CheckIcon } from "@/components/icons";
import { ExecuteTest } from "./execute-test";

interface Step {
  id: number;
  slug: string
  title: string;
  status: "COMPLETED" | "ACTIVE" | "PENDING";
}

interface StepProps {
  courseStep: any; // FIXME: fix types
  link: string;
  index: number;
  user: any;
  stepSlug: string;
}

export default async function Step(props: StepProps) {
  const { courseStep } = props;

  return (
    <>
      <div 
        className="flex items-start gap-4 flex-col"
      >
          <Link href={props.link} className="flex items-center gap-2">
            <div className={
                cn(
                  "flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground",
                  {"bg-primary text-primary-foreground": props.stepSlug == courseStep?.slug}
                )
            }>
              {props.index+1}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className={cn({"font-medium": props.stepSlug == courseStep?.slug})}>{courseStep.title}</h4>
              </div>
            </div>
          </Link>
            <div className="flex gap-2 mt-2">
                {
                  courseStep?.hasTest && <ExecuteTest user={props.user} stepId={courseStep?.id} />
                  // <Button variant="secondary" size="sm">
                  //   Execute Test
                  // </Button>
                }
                {
                  courseStep?.markAsCompleted ?
                  <Button variant="default"><CheckIcon /> Completed</Button> :
                  <MarkAsCompleted user={props.user} stepId={courseStep?.id} variant={props.stepSlug == courseStep?.slug ? "default": "outline"} />
                }
              </div>
        </div>
    </>
  );
}