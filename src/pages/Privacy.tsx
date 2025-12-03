import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function Privacy() {
  const containerClass = "mx-auto w-full px-5 md:px-[5vw]";
  const neutralCard = "bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]";

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroBackground>
        <div className="flex flex-col items-start max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#1146F2] text-white text-xs sm:text-sm font-medium mb-5 sm:mb-6"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
            LUMIQ AI for Chase
          </motion.div>

          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[72px] font-semibold mb-2 sm:mb-3 leading-[40px] sm:leading-[52px] md:leading-[64px] lg:leading-[85px] tracking-[-0.5px] sm:tracking-[-1.2px] md:tracking-[-2.16px] text-white">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8">
            Last Updated: January 2025
          </p>
        </div>
      </HeroBackground>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div
            {...fadeInUp}
            className="space-y-6 max-w-5xl mx-auto"
          >
            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#070707]/80 dark:text-white/70">
                  This Privacy Policy describes how LUMIQ AI and FuteurCredX ("we", "us", or "our") collect, use, and protect information in connection with the Chase Business Credit Journey demonstration and pilot program.
                </p>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Contact Information</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    When you submit inquiries or request pilot information, we collect your name, email address, company information, and any messages you provide.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Business Credit Data (Pilot Participants Only)</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    During pilot programs, we may access business credit data including owner FICO scores, business credit scores (FICO SBSS, Experian FSR), internal banking relationship data, and transaction patterns. All data remains within the financial institution's controlled environment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Usage Analytics</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    We collect anonymized usage data to improve platform performance, including page views, feature usage, and technical diagnostics.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">How We Use Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#070707]/80 dark:text-white/70 list-disc list-inside">
                  <li>To respond to inquiries and provide pilot program information</li>
                  <li>To deliver credit intelligence services during authorized pilot programs</li>
                  <li>To generate risk scores, pre-qualification insights, and portfolio analytics</li>
                  <li>To improve platform functionality and user experience</li>
                  <li>To comply with legal and regulatory requirements (FCRA, ECOA, GLBA)</li>
                  <li>To maintain audit trails and explainability documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Data Security & Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Encryption & Access Controls</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All data is encrypted at rest and in transit using industry-standard protocols. Access is restricted through role-based access controls (RBAC) and multi-factor authentication.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Infrastructure Security</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Our platform is SOC 2 Type II compliant and follows ISO 27001 standards. Data can be deployed within financial institution's own infrastructure or in a segregated vendor VPC with Chase-approved security controls.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Data Minimization</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    We collect only the minimum data necessary for credit intelligence services. PII is minimized and pseudonymized where possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#070707]/80 dark:text-white/70">
                  Contact information is retained for business purposes unless you request deletion. Pilot program data is retained according to contractual agreements with participating financial institutions, typically 3-7 years for compliance and audit purposes. All data retention aligns with FCRA, ECOA, and banking regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Data Sharing & Third Parties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[#070707]/80 dark:text-white/70">
                  We do not sell or rent personal information. Data may be shared only in the following circumstances:
                </p>
                <ul className="space-y-2 text-sm text-[#070707]/80 dark:text-white/70 list-disc list-inside">
                  <li>With the financial institution you represent, as part of authorized pilot programs</li>
                  <li>With credit bureaus (Experian, Equifax, TransUnion, D&B) for authorized credit decisioning</li>
                  <li>With service providers under strict data processing agreements (hosting, analytics)</li>
                  <li>When required by law, regulation, or legal process</li>
                  <li>To protect against fraud, security threats, or legal liability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[#070707]/80 dark:text-white/70 mb-2">You have the right to:</p>
                <ul className="space-y-2 text-sm text-[#070707]/80 dark:text-white/70 list-disc list-inside">
                  <li>Access the information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your contact information (subject to legal retention requirements)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Receive an explanation of automated credit decisions (adverse action rights under FCRA)</li>
                </ul>
                <p className="text-sm text-[#070707]/80 dark:text-white/70 mt-4">
                  To exercise these rights, contact us at <a href="mailto:support@futeurcredx.com" className="text-primary hover:underline">support@futeurcredx.com</a>
                </p>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#070707]/80 dark:text-white/70">
                  Our platform is designed to comply with Fair Credit Reporting Act (FCRA), Equal Credit Opportunity Act (ECOA), Gramm-Leach-Bliley Act (GLBA), and applicable banking regulations. We maintain full data lineage, explainability documentation, and audit trails to support regulatory examinations and adverse action reporting.
                </p>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Cookies & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#070707]/80 dark:text-white/70">
                  This demonstration site uses essential cookies for functionality and anonymized analytics to improve user experience. We do not use third-party advertising cookies or sell tracking data.
                </p>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#070707]/80 dark:text-white/70">
                  We may update this Privacy Policy periodically. Material changes will be communicated via email to pilot participants and posted on this page with an updated "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#070707]/80 dark:text-white/70 mb-4">
                  For privacy-related questions or concerns, contact:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-[#070707] dark:text-white">FuteurCredX / LUMIQ AI</p>
                  <p className="text-[#070707]/80 dark:text-white/70">17 State Street, Floor 40</p>
                  <p className="text-[#070707]/80 dark:text-white/70">New York, NY 10004</p>
                  <p className="text-[#070707]/80 dark:text-white/70">
                    Email: <a href="mailto:support@futeurcredx.com" className="text-primary hover:underline">support@futeurcredx.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Privacy;

