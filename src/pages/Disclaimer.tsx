
import { Card } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="p-8 shadow-lg border-border/30 bg-background/70 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Disclaimer</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground italic mb-6 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">General Disclaimer</h2>
              <p className="mb-4 leading-relaxed">
                The PC Bottleneck Calculator is provided "as is" without any warranties, expressed or implied. We make no representations or warranties of any kind concerning the accuracy, reliability, or suitability of the calculations and recommendations provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">Accuracy of Information</h2>
              <p className="mb-4 leading-relaxed">
                While we strive to provide accurate and up-to-date information, the calculations are based on available benchmark data and theoretical models. Real-world performance may vary depending on numerous factors including, but not limited to, specific use cases, system configuration, and software optimization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">No Professional Advice</h2>
              <p className="mb-4 leading-relaxed">
                The information provided by our tool should not be considered professional advice. Users should conduct their own research and consult with hardware professionals when making purchasing decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">External Links</h2>
              <p className="mb-4 leading-relaxed">
                Our website may contain links to external sites. We are not responsible for the content or privacy practices of these sites and encourage users to review their respective terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">User Responsibility</h2>
              <p className="mb-4 leading-relaxed">
                Users are responsible for their own hardware choices and configurations. We shall not be held liable for any damages or losses resulting from decisions made based on our calculator's results.
              </p>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Disclaimer;
