
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
        <AccordionTrigger>What's a CPU bottleneck?</AccordionTrigger>
        <AccordionContent>
          When your processor lags behind, slowing tasks like gaming or editing. This happens when your CPU can't process data fast enough to keep up with your other components, particularly your GPU.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>What's a GPU bottleneck?</AccordionTrigger>
        <AccordionContent>
          When your graphics card can't keep up, hurting visuals and frame rates. This typically occurs when your GPU isn't powerful enough to handle the graphical demands of your games or applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>How accurate is this tool?</AccordionTrigger>
        <AccordionContent>
          It's highly reliable for estimates, but real performance depends on your setup and apps. Our calculator uses benchmark data and real-world testing to provide accurate recommendations, but specific software requirements may affect actual performance.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>When should I check for bottlenecks?</AccordionTrigger>
        <AccordionContent>
          Before upgrades or if you spot lag, stuttering, or slowdowns. It's also good to check when planning to buy new components or if you notice unexpected performance issues in games or applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Do bottlenecks affect work tasks?</AccordionTrigger>
        <AccordionContent>
          Yes—video editing, 3D modeling, and multitasking can all suffer. Professional applications often require balanced system performance, and bottlenecks can significantly impact productivity.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>My hardware isn't listed—what now?</AccordionTrigger>
        <AccordionContent>
          Manually enter your specs for a custom report. Our database is regularly updated, but if you can't find your exact hardware, you can input similar components to get a close approximation of your system's performance balance.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
