const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-4">
          Welcome to PC Bottleneck Calculator, your trusted companion in building and optimizing the perfect computer system. Our mission is to help PC enthusiasts, gamers, and professionals make informed decisions about their hardware choices by providing accurate bottleneck analysis and component compatibility insights.
        </p>
        
        <p className="mb-4">
          Founded by a team of passionate computer hardware experts and software developers, we understand the importance of balanced system performance. Our sophisticated algorithm takes into account real-world benchmarks and performance metrics to calculate potential bottlenecks between your CPU and GPU, ensuring you get the most out of your investment.
        </p>

        <p className="mb-4">
          What sets us apart is our commitment to accuracy and user experience. We continuously update our database with the latest processors and graphics cards, maintaining comprehensive benchmark data to provide the most reliable results. Our tool is designed to be intuitive and accessible, whether you're a seasoned PC builder or just starting your journey into computer hardware.
        </p>

        <p className="mb-4">
          Beyond just identifying bottlenecks, we strive to educate our users about the importance of component balance in computer systems. Our recommendations are tailored to help you understand why certain combinations work better than others, and how to achieve optimal performance within your budget.
        </p>

        <p className="mb-4">
          We believe in the power of community and knowledge sharing. That's why we maintain an active blog with the latest hardware reviews, optimization tips, and industry insights. Our team is dedicated to helping you make informed decisions about your PC build, ensuring you get the best possible performance for your specific needs.
        </p>
      </div>
    </div>
  );
};

export default About;