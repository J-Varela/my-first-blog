import Link from 'next/link';
import MainNav from './main-nav';
import { siteConfig } from '@/config/site';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { Icons } from './icons';
import { MobileNav } from './mobile-nav';

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {/* github link*/}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }), // Remove the extra argument
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Icons.gitHub className="h-4 w-4 " />
                <span className="sr-only">Gitub</span>
              </div>
            </Link>
            {/*twitter link*/}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'w-10 px-0 hidden sm:inline-flex'
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            {/* <ModeToggle />  */}
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
