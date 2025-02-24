
import BottleneckCalculator from "@/components/BottleneckCalculator";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <section className="mb-12 text-left">
        <h1 className="text-4xl font-bold mb-6">PC Bottleneck Calculator: Optimize Your Gaming Performance</h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="mb-4">
            Welcome to our comprehensive PC Bottleneck Calculator, the ultimate tool for gamers and PC enthusiasts looking to optimize their system performance. Understanding CPU and GPU bottlenecks is crucial for building a balanced gaming PC and ensuring maximum performance in your favorite games.
          </p>

          <h2 className="text-2xl font-semibold my-4">What is a PC Bottleneck?</h2>
          <p className="mb-4">
            A PC bottleneck occurs when one component in your system (typically the CPU or GPU) limits the performance potential of other components. For example, a powerful graphics card paired with an older processor might not reach its full potential because the CPU can't process game data fast enough. Our bottleneck calculator helps identify these performance limitations and provides actionable recommendations for system optimization.
          </p>

          <h2 className="text-2xl font-semibold my-4">Why Use a Bottleneck Calculator?</h2>
          <p className="mb-4">
            Whether you're building a new gaming PC or upgrading your existing system, our bottleneck calculator offers several key benefits:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Identify performance bottlenecks in your current setup</li>
            <li>Make informed decisions about hardware upgrades</li>
            <li>Optimize your budget by avoiding unnecessary component mismatches</li>
            <li>Achieve better gaming performance and system efficiency</li>
            <li>Plan future upgrades more effectively</li>
          </ul>

          <h2 className="text-2xl font-semibold my-4">How to Use Our PC Bottleneck Calculator</h2>
          <p className="mb-4">
            Using our calculator is simple and straightforward:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Select your CPU from the dropdown menu</li>
            <li>Choose your GPU model</li>
            <li>Input your RAM specifications</li>
            <li>Review the detailed analysis and recommendations</li>
          </ol>

          <h2 className="text-2xl font-semibold my-4">Understanding Bottleneck Analysis</h2>
          <p className="mb-4">
            Our calculator provides a detailed analysis of your system's performance balance, considering factors such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>CPU and GPU performance metrics</li>
            <li>Gaming resolution and settings</li>
            <li>RAM speed and capacity impact</li>
            <li>Real-world gaming scenarios</li>
            <li>System optimization recommendations</li>
          </ul>

          <h2 className="text-2xl font-semibold my-4">Common Bottleneck Scenarios</h2>
          <p className="mb-4">
            Different types of bottlenecks can affect your system performance:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>CPU Bottleneck: When your processor limits GPU performance</li>
            <li>GPU Bottleneck: When your graphics card can't keep up with CPU processing power</li>
            <li>RAM Bottleneck: When insufficient memory affects system responsiveness</li>
            <li>Resolution-dependent bottlenecks</li>
            <li>Game-specific performance limitations</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Calculate Your System's Bottleneck</h2>
        <BottleneckCalculator />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      <section className="mb-12 text-left">
        <h2 className="text-2xl font-semibold mb-4">Making the Most of Your PC Hardware</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            Understanding and addressing bottlenecks is essential for maximizing your PC's gaming performance. Our calculator helps you make informed decisions about hardware upgrades and system optimization. Remember that some degree of bottlenecking is normal, and the goal is to minimize its impact on your specific use case.
          </p>
          
          <p className="mb-4">
            Regular system analysis using our PC bottleneck calculator can help you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maintain optimal gaming performance</li>
            <li>Plan cost-effective upgrades</li>
            <li>Understand your system's limitations</li>
            <li>Make informed hardware purchasing decisions</li>
            <li>Optimize your gaming experience</li>
          </ul>

          <p>
            Start using our free PC bottleneck calculator today to optimize your gaming setup and ensure you're getting the best possible performance from your hardware investment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
