
import BottleneckCalculator from "@/components/BottleneckCalculator";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator-section');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/80 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">
            Solve PC Performance Issues with Our Bottleneck Calculator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Is your PC lagging during games or crawling through tasks? A bottleneck could be the culprit. Our PC Bottleneck Calculator is your free, easy solution to pinpoint and fix performance issues.
          </p>
          <Button size="lg" onClick={scrollToCalculator} className="group">
            Try Calculator Now
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <BottleneckCalculator />
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Quick Guide Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">What Are PC Bottlenecks? Your Quick Guide</h2>
          <p className="text-lg text-muted-foreground">
            A PC bottleneck occurs when one component, like your CPU or GPU, can't match the pace of the others, dragging down your system's performance. Imagine a highway with a single slow lane—everything backs up. For instance, a high-end graphics card paired with an old processor might bottleneck your gaming frame rates. Our calculator reveals these mismatches, helping you achieve a balanced, high-performing setup.
          </p>
        </section>

        {/* How It Works Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">How Our PC Bottleneck Calculator Works</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our tool simplifies system diagnostics:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
            <li>Enter your CPU, GPU, RAM, and storage details (or pick from our database).</li>
            <li>Our algorithm compares your specs to industry benchmarks.</li>
            <li>Get a clear, instant score showing potential bottlenecks—plus tailored upgrade tips.</li>
          </ul>
          <p className="text-lg text-muted-foreground mt-4">
            It's a reliable starting point for optimization, though real-world results may vary based on usage. No tech expertise needed—just actionable insights in minutes.
          </p>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Benefits of Using Our PC Bottleneck Calculator</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-3">Save Money</h3>
              <p className="text-muted-foreground">Avoid pricey, unneeded upgrades by targeting the right fixes.</p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-3">Boost Performance</h3>
              <p className="text-muted-foreground">Unlock smoother gaming, faster rendering, and seamless multitasking.</p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-3">Make Smart Choices</h3>
              <p className="text-muted-foreground">Get data-driven advice for upgrades that actually matter.</p>
            </div>
          </div>
        </section>

        {/* Myths Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Busting PC Bottleneck Myths</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">Myth 1: Bottlenecks ruin your PC</h3>
              <p className="text-muted-foreground">Truth: They're normal and manageable—our tool shows you how to minimize their impact.</p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">Myth 2: One upgrade solves all</h3>
              <p className="text-muted-foreground">Truth: Balance matters. A single fix might not cut it without a full system view.</p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">Myth 3: Calculators are perfect</h3>
              <p className="text-muted-foreground">Truth: They're great guides, but software and usage patterns can tweak real outcomes.</p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">PC Bottleneck FAQs: Your Questions Answered</h2>
          <FAQ />
        </section>

        {/* Final CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6">Take Control of Your PC's Performance</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Why settle for subpar performance? With clear results and expert tips, you're one step away from a better PC.
          </p>
          <Button size="lg" onClick={scrollToCalculator}>
            Use Calculator Now
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Index;
