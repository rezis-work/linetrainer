import Link from "next/link";
import { DumbbellIcon, HomeIcon, UserIcon } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            alt="LineTrainer.ai Logo"
          />
          <span className="text-xl font-bold font-mono">
            Line<span className="text-primary">Trainer</span>.ai
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-5">
          {user ? (
            // Signed in
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            // Signed out
            <>
              <Button
                variant={"outline"}
                className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>

              <Button className="hidden md:block bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
