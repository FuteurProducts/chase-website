import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Smartphone, 
  BarChart3, 
  Shield, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Play
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const demoScreens = [
  {
    title: "Portfolio Dashboard View",
    description: "Chase internal teams see real-time portfolio intelligence across all business customers.",
    caption: "Live portfolio views by approval tier, product fit, and credit score cohorts.",
    image: "placeholder"
  },
  {
    title: "Business Banking Interface with Credit Journey",
    description: "Chase users immediately see their business + personal credit signals — no manual pull required.",
    caption: "Seamlessly integrated into Chase Business app with zero learning curve.",
    image: "placeholder"
  },
  {
    title: "Instant Card Eligibility Routing",
    description: "AI-powered pre-qualification aligned to your risk appetite and policy layers.",
    caption: "This drives lift and trust while reducing manual review load by 20%.",
    image: "placeholder"
  },
  {
    title: "Compliance Log & Model Snapshot",
    description: "Every decision logged with full audit trail. Built for ECOA, OCC, and MRM workflows.",
    caption: "100% transparency for risk teams and regulators.",
    image: "placeholder"
  }
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Pre-Qualification",
    description: "Real-time signal processing aligned to your risk appetite and policy layers."
  },
  {
    icon: Smartphone,
    title: "Embedded UX",
    description: "Credit Journey-style experience for SMBs inside Chase Business."
  },
  {
    icon: BarChart3,
    title: "Portfolio Intelligence Tracker",
    description: "Live portfolio views by approval tier, product fit, and credit score cohorts."
  },
  {
    icon: Shield,
    title: "Risk & Audit Layer",
    description: "Every decision logged. 100% audit trail. Built for ECOA, OCC, and MRM workflows."
  }
];

const faqs = [
  {
    question: "How does LUMIQ AI integrate with existing Chase systems?",
    answer: "LUMIQ AI uses REST APIs and SDKs that plug directly into your existing Chase Business mobile and web applications. No changes to your current underwriting workflow are required. The integration typically takes 2-4 weeks for initial setup, with full deployment achievable in a 90-day pilot."
  },
  {
    question: "What credit data sources does LUMIQ AI use?",
    answer: "LUMIQ AI pulls Experian Intelliscore, FSR (Financial Stability Risk), and owner FICO/VantageScore data. We apply your existing policy layers, scorecard rules, and risk overlays to ensure all decisions align with Chase's risk appetite and compliance requirements."
  },
  {
    question: "How is customer data secured and governed?",
    answer: "All data is encrypted in transit and at rest. LUMIQ AI is SOC 2-aligned with ISO 27001-compatible controls. We support configurable data residency, retention policies, and provide full audit trails for compliance teams. Risk ownership remains entirely with Chase — we never override your approval authority."
  },
  {
    question: "What results can we expect from a pilot?",
    answer: "Typical pilot outcomes include 8-15% lift in qualified SMB applications, 20-35% reduction in manual review load, and measurable incremental interchange revenue per booked card. The pilot runs A/B testing to measure lift, approval-rate delta, and loss-rate delta against your control group."
  },
  {
    question: "Can LUMIQ AI extend beyond credit cards to lending products?",
    answer: "Yes. The same decision infrastructure can be extended to Business Lines of Credit, Term Loans, and Commercial Real Estate lending in Stage 2. The scoring and governance rails are product-agnostic and designed for multi-product expansion."
  },
  {
    question: "What level of customization is available?",
    answer: "LUMIQ AI is fully customizable to your policy rules, risk thresholds, adverse action logic, and brand guidelines. You maintain complete control over decision rules, score cutoffs, and product eligibility criteria."
  }
];

const walkthrough = [
  { step: 1, title: "Login", description: "Secure authentication via Chase SSO" },
  { step: 2, title: "Credit Journey Activation", description: "One-tap access to business credit insights" },
  { step: 3, title: "Score Display", description: "Personal FICO + Business FSR & Intelliscore" },
  { step: 4, title: "Eligible Card Match", description: "AI-recommended products based on policy" },
  { step: 5, title: "Credit Tips Overlay", description: "Actionable insights to improve eligibility" },
  { step: 6, title: "Apply Button", description: "Seamless application flow" },
  { step: 7, title: "Backend Dashboard", description: "Portfolio-level analytics for Chase teams" },
  { step: 8, title: "Model Audit View", description: "Full transparency and compliance logging" }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-border/50 last:border-0"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Demo() {
  const [email, setEmail] = useState("");
  const [activeWalkthrough, setActiveWalkthrough] = useState(0);

  const handleScheduleDemo = () => {
    console.log("Scheduling demo for:", email);
    // Add your booking logic here
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div {...fadeInUp}>
              <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                See the LUMIQ AI Business Credit Journey{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  in Action
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The missing link in your business banking experience. Pre-qualify SMBs for the right product using real-time Experian Intelliscore + FSR signals — directly inside your app.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group shadow-premium hover:shadow-glow transition-all duration-300"
                  onClick={() => document.getElementById('interactive-gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Launch Interactive Demo
                  <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book a Credit Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Right: Interactive Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-premium p-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Interactive Demo Preview</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section id="interactive-gallery" className="py-24 bg-gradient-to-b from-background to-card/20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Experience the Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore key screens and see how LUMIQ AI powers business credit decisions at scale.
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {demoScreens.map((screen, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                    <div className="aspect-video bg-muted/20 rounded-lg mb-6 flex items-center justify-center border border-border/30 group hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                          <BarChart3 className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Hover to enlarge</p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{screen.title}</h3>
                    <p className="text-muted-foreground mb-2">{screen.description}</p>
                    <p className="text-sm text-primary italic">{screen.caption}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Breakdown Grid - What You'll See */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              What You'll See in the Demo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four core capabilities that power business credit intelligence.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mini Playthrough Carousel */}
      <section className="py-24 bg-gradient-to-b from-card/20 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              8-Step Guided Preview
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow the complete journey from customer login to backend analytics.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {walkthrough.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWalkthrough(index)}
                  className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                    activeWalkthrough === index
                      ? 'border-primary bg-primary/10'
                      : 'border-border/50 bg-card/30 hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                  <div className="text-sm font-medium">{item.title}</div>
                </button>
              ))}
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="aspect-video bg-muted/20 rounded-lg mb-6 flex items-center justify-center border border-border/30">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">
                    {walkthrough[activeWalkthrough].step}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {walkthrough[activeWalkthrough].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {walkthrough[activeWalkthrough].description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  disabled={activeWalkthrough === 0}
                  onClick={() => setActiveWalkthrough(Math.max(0, activeWalkthrough - 1))}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Step {activeWalkthrough + 1} of {walkthrough.length}
                </span>
                <Button
                  disabled={activeWalkthrough === walkthrough.length - 1}
                  onClick={() => setActiveWalkthrough(Math.min(walkthrough.length - 1, activeWalkthrough + 1))}
                >
                  Next
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the LUMIQ AI platform.
            </p>
          </motion.div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </Card>
        </div>
      </section>

      {/* Impact Block */}
      <section className="py-24 bg-gradient-to-b from-background to-card/20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Why LUMIQ AI Wins
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven results from pilot implementations with enterprise banking partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-5xl font-bold text-primary mb-4">8-15%</div>
              <div className="text-lg font-medium mb-2">Application Lift</div>
              <p className="text-sm text-muted-foreground">
                Increase in qualified applications during A/B testing
              </p>
            </Card>
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-5xl font-bold text-primary mb-4">20-35%</div>
              <div className="text-lg font-medium mb-2">Faster Decisions</div>
              <p className="text-sm text-muted-foreground">
                Reduction in manual review load and processing time
              </p>
            </Card>
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-5xl font-bold text-primary mb-4">100%</div>
              <div className="text-lg font-medium mb-2">Audit Logged</div>
              <p className="text-sm text-muted-foreground">
                Complete transparency with FSR + Intelliscore input signals
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="shadow-premium hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Pilot in 6 Weeks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
            >
              Download Model Governance Framework
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Module */}
      <section id="booking" className="py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-12 bg-card/50 backdrop-blur-sm border-border/50 shadow-premium">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-4">
                  Schedule Your Demo
                </h2>
                <p className="text-muted-foreground mb-2">
                  Speak with our Credit Intelligence Team
                </p>
                <p className="text-sm text-muted-foreground italic">
                  NDA available upon request
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Full name" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Company name" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <Input placeholder="Your role" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email</label>
                  <Input 
                    type="email" 
                    placeholder="you@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full shadow-premium hover:shadow-glow transition-all duration-300"
                  onClick={handleScheduleDemo}
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>
                    Includes integration spec, dashboard preview, and model governance overview tailored for your internal teams.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
