import { Link } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 z-20 left-0 w-full h-[10dvh] px-5 md:px-[72px] md:py-8 flex justify-between items-center transition-all duration-300 bg-[#070707]/80 dark:bg-[#070707]/80 backdrop-blur-xl">
      <Link to="/" className="w-auto cursor-pointer">
        <div className="font-display text-lg sm:text-2xl md:text-[28px] font-black uppercase tracking-[0.08em] leading-none text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)]">
          LUMIQ AI FOR CHASE
        </div>
      </Link>
      <nav className="hidden lg:flex items-center gap-8">
        <Link to="/how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
          How It Works
        </Link>
        <Link to="/case-study" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
          Case Study
        </Link>
        <Link to="/demo" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
          Demo
        </Link>
        <Link to="/pilot" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
          Pilot
        </Link>
      </nav>
      <div className="hidden lg:flex justify-between items-center gap-8">
        <ThemeSwitch />
        <Link to="/pilot#pilot-form">
          <Button variant="solver" className="gap-6">
            CONTACT US
            <div className="w-10 h-10 p-2.5 rounded-full bg-white flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-[#070707]" />
            </div>
          </Button>
        </Link>
      </div>
      <div className="flex lg:hidden items-center gap-3">
        <ThemeSwitch />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-[#070707]">
            <SheetHeader>
              <SheetTitle className="text-left text-2xl font-bold text-[#070707] dark:text-white">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <Link 
                to="/how-it-works" 
                className="text-lg font-medium text-[#070707] dark:text-white hover:text-primary transition-colors py-2"
              >
                How It Works
              </Link>
              <Link 
                to="/case-study" 
                className="text-lg font-medium text-[#070707] dark:text-white hover:text-primary transition-colors py-2"
              >
                Case Study
              </Link>
              <Link 
                to="/demo" 
                className="text-lg font-medium text-[#070707] dark:text-white hover:text-primary transition-colors py-2"
              >
                Demo
              </Link>
              <Link 
                to="/pilot" 
                className="text-lg font-medium text-[#070707] dark:text-white hover:text-primary transition-colors py-2"
              >
                Pilot
              </Link>
              <div className="pt-4 border-t border-[#E4E7EC] dark:border-[#1D1D1D]">
                <Link to="/pilot#pilot-form">
                  <Button variant="solver" className="w-full gap-3">
                    CONTACT US
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
