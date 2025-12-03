import { AlertCircle } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="w-full bg-[#070707] border-t border-white/10">
      <div className="mx-auto w-full px-5 md:px-[5vw] py-6 md:py-8">
        <div className="flex items-start gap-3 max-w-7xl mx-auto">
          <AlertCircle className="w-4 h-4 text-white/60 flex-shrink-0 mt-1" strokeWidth={2} />
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            <span className="font-semibold text-white/80">Disclaimer:</span> All screenshots, mockups, and visual demonstrations on this website use Chase logos, branding, and design elements for illustrative and demonstration purposes only. These materials are not official Chase products or services, and no affiliation, endorsement, or partnership with JPMorgan Chase & Co. is implied or intended. All trademarks, logos, and brand names are the property of their respective owners. This website is for evaluation and demonstration purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}

