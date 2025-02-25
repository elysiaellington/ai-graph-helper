
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a bottleneck in PC performance?</AccordionTrigger>
        <AccordionContent>
          A bottleneck occurs when one component in your system limits the performance of other components. For example, a powerful GPU might not reach its full potential if paired with a slower CPU.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How can I identify a bottleneck in my system?</AccordionTrigger>
        <AccordionContent>
          You can identify bottlenecks by monitoring CPU and GPU usage during gaming. If one component is at 100% while the other is much lower, that's typically a sign of a bottleneck.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can bottlenecks damage my computer?</AccordionTrigger>
        <AccordionContent>
          No, bottlenecks don't cause physical damage to your components. They only affect performance and efficiency of your system.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
