import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { headers } from "next/headers";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { GithubIcon } from "@/components/icons";
import { z } from "zod";
import { SubmitButton } from "@/components/auth/submit-button"

const signUpSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  const signUp = async (formData: FormData) => {
    "use server";

    console.log("inside signUp function");

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const fullName = formData.get("fullName") as string;

    const result = signUpSchema.safeParse({ email, password, fullName });

    if (!result.success) {
      const formattedErrors = result.error.errors.reduce((acc, err) => {
        acc = err.message
        return acc;
      }, '');
      return redirect(`/signup?message=${formattedErrors}`);
    }

    const supabase = createClient();

    console.log("about to send to supabase auth signup", email, password);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          full_name: fullName,
        },
      },
    });

    console.log("error", error);

    if (error) {
      return redirect("/signup?message=Could not authenticate user");
    }

    return redirect("/signup?message=Check email to continue sign in process");
  };

  return (
    <div className="mx-auto w-96 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        {/* <p className="text-muted-foreground">Enter your email, username, and password to create an account.</p> */}
      </div>
      {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Full name</Label>
            <Input id="fullName" type="text" placeholder="username@gmail.com" required name="fullName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="username@gmail.com" required name="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required name="password" />
          </div>
          <SubmitButton 
            className="w-full" 
            formAction={signUp}
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
        </div>
        <Separator className="my-8" />
        <div className="space-y-4">
          <Button variant="outline" className="w-full">
            <GithubIcon className="mr-2 h-5 w-5" />
            Sign up with GitHub
          </Button>
          <div className="flex items-center justify-center gap-1">
            Already have an account?
            <Link href="/signin" className="underline" prefetch={false}>
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}