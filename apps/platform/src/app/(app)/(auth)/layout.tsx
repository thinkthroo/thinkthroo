import SiteHeader from "@/components/site/header";
import SiteSidebar from "@/components/site/sidebar";

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <main className="p-4 md:p-6">
                {children}
            </main>
        </div>
    )
}