import { Button } from "@/components/ui/button"

import { LogInIcon, MenuIcon, SettingsIcon, UserIcon, ZapIcon } from "../icons"
import AuthHeaderButton from "../auth/auth-header-button"

export default async function SiteHeader() {


    return (
        <>
          <header className="sticky top-0 z-10 border-b bg-background px-4 md:px-6">
            <div className="flex h-14 items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="block md:hidden">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
                {/* <h1 className="text-lg font-semibold">Dashboard</h1> */}
              </div>
              <div className="flex items-center gap-4">
                {/* <Button variant="outline" size="sm" className="flex items-center justify-center gap-2">
                  <ZapIcon className="h-4 w-4" />
                  Upgrade to Pro
                </Button> */}
                {/* <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ZapIcon className="h-4 w-4" />
                  Upgrade
                </Button> */}
                <AuthHeaderButton />
              </div>
            </div>
          </header>
        </>
    )
}