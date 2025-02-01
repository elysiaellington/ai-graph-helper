const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using the PC Bottleneck Calculator, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use License</h2>
        <p className="mb-4">
          We grant you a personal, non-exclusive, non-transferable license to use our bottleneck calculator tool. This license does not include the right to modify, distribute, or create derivative works.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          The calculations and recommendations provided by our tool are based on available benchmark data and algorithms. While we strive for accuracy, we make no warranties about the completeness, reliability, or accuracy of this information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitations</h2>
        <p className="mb-4">
          We shall not be held liable for any damages arising from the use or inability to use our service. This includes but is not limited to direct, indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Modifications</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Continued use of the service after any modifications indicates acceptance of the new terms.
        </p>
      </div>
    </div>
  );
};

export default Terms;