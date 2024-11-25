import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

function FAQSection() {
  return (
    <section className="px-4 py-24 bg-[url('/img/team-bg.png)] bg-cover bg-center">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight font-unbounded text-[#1F2937]">
              Frequently asked questions
            </h2>
            <p className="text-2xl text-muted-foreground py-8">
              Here are some of the most frequently asked questions, Can&apos;t
              find what you need?
            </p>
            <Button>
              Send A Message <ArrowUpRight />
            </Button>
          </div>
          <Accordion type="single" collapsible className="w-full lg:col-span-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold font-unbounded text-[#1F2937]">
                What services does Jitvhar offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We specialize in software development, web design, and
                development solutions tailored to meet the unique needs of your
                business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold font-unbounded text-[#1F2937]">
                How long does it take to complete a project?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Project timelines vary depending on complexity and scope.
                We&apos;ll provide a detailed timeline during our initial
                consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold font-unbounded text-[#1F2937]">
                Do you offer customized solutions?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we create custom solutions tailored to your specific
                business requirements and objectives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold font-unbounded text-[#1F2937]">
                What industries do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with a diverse range of industries including technology,
                healthcare, finance, retail, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold font-unbounded text-[#1F2937]">
                How can I get started with Jitvhar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Simply reach out to us via our contact page or email. We&apos;ll
                discuss your needs and guide you through the next steps to bring
                your ideas to life!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
