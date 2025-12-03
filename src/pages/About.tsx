import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Target, Shield, TrendingUp, Users, Lightbulb, ArrowRight, Database, Brain, BarChart3 } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function About() {
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
            About Lumiq AI
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/70 mb-4 sm:mb-6">
            (Powered by Futeurcredx)
          </p>

          <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4 max-w-3xl leading-relaxed font-normal">
            Building the future of credit intelligence—enterprise-grade AI that empowers financial institutions and consumers to make better credit decisions.
          </p>

          <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 max-w-2xl">
            From consumer credit education to business credit infrastructure, we deliver measurable outcomes through explainable AI and regulatory-aligned decisioning.
          </p>
        </div>
      </HeroBackground>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] font-bold mb-3 sm:mb-4 text-[#070707] dark:text-white leading-[32px] sm:leading-[41.6px] md:leading-[56px]">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
              Futeurcredx is an enterprise AI company specializing in credit intelligence, risk scoring, and financial product optimization for banks, lenders, and consumers.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#070707] dark:text-white mb-3">Mission-Driven</h3>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                    Democratize credit intelligence and enable fair, transparent, and data-driven lending decisions at scale.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#070707] dark:text-white mb-3">Dual Audience</h3>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                    Serving both financial institutions (banks, credit unions, lenders) and consumers seeking credit transparency and optimization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#070707] dark:text-white mb-3">Compliance-First</h3>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                    Built with SOC 2, FCRA, ECOA, and GLBA alignment from day one. Audit-ready infrastructure designed for enterprise risk and compliance teams.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] font-bold mb-3 sm:mb-4 text-[#070707] dark:text-white leading-[32px] sm:leading-[41.6px] md:leading-[56px]">
              What We Do
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
              We build AI-powered credit intelligence platforms that transform how institutions underwrite, monitor, and grow their portfolios.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className={neutralCard}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Database className="w-7 h-7 text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#070707] dark:text-white mb-3">Credit Data Unification</h3>
                      <p className="text-[#070707]/70 dark:text-white/70 leading-relaxed mb-3">
                        Consolidate owner FICO, business credit scores (FICO SBSS, Experian FSR), internal banking data, and behavioral signals into a single unified view with full data lineage.
                      </p>
                      <p className="text-sm text-[#070707]/70 dark:text-white/70 italic">
                        Real-time ingestion with explainable scoring models aligned to institutional policy overlays.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className={neutralCard}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-7 h-7 text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#070707] dark:text-white mb-3">AI-Powered Risk Decisioning</h3>
                      <p className="text-[#070707]/70 dark:text-white/70 leading-relaxed mb-3">
                        Pre-qualification engines, early warning detection, and product recommendation models that reduce manual underwriting by 35% while improving approval accuracy by 18-20%.
                      </p>
                      <p className="text-sm text-[#070707]/70 dark:text-white/70 italic">
                        Explainable AI with full audit trails for compliance, adverse action reporting, and model governance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className={neutralCard}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-7 h-7 text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#070707] dark:text-white mb-3">Portfolio Intelligence Dashboards</h3>
                      <p className="text-[#070707]/70 dark:text-white/70 leading-relaxed mb-3">
                        Executive, risk, and banker dashboards showing qualified segments, pre-qualification funnels, industry risk heatmaps, conversion lift tracking, and loss pattern monitoring.
                      </p>
                      <p className="text-sm text-[#070707]/70 dark:text-white/70 italic">
                        Proactive alerts and segmentation tools enable data-driven portfolio optimization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Products */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] font-bold mb-3 sm:mb-4 text-[#070707] dark:text-white leading-[32px] sm:leading-[41.6px] md:leading-[56px]">
              Our Enterprise Product & Resources
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
              LUMIQ AI for institutions—backed by comprehensive technical documentation and integration support.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className={`${neutralCard} h-full flex flex-col`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#070707] dark:text-white">LUMIQ AI for Institutions</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                      Enterprise-grade credit intelligence for banks, credit unions, and lenders. Integrates directly into existing underwriting systems via RESTful API.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Unified business credit view (owner FICO + business scores)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Pre-qualification and product recommendation engines
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Portfolio health monitoring with early warning detection
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Compliance-ready audit trails and explainability
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" variant="solver" asChild>
                    <a href="https://institutions.futeurcredx.com" target="_blank" rel="noopener noreferrer">
                      Visit Institutions Portal
                      <ExternalLink className="ml-2 w-4 h-4" strokeWidth={2.5} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className={`${neutralCard} h-full flex flex-col`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#070707] dark:text-white">Lumiq AI Documentation Hub</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-0 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                      Comprehensive technical documentation and integration resources for developers, engineers, and technical teams implementing Lumiq AI solutions.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Complete API reference documentation with endpoint specifications and authentication guides
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Step-by-step integration tutorials and implementation best practices
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Technical architecture diagrams, data flow specifications, and security protocols
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          Sample code libraries, SDKs, and sandbox environment access for testing
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6 border-[#070707] dark:border-white text-[#070707] dark:text-white hover:bg-[#070707]/10 dark:hover:bg-white/10" asChild>
                    <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer">
                      View Documentation
                      <ExternalLink className="ml-2 w-4 h-4" strokeWidth={2.5} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] font-bold mb-3 sm:mb-4 text-[#070707] dark:text-white leading-[32px] sm:leading-[41.6px] md:leading-[56px]">
              Why We Built This
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
              The credit industry is broken. Information asymmetry hurts consumers and institutions alike.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className={neutralCard}>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bold text-xl mb-3 text-[#070707] dark:text-white">For Consumers</h3>
                  <p className="text-[#070707]/70 dark:text-white/70 leading-relaxed mb-4">
                    71% of consumers don't understand how their credit score is calculated. 1 in 5 have errors on their credit reports. Access to credit education and transparency shouldn't be a luxury—it should be a fundamental right.
                  </p>
                  <p className="text-[#070707]/70 dark:text-white/70 text-sm italic">
                    We saw consumers struggling to navigate credit systems designed to keep them in the dark. Lumiq AI changes that.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className={neutralCard}>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bold text-xl mb-3 text-[#070707] dark:text-white">For Institutions</h3>
                  <p className="text-[#070707]/70 dark:text-white/70 leading-relaxed mb-4">
                    Banks and lenders are losing qualified customers to fintech disruptors who offer faster decisions and transparent experiences. Manual underwriting is slow, expensive, and error-prone. Risk teams lack real-time portfolio visibility.
                  </p>
                  <p className="text-[#070707]/70 dark:text-white/70 text-sm italic">
                    We saw institutions stuck with legacy systems that couldn't adapt to modern expectations. LUMIQ AI bridges that gap.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className={neutralCard}>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-bold text-xl mb-3 text-[#070707] dark:text-white">The Outcome</h3>
                  <p className="text-[#070707]/70 dark:text-white/70 leading-relaxed mb-4">
                    By combining consumer-grade transparency with enterprise-grade compliance, we're creating a new standard for credit intelligence. Consumers get control. Institutions get velocity and risk visibility. Everyone wins.
                  </p>
                  <p className="text-[#070707]/70 dark:text-white/70 text-sm italic">
                    This isn't incremental improvement—it's systemic transformation of how credit decisions are made.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative scroll-mt-20 overflow-hidden bg-[#050b25]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 -top-40 h-[620px] bg-gradient-to-b from-white via-[#4c6ef5] to-[#0a1b45]" />
          <div className="absolute inset-0 top-0">
            <div className="absolute right-[-20%] md:right-[10%] w-[1100px] h-[900px] bg-[#7b61ff]/45 blur-[220px]" />
            <div className="absolute left-[-30%] md:left-0 w-[1000px] h-[820px] bg-[#1b4ed8]/55 blur-[210px]" />
            <div className="absolute inset-x-0 top-[120px] h-[500px] bg-gradient-to-b from-transparent via-[#0a1030]/40 to-transparent blur-[120px]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[460px] bg-gradient-to-b from-transparent via-[#04070f] to-[#020306]" />
        </div>
        <div className={containerClass} style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold mb-4 sm:mb-6 text-white leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[72px] px-4 sm:px-0">
              Ready to Transform Credit Intelligence?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              Whether you're a financial institution looking to modernize underwriting or exploring enterprise credit solutions, we'd love to connect.
            </p>
            
            <Link to="/model-governance-framework#pilot-form" className="w-full sm:w-auto flex justify-center px-4 sm:px-0">
              <Button variant="solverSecondary" size="lg" className="text-sm sm:text-base md:text-lg gap-3 sm:gap-4 w-full sm:w-auto px-6 sm:px-8 py-6 sm:py-7 font-semibold">
                Get in Touch
                <div className="w-8 h-8 sm:w-10 sm:h-10 p-2 sm:p-2.5 rounded-full bg-[#070707] flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default About;

