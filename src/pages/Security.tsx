import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Shield, FileCheck, AlertTriangle } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function Security() {
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
            <Lock className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
            LUMIQ AI for Chase
          </motion.div>

          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[72px] font-semibold mb-2 sm:mb-3 leading-[40px] sm:leading-[52px] md:leading-[64px] lg:leading-[85px] tracking-[-0.5px] sm:tracking-[-1.2px] md:tracking-[-2.16px] text-white">
            Security Policy
          </h1>
          <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8">
            Enterprise-grade security designed for financial institutions
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
                <CardTitle className="text-[#070707] dark:text-white">Security Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#070707]/80 dark:text-white/70">
                  LUMIQ AI's credit intelligence platform is built with security-first architecture designed to meet the stringent requirements of financial institutions. Our infrastructure, processes, and controls align with SOC 2 Type II, ISO 27001, and banking industry security standards.
                </p>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#070707] dark:text-white">
                  <Lock className="w-5 h-5 text-primary" />
                  Data Encryption & Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Encryption at Rest</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All data stored in our systems is encrypted using AES-256 encryption. Database volumes, backups, and archived data are encrypted with keys managed through AWS KMS or equivalent HSM-backed key management systems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Encryption in Transit</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All data transmission occurs over TLS 1.3 with perfect forward secrecy. API communications use mutual TLS (mTLS) for enhanced authentication and confidentiality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">PII Minimization</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Personally identifiable information (PII) is minimized throughout the platform. Where possible, data is pseudonymized or tokenized. Credit decisioning uses hashed identifiers with full PII retained only within the financial institution's controlled environment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#070707] dark:text-white">
                  <Shield className="w-5 h-5 text-primary" />
                  Access Control & Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Role-Based Access Control (RBAC)</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Access is granted based on the principle of least privilege. Users receive only the permissions necessary for their role (business owner, banker, risk analyst, compliance officer, system administrator).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Multi-Factor Authentication (MFA)</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All administrative and privileged access requires multi-factor authentication. We support TOTP, hardware tokens, and integration with enterprise SSO providers (Okta, Azure AD).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Session Management</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Sessions are time-limited with automatic logout after inactivity. Concurrent session limits prevent credential sharing. All authentication events are logged and monitored.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Infrastructure Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Deployment Options</h3>
                  <ul className="space-y-2 text-sm text-[#070707]/80 dark:text-white/70 list-disc list-inside">
                    <li><strong>Chase Hosted:</strong> Platform deployed entirely within Chase's controlled infrastructure</li>
                    <li><strong>Segregated VPC:</strong> Dedicated virtual private cloud with Chase-approved network controls</li>
                    <li><strong>Hybrid:</strong> Models and analytics in vendor environment; all sensitive data remains in Chase systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Network Security</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All environments are protected by multiple layers of firewalls, intrusion detection/prevention systems (IDS/IPS), and DDoS mitigation. Network segmentation isolates production, staging, and development environments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Vulnerability Management</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Regular vulnerability scans, penetration testing (annual minimum), and automated security patching. Critical security patches are applied within 48 hours of vendor release.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#070707] dark:text-white">
                  <FileCheck className="w-5 h-5 text-primary" />
                  Compliance & Audit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Certifications & Standards</h3>
                  <ul className="space-y-2 text-sm text-[#070707]/80 dark:text-white/70 list-disc list-inside">
                    <li>SOC 2 Type II (Security, Availability, Confidentiality)</li>
                    <li>ISO 27001 Information Security Management</li>
                    <li>FCRA-aligned credit reporting controls</li>
                    <li>GLBA Safeguards Rule compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Audit Logging</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All system access, data queries, model executions, and administrative actions are logged with immutable audit trails. Logs are retained for 7 years and available for regulatory examination.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Data Lineage</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Full data lineage tracking from source systems through transformations to final credit decisions. Every score, recommendation, and adverse action can be traced back to source data with complete explainability.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Application Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Secure Development Lifecycle</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All code undergoes security review, static analysis (SAST), and dependency scanning before deployment. Third-party libraries are vetted for known vulnerabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">API Security</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    RESTful APIs use OAuth 2.0 / JWT authentication with rate limiting, input validation, and output encoding. GraphQL endpoints implement query depth limits and field-level authorization.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Change Management</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    All production changes follow formal change control processes with security review, testing in staging environments, and rollback procedures.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Incident Response</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">24/7 Monitoring</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Security Information and Event Management (SIEM) with real-time alerting for suspicious activity, unauthorized access attempts, and anomalous data patterns.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Incident Response Plan</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Documented procedures for detecting, containing, investigating, and remediating security incidents. Notification protocols include affected financial institutions and regulators as required.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Breach Notification</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    In the event of a data breach affecting credit data, we will notify affected parties within 72 hours and comply with all applicable breach notification laws.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="text-[#070707] dark:text-white">Business Continuity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Backup & Recovery</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Automated daily backups with point-in-time recovery. Backups are encrypted and replicated across multiple geographic regions. Recovery Time Objective (RTO): 4 hours. Recovery Point Objective (RPO): 1 hour.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#070707] dark:text-white mb-2">Disaster Recovery</h3>
                  <p className="text-sm text-[#070707]/80 dark:text-white/70">
                    Tested disaster recovery plans with annual tabletop exercises. Failover to secondary data center within 2 hours for critical services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className={neutralCard}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#070707] dark:text-white">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  Reporting Security Concerns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#070707]/80 dark:text-white/70 mb-4">
                  If you discover a security vulnerability or have security concerns, please report them immediately:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-[#070707]/80 dark:text-white/70">
                    Email: <a href="mailto:support@futeurcredx.com" className="text-primary hover:underline font-medium">support@futeurcredx.com</a>
                  </p>
                  <p className="text-[#070707]/80 dark:text-white/70">
                    Phone: <a href="tel:+12129374610" className="text-primary hover:underline font-medium">212-937-4610</a> (24/7 Security Hotline)
                  </p>
                  <p className="text-xs text-[#070707]/80 dark:text-white/70 mt-4">
                    We appreciate responsible disclosure and will work with security researchers to address reported vulnerabilities promptly.
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

export default Security;

