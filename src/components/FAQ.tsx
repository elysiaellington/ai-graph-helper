
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a CPU/GPU bottleneck?</AccordionTrigger>
        <AccordionContent>
          A bottleneck occurs when one component (CPU or GPU) limits the performance of the other. For example, if your CPU is too weak compared to your GPU, it may not be able to process game data fast enough to let the GPU run at its full potential.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How do I know if I have a bottleneck?</AccordionTrigger>
        <AccordionContent>
          Common signs include: low GPU or CPU usage while the other is at high usage, stuttering in games, or lower performance than expected. Our calculator can help identify potential bottlenecks in your system.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>What percentage of bottleneck is acceptable?</AccordionTrigger>
        <AccordionContent>
          A bottleneck under 10% is generally considered acceptable. Between 10-20% might need attention depending on your use case. Anything above 20% usually indicates a significant mismatch that should be addressed.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>How can I fix a bottleneck?</AccordionTrigger>
        <AccordionContent>
          The solution depends on the type of bottleneck. Common fixes include: upgrading the bottlenecking component, adjusting game settings, or ensuring your drivers are up to date. Our calculator provides specific recommendations based on your system.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Does resolution affect bottlenecking?</AccordionTrigger>
        <AccordionContent>
          Yes, higher resolutions typically put more load on the GPU and less on the CPU. This means a CPU bottleneck might be less noticeable at 4K resolution compared to 1080p.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
