import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Plug, 
  BarChart3, 
  Layers, 
  CheckCircle2,
  Download,
  FileCheck,
  Lock,
  ArrowRight,
  Info
} from "lucide-react";
import { z } from "zod";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Form validation schema
const pilotFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  title: z.string().trim().min(1, "Title is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  smbCount: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to continue")
});

type PilotFormData = z.infer<typeof pilotFormSchema>;

function Pilot() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PilotFormData>({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    smbCount: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      pilotFormSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "We'll contact you within 24 hours to schedule your pilot review.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof PilotFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Designed for Institutional Finance & Model-Risk Governance
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Launch a 90-Day Pilot of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  LUMIQ AI Business Credit Journey™
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Embed our API inside your Chase Business app, run live conversion lift tests, and generate measurable impact—within your risk framework.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Pilot Review
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Pilot Brief
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-card/80 backdrop-blur border border-border rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-primary to-transparent rounded" />
                    <div className="h-4 bg-gradient-to-r from-secondary to-transparent rounded w-3/4" />
                    <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-16 bg-card rounded border border-border" />
                      <div className="h-16 bg-card rounded border border-border" />
                      <div className="h-16 bg-card rounded border border-border" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Snapshots */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Pilot Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable impact from day one, with full alignment to your risk and governance requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="text-center h-full border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="pt-12 pb-10 px-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-3">+15-25%</div>
                  <p className="text-lg font-medium mb-2">App-to-Booked Lift</p>
                  <p className="text-sm text-muted-foreground">Owned channel conversion increase</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="text-center h-full border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="pt-12 pb-10 px-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-3">-20%</div>
                  <p className="text-lg font-medium mb-2">CAC Reduction</p>
                  <p className="text-sm text-muted-foreground">vs. paid media acquisition</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="text-center h-full border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="pt-12 pb-10 px-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-3">100%</div>
                  <p className="text-lg font-medium mb-2">Audit Trail</p>
                  <p className="text-sm text-muted-foreground">Explainable models = Risk alignment</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your 90-Day Pilot Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured, measurable approach to validating Business Credit Journey inside your stack.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="relative h-full border-primary/30 bg-gradient-to-br from-primary/5 to-background">
                <div className="absolute -top-4 left-6">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    1
                  </div>
                </div>
                <CardContent className="pt-10 pb-8 px-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Plug className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Week 0–2</h3>
                  </div>
                  <p className="text-lg font-semibold mb-3">Onboarding & Sandbox Integration</p>
                  <p className="text-sm text-muted-foreground">
                    Connect credit signals (FICO, Intelliscore, FSR) in a secure sandbox environment. 
                    Validate data flows and configure risk parameters to match your underwriting standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="relative h-full border-primary/30 bg-gradient-to-br from-primary/5 to-background">
                <div className="absolute -top-4 left-6">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    2
                  </div>
                </div>
                <CardContent className="pt-10 pb-8 px-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Week 3–8</h3>
                  </div>
                  <p className="text-lg font-semibold mb-3">Live A/B Test</p>
                  <p className="text-sm text-muted-foreground">
                    Deploy to 50% of target cohort vs. control group. Track conversion lift, approval rate delta, 
                    loss rate, and time-to-decision across your SMB portfolio.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="relative h-full border-primary/30 bg-gradient-to-br from-primary/5 to-background">
                <div className="absolute -top-4 left-6">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    3
                  </div>
                </div>
                <CardContent className="pt-10 pb-8 px-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Week 9–12</h3>
                  </div>
                  <p className="text-lg font-semibold mb-3">Scale & Roll-out Decision</p>
                  <p className="text-sm text-muted-foreground">
                    Review results with your team. If KPIs are met, scale to broader SMB segments. 
                    Full documentation and model governance artifacts provided.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to embed Business Credit Journey into your digital banking experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <TooltipProvider>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full hover:shadow-lg transition-all cursor-help border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">1</span>
                          </div>
                          <div>
                            <h3 className="font-bold mb-2">Connect Signals</h3>
                            <p className="text-sm text-muted-foreground">
                              Securely connect business + owner credit signals (FICO, Intelliscore, FSR)
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">API integration with Experian and internal credit bureaus. All data encrypted in transit and at rest.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full hover:shadow-lg transition-all cursor-help border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">2</span>
                          </div>
                          <div>
                            <h3 className="font-bold mb-2">Run Model</h3>
                            <p className="text-sm text-muted-foreground">
                              Run our model in your stack—aligned to your risk appetite
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Pre-qualification engine uses your existing underwriting rules and score thresholds. No black-box AI.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full hover:shadow-lg transition-all cursor-help border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">3</span>
                          </div>
                          <div>
                            <h3 className="font-bold mb-2">Route Offers</h3>
                            <p className="text-sm text-muted-foreground">
                              Route eligible SMBs to right products (Ink Business cards first)
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">In-app nudges and pre-filled applications. One-tap conversion for pre-qualified customers.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full hover:shadow-lg transition-all cursor-help border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">4</span>
                          </div>
                          <div>
                            <h3 className="font-bold mb-2">Measure & Scale</h3>
                            <p className="text-sm text-muted-foreground">
                              Measure lift, track metrics, and scale based on results
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Real-time dashboard with conversion funnels, approval rates, and portfolio health metrics.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Governance Callout */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-background via-primary/5 to-secondary/5 border-primary/30">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Built with Model-Risk Governance in Mind</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Built with model-risk governance, audit-ready logs, and SBC compliance in mind.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">ECOA/FCRA/GLBA Compliant</p>
                      <p className="text-sm text-muted-foreground">Full regulatory compliance built into every decision path</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">100% Data Lineage & Decision Logging</p>
                      <p className="text-sm text-muted-foreground">Complete audit trail for model risk and compliance teams</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Parallel A/B Pilot—Non-Disruptive</p>
                      <p className="text-sm text-muted-foreground">Test safely alongside existing systems with zero downtime</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Repeat */}
      <section className="py-16 px-6 bg-muted/30 sticky top-20 z-10 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-primary font-medium mb-3">Limited slots available for Q1 integration</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Pilot Review
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 w-5 h-5" />
                Download Pilot Brief (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section id="pilot-form" className="py-24 px-6 scroll-mt-32">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Apply for the 90-Day Pilot Program</h2>
              <p className="text-muted-foreground">
                Join leading financial institutions in transforming SMB credit experiences
              </p>
            </div>

            {!isSubmitted ? (
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Smith"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          placeholder="VP of Digital Banking"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Financial Institution"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@bank.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="smbCount">How many SMBs do you serve?</Label>
                      <Select 
                        value={formData.smbCount} 
                        onValueChange={(value) => handleInputChange('smbCount', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-100k">Less than 100K</SelectItem>
                          <SelectItem value="100k-500k">100K - 500K</SelectItem>
                          <SelectItem value="500k-1m">500K - 1M</SelectItem>
                          <SelectItem value="1m-5m">1M - 5M</SelectItem>
                          <SelectItem value="more-than-5m">More than 5M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked)}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                        I understand this is a pilot program for evaluation purposes and agree to provide feedback on the integration experience.
                      </Label>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <strong>Privacy & Security:</strong> Data will be handled per SOC 2 / ISO 27001 controls. 
                          We never share your information with third parties.
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Pilot Application"}
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="p-12 text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Application Received!</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Thank you for your interest. Our team will review your application and contact you within 24 hours to schedule your pilot review session.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm font-medium">Next Steps:</p>
                    <div className="grid gap-3 text-left max-w-md mx-auto">
                      <div className="flex items-start gap-3 text-sm">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">1</span>
                        </div>
                        <p className="text-muted-foreground">Pilot kickoff call within 3 business days</p>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">2</span>
                        </div>
                        <p className="text-muted-foreground">Technical integration review & sandbox setup</p>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">3</span>
                        </div>
                        <p className="text-muted-foreground">90-day pilot launch with dedicated support</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 px-6 bg-muted/50 border-t border-border">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-sm text-muted-foreground mb-8">Trusted by forward-thinking financial institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8" />
                <span className="font-semibold">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-8 w-8" />
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-8 w-8" />
                <span className="font-semibold">ECOA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-8 w-8" />
                <span className="font-semibold">Model Risk Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Pilot;
