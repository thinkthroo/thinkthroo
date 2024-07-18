import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { LogInIcon, MenuIcon, SettingsIcon, UserIcon, ZapIcon } from "../icons"
import Link from "next/link"
import { Button } from "../ui/button";
import { createClient } from "@/supabase/server"

import { redirect } from "next/navigation"

export default async function AuthHeaderButton() {

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("user fetched after loggin in", user);

    const signOut = async () => {
        "use server";
    
        const supabase = createClient();
        await supabase.auth.signOut();
        return redirect("/signin");
      };  

    return (
        <>
        {
            !user?.email && 
            // <Button variant="outline" size="sm" className="flex items-center justify-center gap-2" onClick={() => setShowSignInModal(true)}>
              
            //   Log In
            // </Button>
            <Link href="/signin" className="flex items-center justify-center gap-2"><LogInIcon className="h-4 w-4" />Sign In</Link>
          }
         
         {
            user?.email && 
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>{user?.user_metadata?.full_name?.split(" ").map((n)=>n[0]).join("")}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuLabel>My profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <form action={signOut}>
                  <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                    Logout
                  </button>
                </form>
                {/* Logout */}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        }
        </>
    )
}