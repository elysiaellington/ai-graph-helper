import BottleneckCalculator from "@/components/BottleneckCalculator";
import FAQ from "@/components/FAQ";

const Index = () => {
  return <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Calculate Your System's Bottleneck</h2>
      
      {/* Calculator Section */}
      <section className="mb-16 bg-card rounded-lg shadow-lg p-6">
        <BottleneckCalculator />
      </section>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-8">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold">What is a PC Bottleneck?</h2>
            <p>
              A PC bottleneck occurs when one component in your system (typically the CPU or GPU) limits the performance potential of other components. For example, a powerful graphics card paired with an older processor might not reach its full potential because the CPU can't process game data fast enough. Our bottleneck calculator helps identify these performance limitations and provides actionable recommendations for system optimization.
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold">Why Use a Bottleneck Calculator?</h2>
            <p>Whether you're building a new gaming PC or upgrading your existing system, our bottleneck calculator offers several key benefits:</p>
            <ul className="list-disc pl-6">
              <li>Identify performance bottlenecks in your current setup</li>
              <li>Make informed decisions about hardware upgrades</li>
              <li>Optimize your budget by avoiding unnecessary component mismatches</li>
              <li>Achieve better gaming performance and system efficiency</li>
              <li>Plan future upgrades more effectively</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold">Understanding Bottleneck Analysis</h2>
            <p>Our calculator provides a detailed analysis of your system's performance balance, considering factors such as:</p>
            <ul className="list-disc pl-6">
              <li>CPU and GPU performance metrics</li>
              <li>Gaming resolution and settings</li>
              <li>RAM speed and capacity impact</li>
              <li>Real-world gaming scenarios</li>
              <li>System optimization recommendations</li>
            </ul>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold">Common Bottleneck Scenarios</h2>
            <p>Different types of bottlenecks can affect your system performance:</p>
            <ul className="list-disc pl-6">
              <li>CPU Bottleneck: When your processor limits GPU performance</li>
              <li>GPU Bottleneck: When your graphics card can't keep up with CPU processing power</li>
              <li>RAM Bottleneck: When insufficient memory affects system responsiveness</li>
              <li>Resolution-dependent bottlenecks</li>
              <li>Game-specific performance limitations</li>
            </ul>
          </section>
        </div>

        <div className="lg:col-span-1">
          <aside className="bg-card rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-2xl font-semibold mb-4">Quick Tips</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Regular system analysis helps maintain optimal performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Consider both CPU and GPU benchmarks when upgrading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Monitor your system's performance in different games</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Keep your drivers and software up to date</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Balance your budget across all components</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mb-16 bg-card rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      {/* Final CTA Section */}
      <section className="text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Optimize Your Gaming Setup Today</h2>
        <p className="text-lg mb-4">
          Use our free PC bottleneck calculator to ensure you're getting the best possible performance from your hardware investment.
        </p>
        <p className="text-muted-foreground">
          Remember that some degree of bottlenecking is normal, and the goal is to minimize its impact on your specific use case.
        </p>
      </section>
    </div>;
};
export default Index;
