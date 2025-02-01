const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">General Disclaimer</h2>
        <p className="mb-4">
          The PC Bottleneck Calculator is provided "as is" without any warranties, expressed or implied. We make no representations or warranties of any kind concerning the accuracy, reliability, or suitability of the calculations and recommendations provided.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Accuracy of Information</h2>
        <p className="mb-4">
          While we strive to provide accurate and up-to-date information, the calculations are based on available benchmark data and theoretical models. Real-world performance may vary depending on numerous factors including, but not limited to, specific use cases, system configuration, and software optimization.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">No Professional Advice</h2>
        <p className="mb-4">
          The information provided by our tool should not be considered professional advice. Users should conduct their own research and consult with hardware professionals when making purchasing decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">External Links</h2>
        <p className="mb-4">
          Our website may contain links to external sites. We are not responsible for the content or privacy practices of these sites and encourage users to review their respective terms and policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">User Responsibility</h2>
        <p className="mb-4">
          Users are responsible for their own hardware choices and configurations. We shall not be held liable for any damages or losses resulting from decisions made based on our calculator's results.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;