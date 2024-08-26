import SiteHeader from "@/components/site/header";
import SiteSidebar from "@/components/site/sidebar";
import { TechNav } from "@/components/site/tech-nav";
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
                    <div className="flex flex-col py-4">
                        <TechNav />
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}