import SiteHeader from "@/components/site/header";
import SiteSidebar from "@/components/site/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ModuleLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>
            <SiteHeader />
            <main className="flex-1">
                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                    <SiteSidebar />
                    {children}
                </div>
            </main>
        </>
    )
}