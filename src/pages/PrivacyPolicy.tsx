const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you voluntarily provide when using our PC Bottleneck Calculator tool, including but not limited to your selected CPU and GPU components. We may also collect standard web analytics data to improve our service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used to provide and improve our bottleneck calculation service, analyze usage patterns, and enhance user experience. We do not sell or share your personal information with third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect some functionality of our service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to This Policy</h2>
        <p className="mb-4">
          We reserve the right to update this privacy policy at any time. We will notify users of any material changes by posting the new policy on this page.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;