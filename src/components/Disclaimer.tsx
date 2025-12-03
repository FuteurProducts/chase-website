import { AlertCircle } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="w-full bg-[#FEF3C7] dark:bg-[#78350F]/20 border-t border-[#FCD34D] dark:border-[#FCD34D]/30 py-4 px-5 md:px-[5vw]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#92400E] dark:text-[#FCD34D] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#92400E] dark:text-[#FCD34D] leading-relaxed">
            <strong className="font-semibold">Disclaimer:</strong> All screenshots, mockups, and visual demonstrations on this website use Chase logos, branding, and design elements for illustrative and demonstration purposes only. These materials are not official Chase products or services, and no affiliation, endorsement, or partnership with JPMorgan Chase & Co. is implied or intended. All trademarks, logos, and brand names are the property of their respective owners. This website is for evaluation and demonstration purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}

