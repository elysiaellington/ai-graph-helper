import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a CPU/GPU bottleneck?</AccordionTrigger>
        <AccordionContent>
          A bottleneck occurs when one component (either CPU or GPU) limits the performance of the other. This happens when one component can process data faster than the other can provide it, resulting in reduced overall system performance.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How do I fix a bottleneck?</AccordionTrigger>
        <AccordionContent>
          To fix a bottleneck, you'll need to upgrade the component that's causing it. If your CPU is bottlenecking, consider upgrading to a more powerful processor. If it's your GPU, upgrading to a better graphics card might help. Always check compatibility before upgrading.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Is a small bottleneck normal?</AccordionTrigger>
        <AccordionContent>
          Yes, it's normal to have a small bottleneck (5-10%). Perfect balance is rare and often unnecessary. Focus on achieving performance that meets your specific needs rather than pursuing perfect balance.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>How accurate is the bottleneck calculator?</AccordionTrigger>
        <AccordionContent className="text-center sm:text-left">
          The calculator provides an estimate based on benchmark scores. Real-world performance can vary depending on specific applications, games, and usage scenarios. Use it as a general guide rather than an absolute measure.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;