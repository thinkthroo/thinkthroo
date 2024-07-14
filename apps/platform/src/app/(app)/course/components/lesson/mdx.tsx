import Markdown from "react-markdown";
import { api } from "@/trpc/server";
import { createClient } from "@/supabase/server"
import SigninPage from "@/app/(app)/(auth)/signin/page";
import { RequestLogin } from "@/components/request-login";

export default async function LessonMdx(props: {stepSlug: string, challengeOrSolutionSlug: string}) {

  const content = await api.course.getStepContent({
    slug: props?.stepSlug,
  })

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  return (
    <>
      {
        !user?.email && content?.lessonOrder > 1 ?
        <div>
          <RequestLogin />
        </div> :
        <div className="prose-sm">
          {props.challengeOrSolutionSlug === "challenge" && <div suppressHydrationWarning><Markdown >{content?.challengeMd}</Markdown></div>}
          {props.challengeOrSolutionSlug === "solution" && <Markdown>{content?.solutionMd}</Markdown>}
        </div>
      }
      
    </>
  );
}