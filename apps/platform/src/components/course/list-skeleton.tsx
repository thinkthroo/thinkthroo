import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { BookIcon, PlayIcon, StepBackIcon, TestTubesIcon } from "../icons"

export async function CourseListSkeleton() {

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-6">
      {
        Array.from(Array(6).keys()).map((index) => (
            <div className="bg-background rounded-lg shadow-sm overflow-hidden animate-pulse" key={index}>
                <div className="p-6">
                    <h3 className="bg-slate-200 dark:bg-slate-700 text-lg font-semibold mb-2 h-[25px]"></h3>
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="bg-slate-200 dark:bg-slate-700 h-[15px]"></Badge>
                        <Badge variant="outline" className="bg-slate-200 dark:bg-slate-700 h-[15px]"></Badge>
                        <Badge variant="outline" className="bg-slate-200 dark:bg-slate-700 h-[15px]"></Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <BookIcon className="w-4 h-4 mr-2" />
                        <span></span>
                        <Separator orientation="vertical" className="mx-2" />
                        <PlayIcon className="w-4 h-4 mr-2" />
                        <span></span>
                        <Separator orientation="vertical" className="mx-2" />
                        <StepBackIcon className="w-4 h-4 mr-2" />
                        <span></span>
                        <Separator orientation="vertical" className="mx-2" />
                        <TestTubesIcon className="w-4 h-4 mr-2" />
                        <span></span>
                    </div>
                    <Button variant="outline" size="sm" className="bg-slate-200 dark:bg-slate-700 h-[30px] w-[8rem]"></Button>
                </div>
            </div>
        )
        )
        }
    </section>
  )
}