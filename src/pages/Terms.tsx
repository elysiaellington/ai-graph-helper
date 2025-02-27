
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="p-8 shadow-lg border-border/30 bg-background/70 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Terms and Conditions</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground italic mb-6 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">1. Acceptance of Terms</h2>
              <p className="mb-4 leading-relaxed">
                By accessing and using the PC Bottleneck Calculator, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">2. Use License</h2>
              <p className="mb-4 leading-relaxed">
                We grant you a personal, non-exclusive, non-transferable license to use our bottleneck calculator tool. This license does not include the right to modify, distribute, or create derivative works.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">3. Disclaimer</h2>
              <p className="mb-4 leading-relaxed">
                The calculations and recommendations provided by our tool are based on available benchmark data and algorithms. While we strive for accuracy, we make no warranties about the completeness, reliability, or accuracy of this information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">4. Limitations</h2>
              <p className="mb-4 leading-relaxed">
                We shall not be held liable for any damages arising from the use or inability to use our service. This includes but is not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">5. Modifications</h2>
              <p className="mb-4 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the service after any modifications indicates acceptance of the new terms.
              </p>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Terms;
