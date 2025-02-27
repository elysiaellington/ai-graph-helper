
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="p-8 shadow-lg border-border/30 bg-background/70 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground italic mb-6 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">1. Information We Collect</h2>
              <p className="mb-4 leading-relaxed">
                We collect information that you voluntarily provide when using our PC Bottleneck Calculator tool, including but not limited to your selected CPU and GPU components. We may also collect standard web analytics data to improve our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">2. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">
                The information we collect is used to provide and improve our bottleneck calculation service, analyze usage patterns, and enhance user experience. We do not sell or share your personal information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">3. Data Security</h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">4. Cookies</h2>
              <p className="mb-4 leading-relaxed">
                We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect some functionality of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground/90 border-b border-border/50 pb-2">5. Changes to This Policy</h2>
              <p className="mb-4 leading-relaxed">
                We reserve the right to update this privacy policy at any time. We will notify users of any material changes by posting the new policy on this page.
              </p>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
