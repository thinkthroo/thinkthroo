import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { GithubIcon } from "@/components/icons";
import { z } from "zod";
import { SubmitButton } from "@/components/auth/submit-button"

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SigninPage({
    searchParams,
  }: {
    searchParams: { message: string, redirectTo?: string };
  }) {

    const signIn = async (formData: FormData) => {
        "use server";
    
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const result = signInSchema.safeParse({ email, password });

        if (!result.success) {
          const formattedErrors = result.error.errors.reduce((acc, err) => {
            acc = err.message
            return acc;
          }, '');
          return redirect(`/signin?message=${formattedErrors}`);
        }

        const supabase = createClient();
    
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
    
        if (error) {
          return redirect("/signin?message=Could not authenticate user");
        }
    
        return redirect(searchParams.redirectTo ?? "/best-practices");
      };

  return (
    <div className="mx-auto w-96 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        {/* <p className="text-muted-foreground">Enter your email or username and password to sign in.</p> */}
      </div>
      {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      <form>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@acme.com" required name="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required name="password" />
          </div>
          <SubmitButton 
            className="w-full" 
            formAction={signIn}
            pendingText="Signing in..."
          >
            Sign In
          </SubmitButton>
          <Link href="#" className="inline-block w-full text-center text-sm underline" prefetch={false}>
            Forgot your password?
          </Link>
        </div>
        <Separator className="my-8" />
        <div className="space-y-4">
          <Button variant="outline" className="w-full">
            <GithubIcon className="mr-2 h-5 w-5" />
            Sign in with GitHub
          </Button>
          <div className="flex items-center justify-center gap-1">
            Don't have an account?
            <Link href="/signup" className="underline" prefetch={false}>
                Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}