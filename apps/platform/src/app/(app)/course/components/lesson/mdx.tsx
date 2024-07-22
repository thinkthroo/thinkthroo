import Markdown from "react-markdown";
import { api } from "@/trpc/server";
import { createClient } from "@/supabase/server"
import { RequestLogin } from "@/components/request-login";

export default async function LessonMdx(props: {stepSlug: string, challengeOrSolutionSlug: string}) {

  const content = await api.course.getStepContent({
    slug: props?.stepSlug,
    type: props?.challengeOrSolutionSlug
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
        <div className="prose-sm" suppressHydrationWarning>
          <Markdown>{content?.stepContentMd}</Markdown>
        </div>
      }
      
    </>
  );
}