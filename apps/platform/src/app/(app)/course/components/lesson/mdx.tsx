import Markdown from "react-markdown";
import { api } from "@/trpc/server";
import { createClient } from "@/supabase/server"
import { RequestLogin } from "@/components/request-login";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function LessonMdx(props: {stepSlug: string, type: string}) {

  const step = await api.course.getStepContent({
    slug: props?.stepSlug,
    type: props?.type
  })

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  return (
    <>
      {
        !user?.email && step?.lessonOrder > 1 ?
        <div>
          <RequestLogin />
        </div> :
        <div className="prose-sm prose-h1:text-4xl prose-h1:text-green prose-p:text-base prose-strong:text-blue prose-ul:list-decimal prose-ul:text-dark" suppressHydrationWarning>
          {
            (
              props.type == "challenge" ||
              props.type == "index"
            ) && 
            <Markdown 
            // pulled from https://github.com/OneUptime/oneuptime/blob/642b1616cae893489120d5c578cc073fad4fa9eb/CommonUI/src/Components/Markdown.tsx/MarkdownViewer.tsx#L20
            components={{
              // because tailwind does not supply <h1 ... /> styles https://tailwindcss.com/docs/preflight#headings-are-unstyled
              h1: ({ ...props }: any) => {
                return (
                  <h1
                    className="text-3xl mt-5 border border-gray-200 border-r-0  border-l-0 border-t-0 pb-1 mb-8 text-gray-800 font-medium"
                    {...props}
                  />
                );
              },
              h2: ({ ...props }: any) => {
                return (
                  <h2
                    className="text-2xl mt-4 border border-gray-200 border-r-0  border-l-0 border-t-0 pb-1 mb-8 text-gray-800 font-medium"
                    {...props}
                  />
                );
              },
              h3: ({ ...props }: any) => {
                return (
                  <h3
                    className="text-xl mt-12 mb-3 text-gray-800 font-medium"
                    {...props}
                  />
                );
              },
              h4: ({ ...props }: any) => {
                return (
                  <h4
                    className="text-lg mt-8 mb-3 text-gray-800 font-medium"
                    {...props}
                  />
                );
              },
              h5: ({ ...props }: any) => {
                return (
                  <h5
                    className="text-lg mt-5 mb-1 text-gray-800 font-medium"
                    {...props}
                  />
                );
              },
              h6: ({ ...props }: any) => {
                return (
                  <h6
                    className="text-base mt-3 text-gray-800 font-medium"
                    {...props}
                  />
                );
              },
              p: ({ ...props }: any) => {
                return <p className="text-sm mt-2 mb-3 text-gray-500" {...props} />;
              },
              a: ({ ...props }: any) => {
                return (
                  <a className="underline text-dark-500 font-regular" {...props} />
                );
              },
    
              pre: ({ ...props }: any) => {
                return (
                  <pre
                    className="text-gray-600 mt-4 mb-2 rounded text-sm text-sm overflow-x-auto "
                    {...props}
                  />
                );
              },
              strong: ({ ...props }: any) => {
                return (
                  <strong
                    className="text-sm mt-2 text-gray-900 font-medium"
                    {...props}
                  />
                );
              },
              li: ({ ...props }: any) => {
                return (
                  <li className="text-sm mt-2 text-gray-500 list-disc" {...props} />
                );
              },
              ul: ({ ...props }: any) => {
                return <ul className="list-disc px-6 m-1" {...props} />;
              },
              code: (props: any) => {
                const { children, className, ...rest } = props;
    
                // eslint-disable-next-line wrap-regex
                const match: RegExpExecArray | null = /language-(\w+)/.exec(
                  className || "",
                );
    
                const content: string = String(children as string).replace(
                  /\n$/,
                  "",
                );
    
                const codeClassName: string =
                  content.includes("\n") ||
                  (match &&
                    match?.filter((item: string) => {
                      return item.includes("language-");
                    }).length > 0)
                    ? ""
                    : "text-sm p-1 bg-gray-100 rounded text-gray-900 pl-2 pr-2 text-xs";
    
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    // eslint-disable-next-line react/no-children-prop
                    children={content}
                    language={match[1]}
                    style={a11yDark}
                  />
                ) : (
                  <code className={codeClassName} {...rest}>
                    {children}
                  </code>
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
            >{step.challenge.markdown}</Markdown>
          }
          {
            props.type == "solution" && 
            <Markdown>{step.solution.markdown}</Markdown>
          }
        </div>
      }
      
    </>
  );
}