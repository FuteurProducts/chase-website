import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroBackground from "@/components/HeroBackground";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight,
  Brain,
  Smartphone,
  PieChart,
  Lock,
  FileText
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerClass = "mx-auto w-full px-5 md:px-[5vw]";
  const neutralCard = "bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]";
  const blueprintTimeline = [
    { year: "2016", text: "Chase launches Credit Journey as a free, Experian-powered credit-monitoring tool for anyone." },
    { year: "2019", text: "Credit Journey helping more than 15M people monitor their credit." },
    { year: "2020+", text: "~22M Credit Journey users cited as a flagship digital experience at Investor Day." }
  ];
  const smbStats = [
    { label: "Chase SMB relationships", value: "6–7M", detail: "across CCB" },
    { label: "New banking relationships won by fintechs", value: "~40%", detail: "Curinos 2023" },
    { label: "Global unmet SME credit needs", value: "$5T", detail: "IFC / World Bank" }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen">
        <section id="hero">
          <HeroBackground>
            <div className={containerClass}>
              <div className="flex flex-col items-start gap-12">
                <motion.div {...fadeInUp} className="w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-[0.3em] text-white/80 mb-6">
                    Case Study · Q4 2024
                  </div>
                  <h1 className="text-[28px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-tight text-white mb-4 sm:mb-6">
                    The Missing $100M+ Line Item for 7M Chase SMB Clients
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4">
                    Credit Journey proved that score + education + offers scales for 22M consumers.<sup className="text-white">1,2</sup>
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4">
                    LUMIQ AI applies the same mechanics to small-business credit decisions while fintechs capture 40% of new banking relationships.<sup className="text-white">3</sup>
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8">
                    Built for Chase's controls; modeled to unlock ~$100M+ annual uplift from Ink cards alone before extending to lending.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection('impact')}
                      className="group"
                    >
                      View the Business Case
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Link to="/model-governance-framework#pilot-form">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-white text-white hover:bg-white/10"
                      >
                        Discuss a 90-Day Pilot
                      </Button>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 text-sm text-white/80">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 whitespace-nowrap">
                      <TrendingUp className="w-4 h-4 text-white flex-shrink-0" />
                      <span>+15–25% app-to-booked lift</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 whitespace-nowrap">
                      <Shield className="w-4 h-4 text-white flex-shrink-0" />
                      <span>Built for ECOA / FCRA controls</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 whitespace-nowrap">
                      <Users className="w-4 h-4 text-white flex-shrink-0" />
                      <span>Targeting 7M SMB relationships</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-4 sm:gap-6 w-full mt-4"
                  >
                    {[
                      { value: "22M+", label: "Credit Journey users", icon: Users },
                      { value: "~7M", label: "Chase SMB clients", icon: Target },
                      { value: "$100M+", label: "Stage 1 modeled uplift", icon: TrendingUp }
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-3 px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border border-white/15 bg-white/5 text-white backdrop-blur-md min-w-[200px] sm:min-w-[240px] flex-1 sm:flex-initial"
                      >
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          <metric.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xl sm:text-2xl font-semibold leading-tight">{metric.value}</div>
                          <p className="text-xs sm:text-sm text-white/70 mt-1">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </HeroBackground>
        </section>

        {/* Consumer Blueprint Timeline */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">The Consumer Blueprint</h2>
              <p className="text-base sm:text-xl text-[#070707]/80 dark:text-white/70 px-4 sm:px-0">What Credit Journey already proved at 80M+ consumer scale</p>
            </motion.div>

            {/* Pull Quote */}
            <motion.div {...fadeInUp} className="mb-12">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/30">
                <CardContent className="p-8">
                  <blockquote className="text-2xl font-semibold italic text-foreground mb-4">
                    "If Credit Journey worked this well for 80M+ consumers, what happens when you give 7M small-business owners the same clarity—plus one-tap access to Ink cards and, later, LOC/term/CRE lending?"
                  </blockquote>
                  <cite className="text-sm text-[#070707]/80 dark:text-white/70">— LUMIQ AI Research Thesis, 2024</cite>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12">
              <Card className={`${neutralCard} rounded-[32px]`}>
                <CardContent className="p-8">
                  <div className="flex flex-col gap-8">
                    {blueprintTimeline.map((item, index) => (
                      <div key={item.year} className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {item.year}
                          </div>
                          <div className="hidden md:block h-px w-12 bg-primary/30" />
                        </div>
                        <p className="text-base md:text-lg text-[#070707] dark:text-white/80">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="rounded-[32px] bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/30">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-6 text-white">Operational Lessons for Chase: What Credit Journey Proved</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Mass adoption when free and frictionless:</span>
                        <span className="text-white/90"> 69% of digital banking users now use credit-monitoring tools like Credit Journey, up 8 percentage points YoY.<sup className="text-primary">4</sup></span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Measurable financial health impact:</span>
                        <span className="text-white/90"> Users completing Score Planner improved credit scores 30+ points on average.<sup className="text-primary">2</sup></span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Native channel for pre-approved products:</span>
                        <span className="text-white/90"> Creates in-app moments to present offers when customers are engaged with their credit data.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">Operational efficiency gains:</span>
                        <span className="text-white/90"> Internal materials position Credit Journey as part of experiences that drove record NPS, lower variable cost per household, and reduced teller transactions.<sup className="text-primary">5</sup></span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm font-semibold text-white">
                      LUMIQ AI thesis: Take the same proven mechanics and point them at the 7M small-business portfolio where Chase has no dedicated "business credit journey."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SMB Gap & Fintech Pressure */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">The SMB Gap & Fintech Pressure</h2>
              <p className="text-base sm:text-xl text-[#070707]/80 dark:text-white/70 px-4 sm:px-0">SMBs are quietly training their credit behavior elsewhere</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="mb-12 grid gap-4 md:grid-cols-3"
            >
              {smbStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#E4E7EC] dark:border-white/10 bg-white dark:bg-[#0F0F0F] p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#070707]/50 dark:text-white/50 mb-2">{stat.label}</p>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70">{stat.detail}</p>
                </div>
              ))}
            </motion.div>

            <div className="w-full">
              <motion.div {...fadeInUp} className="w-full">
                <Card className={`${neutralCard} hover:border-primary/30`}>
                  <CardContent className="p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 flex flex-col">
                    <div className="space-y-4">
                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-[#070707] dark:text-white">Chase SMB footprint & gap</h3>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">
                            Massive penetration, but no dedicated "business credit journey" akin to the consumer experience.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-[#E4E7EC] dark:border-white/10 bg-white dark:bg-[#0F0F0F] px-6 py-4 text-center shadow-sm">
                          <div className="text-xs uppercase tracking-[0.3em] text-[#070707]/70 dark:text-white/50 mb-1">Scale</div>
                          <div className="text-4xl font-bold text-primary">6–7M</div>
                          <p className="text-xs text-[#070707]/80 dark:text-white/70 mt-1">SMB clients across CCB</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#070707]/90 dark:text-white/70">
                        Product pages exist for Ink, LOC, term loans, and CRE, but SMBs never see a Credit Journey-style UI that unifies scores, education, and offers.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <h3 className="font-display text-xl font-bold mb-4">Where SMBs are training credit behavior</h3>
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        {[
                          {
                            heading: "Fintech share rising",
                            body: "Fintechs supply a growing share of small-dollar credit for SMBs (Federal Reserve Small Business Credit Survey).",
                            cite: 6
                          },
                          {
                            heading: "Huge unmet demand",
                            body: "$5T global SME credit gap leaves room for aggressive fintech buildout.",
                            cite: 7
                          },
                          {
                            heading: "Switching behavior",
                            body: "Fintechs now win ~40% of new banking relationships vs. 29% three years ago (Curinos).",
                            cite: 3
                          },
                          {
                            heading: "Policy tailwinds",
                            body: "SBA SBLC licenses now available to fintechs, intensifying lending competition.",
                            cite: 8
                          },
                          {
                            heading: "Modern card experiences",
                            body: "Ramp, Brex, and others scaled with digital-first UX aimed squarely at modern SMBs.",
                            cite: null
                          }
                        ].map((item) => (
                          <div key={item.heading} className="rounded-2xl border border-[#E4E7EC] dark:border-white/10 bg-white dark:bg-[#0F0F0F] p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <p className="text-sm font-semibold text-[#070707] dark:text-white">{item.heading}</p>
                              {item.cite && <sup className="text-primary font-semibold text-xs">{item.cite}</sup>}
                            </div>
                            <p className="text-sm text-[#070707]/80 dark:text-white/70">{item.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="rounded-3xl bg-primary/5 dark:bg-white/5 p-4 md:p-6 flex flex-col h-full">
                        <h3 className="font-display text-xl font-bold mb-3 md:mb-4 text-primary">Experience gap</h3>
                        <p className="text-sm text-[#070707]/80 dark:text-white/70 mb-3 md:mb-4">
                          <span className="font-medium text-[#070707] dark:text-white">McKinsey 2024/2025:</span> "Good online and mobile banking is the #1 reason SMEs choose a primary bank."<sup className="text-primary">9</sup>
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          <div className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/10 p-4 md:p-6">
                            <div className="text-xs font-semibold text-primary mb-4 uppercase tracking-[0.2em]">Chase Consumer</div>
                            <div className="flex items-center justify-center mb-4">
                              <img 
                                src="/chase consumer.png" 
                                alt="Chase Consumer Credit Journey" 
                                className="max-w-[220px] md:max-w-[280px] lg:max-w-[320px] h-auto object-contain"
                              />
                            </div>
                            <p className="text-sm text-[#070707]/80 dark:text-white/70">Credit Journey, Score Planner, education, embedded offers.</p>
                          </div>
                          <div className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/10 p-4 md:p-6">
                            <div className="text-xs font-semibold text-[#070707]/80 dark:text-white/70 mb-4 uppercase tracking-[0.2em]">Chase SMB</div>
                            <div className="flex items-center justify-center mb-4">
                              <img 
                                src="/mockups/Chase SMB (1).png" 
                                alt="Chase SMB" 
                                className="max-w-[220px] md:max-w-[280px] lg:max-w-[320px] h-auto object-contain"
                              />
                            </div>
                            <p className="text-sm text-[#070707]/80 dark:text-white/70">Product-centric pages (Ink, LOC, term, CRE) without a unified journey.</p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-[#070707] dark:text-white mt-4">
                          Result: SMBs who bank with Chase are getting coaching—and offers—from fintechs instead.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What LUMIQ AI Does */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">What LUMIQ AI – Business Credit Journey Does</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all hover:shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Smartphone className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">In-app SMB Credit Visibility</h3>
                    <p className="text-[#070707]/80 dark:text-white/70 mb-3">
                      Owner FICO and business-credit signals (e.g., Experian Intelliscore, FSR) shown directly in the Chase Business app UI.
                    </p>
                    <p className="text-[#070707]/80 dark:text-white/70 font-medium">
                      No extra logins. No external portals.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all hover:shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Brain className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">Policy-Aligned Soft Pre-Qualification</h3>
                    <p className="text-[#070707]/80 dark:text-white/70 mb-3">
                      Applies Chase's risk appetite, underwriting inputs, and guardrails (5/24, 2/30, 1/30, bureau status, exposure).
                    </p>
                    <p className="text-[#070707]/80 dark:text-white/70">
                      Generates likelihood-of-approval and explainable reasons for Ink Business cards (Stage 1) and, later, LOC/term/CRE (Stage 2).
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all hover:shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <PieChart className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">One-Tap Applications & Internal Control Tower</h3>
                    <p className="text-[#070707]/80 dark:text-white/70 mb-3">
                      One-tap pre-qualified applications from the Chase Business app (card first, then lending).
                    </p>
                    <p className="text-[#070707]/80 dark:text-white/70">
                      Internal dashboard shows eligible SMBs, funnel conversion, approval-rate delta, loss-rate delta, and A/B lift.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modeled Impact */}
        <section id="impact" className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Modeled Impact – Stage 1 & Stage 2</h2>
              <p className="text-base sm:text-xl text-[#070707]/80 dark:text-white/70 mb-4 sm:mb-6 px-4 sm:px-0">Modeled, not forecast; calibrated to Chase scale and public benchmarks</p>
              <Card className={`${neutralCard} bg-white dark:bg-[#0F0F0F]`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Methodology & Assumptions</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="font-semibold text-foreground mb-2">Stage 1 Pilot Cohort</div>
                      <ul className="space-y-1 text-[#070707]/80 dark:text-white/70">
                        <li>• Target: 250K–400K digitally active SMBs</li>
                        <li>• Reach rate: 60–70% of target cohort</li>
                        <li>• Engagement rate: 35–45% (interact with journey / see offers)</li>
                        <li>• Conversion lift: +15–25% app-to-booked vs. current baseline</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Financial Assumptions</div>
                      <ul className="space-y-1 text-[#070707]/80 dark:text-white/70">
                        <li>• Avg annual spend per new Ink card: $60–80K</li>
                        <li>• Blended interchange rate: ~1.8%</li>
                        <li>• CAC comparison: owned channel vs. paid media</li>
                        <li>• Conservative revolver + fee income modeling</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-[#070707]/80 dark:text-white/70 mt-4 pt-4 border-t border-border">
                    These order-of-magnitude estimates are consistent with what Chase demonstrated with Credit Journey at consumer scale (22M users and material digital ROI).<sup className="text-primary">1,2,5</sup>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              <motion.div {...fadeInUp} className="w-full">
                <Card className={`h-full ${neutralCard} border-primary/20`}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#070707] dark:text-white">Stage 1</h3>
                        <p className="text-[#070707]/80 dark:text-white/70">Ink Business Cards</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-[#070707]/80 dark:text-white/70 mb-1">Pilot cohort</div>
                        <div className="text-lg font-semibold text-[#070707] dark:text-white">Digitally-active SMBs</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-lg p-4">
                          <div className="text-3xl font-bold text-primary mb-1">+15–25%</div>
                          <div className="text-sm text-[#070707]/80 dark:text-white/70">App-to-booked lift in owned channel</div>
                        </div>
                        <div className="bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-lg p-4">
                          <div className="text-3xl font-bold text-primary mb-1">~55K</div>
                          <div className="text-sm text-[#070707]/80 dark:text-white/70">Incremental booked Ink cards</div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-[#E4E7EC] dark:border-[#1D1D1D]">
                        <div className="flex justify-between items-center">
                          <span className="text-[#070707]/80 dark:text-white/70">Gross interchange / year</span>
                          <span className="text-xl font-bold text-[#070707] dark:text-white">~$79.4M</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#070707]/80 dark:text-white/70">CAC savings / year</span>
                          <span className="text-xl font-bold text-[#070707] dark:text-white">~$9.2M</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#070707]/80 dark:text-white/70">Additional fee & interest income</span>
                          <span className="text-xl font-bold text-[#070707] dark:text-white">~$14M+</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t-2 border-primary/30 bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg text-[#070707] dark:text-white">Stage 1 Total Uplift</span>
                          <span className="text-3xl font-bold text-primary">~$100M+</span>
                        </div>
                        <p className="text-xs text-[#070707]/80 dark:text-white/70 mt-2">
                          Per year from cards alone, at Chase scale, with lower unit CAC and policy-aligned risk controls
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="w-full">
                <Card className={`h-full ${neutralCard} border-primary/20`}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#070707] dark:text-white">Stage 2</h3>
                        <p className="text-[#070707]/80 dark:text-white/70">Lending Ecosystem</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-[#070707] dark:text-white">Business Line of Credit</span>
                          <span className="text-lg font-bold text-primary">$50–80M</span>
                        </div>
                        <div className="text-xs text-[#070707]/80 dark:text-white/70">Incremental annual revenue potential</div>
                      </div>

                      <div className="bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-[#070707] dark:text-white">Term Loans</span>
                          <span className="text-lg font-bold text-primary">$80–120M</span>
                        </div>
                        <div className="text-xs text-[#070707]/80 dark:text-white/70">Incremental annual revenue potential</div>
                      </div>

                      <div className="bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-[#070707] dark:text-white">Commercial Real Estate</span>
                          <span className="text-lg font-bold text-primary">$80–120M</span>
                        </div>
                        <div className="text-xs text-[#070707]/80 dark:text-white/70">Incremental annual revenue potential</div>
                      </div>

                      <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 border border-primary/20 mt-6">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-[#070707] dark:text-white">Total Stage 2 Range</span>
                          <span className="text-2xl font-bold text-primary">$210–320M</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#070707]/80 dark:text-white/70 italic pt-4">
                        Stage 2 ranges are directional, based on unmet SME credit demand, Chase SMB scale, and modest uplift assumptions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Governance & Fit */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#070707] dark:text-white">Governance & Fit</h2>
              <p className="text-base sm:text-xl text-[#070707]/70 dark:text-white/70 px-4 sm:px-0">Bank-friendly by design</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="w-full">
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-5 md:p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Revenue Lift</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      More qualified SMBs converted to the right product—within existing risk appetite.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="w-full">
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-5 md:p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Risk & Compliance</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 mb-2">
                      Uses named underwriting inputs (FICO, Experian Intelliscore, FSR, internal attributes).
                    </p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      Supports ECOA/FCRA/GLBA obligations, model-risk governance, and adverse-action reasons.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="w-full">
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-5 md:p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Operational Efficiency</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 mb-2">
                      Reduces manual reviews for straightforward cases.
                    </p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      Shortens time-to-decision, which SMEs consistently rank as critical.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="w-full">
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-5 md:p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Integration</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 mb-2">
                      API-first with sandbox, batch or real-time modes.
                    </p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      Non-disruptive A/B pilots; clear SLAs, RTO/RPO, and security posture.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 90-Day Pilot */}
        <section id="pilot" className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="font-display text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">How We'd Prove It in 90 Days</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full rounded-[28px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] shadow-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-semibold text-primary mb-4">WEEKS 0–2</div>
                    <h3 className="font-display text-xl font-bold mb-4">Connect & Simulate</h3>
                    <p className="text-[#070707]/80 dark:text-white/70">
                      Connect scores & sandbox; re-create a small, simulated 'Credit Journey for Business' cohort.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full rounded-[28px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] shadow-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-semibold text-primary mb-4">WEEKS 3–8</div>
                    <h3 className="font-display text-xl font-bold mb-4">A/B Test & Measure</h3>
                    <p className="text-[#070707]/80 dark:text-white/70">
                      A/B test vs. current flows—measure lift, approval-rate delta, loss-rate delta, and time-to-decision.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="h-full rounded-[28px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] shadow-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-semibold text-primary mb-4">WEEKS 9–12</div>
                    <h3 className="font-display text-xl font-bold mb-4">Scale Decision</h3>
                    <p className="text-[#070707]/80 dark:text-white/70">
                      Scale to a broader SMB segment if KPIs are met.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Citations Legend */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707] border-t border-border">
          <div className={containerClass}>
            <motion.div {...fadeInUp}>
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-6">Citations & References</h2>
                <p className="text-[#070707]/80 dark:text-white/70 mb-8">
                  This case study draws on public information and industry research from the following sources:
                </p>
                
                <div className="grid gap-4">
                <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">1</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">JPMorgan Chase Investor Day 2020</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Digital engagement metrics and Credit Journey user base (~22M users)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">2</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Chase Credit Journey and Experian Public Communications (2019)</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Score Planner impact data (30+ point average improvements)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">3</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Curinos Banking Consumer Study (2023)</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Fintech switching patterns and new relationship capture rates</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">4</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Digital Banking Consumer Survey (2021)</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Credit monitoring tool adoption rates and year-over-year growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">5</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">JPMorgan Chase Investor Day 2019</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Internal positioning of Credit Journey within digital banking suite and operational efficiency gains</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">6</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Federal Reserve Small Business Credit Survey (2023)</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Online lender adoption trends among small businesses</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">7</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">World Bank / IFC SME Finance Gap Reports</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Global unmet credit demand estimates for small and medium enterprises</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">8</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">U.S. Small Business Administration (SBA)</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">Small Business Lending Company (SBLC) program expansion and fintech participation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-base leading-none">9</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">McKinsey & Company</p>
                          <p className="text-sm text-[#070707]/80 dark:text-white/70">"The Future of MSME Banking" (2024/2025) – Digital experience as primary bank selection factor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className={`${neutralCard} mb-8`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-[#070707] dark:text-white">Methodology Note</h3>
                      <p className="text-sm text-[#070707]/80 dark:text-white/70 leading-relaxed">
                        All modeled impact figures are directional estimates calibrated to Chase's publicly disclosed SMB scale (~6–7M clients), Credit Journey consumer success metrics (22M users, measurable engagement and financial health outcomes), and conservative industry benchmarks for card interchange rates, average spend, and conversion lift assumptions. These are not guarantees or forecasts but order-of-magnitude scenarios based on analogous consumer product success within Chase's existing infrastructure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={neutralCard}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-[#070707] dark:text-white">Legal Notice</h3>
                      <p className="text-sm text-[#070707]/80 dark:text-white/70 leading-relaxed">
                        LUMIQ AI and Lumiq AI are independent solutions; no affiliation or endorsement by JPMorgan Chase is implied. All trademarks belong to their respective owners. This analysis is for informational purposes only and does not constitute financial, legal, or business advice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12 text-center">
                <Link to="/model-governance-framework#pilot-form">
                  <Button size="lg" className="group">
                    Start a 90-Day Pilot Review
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

