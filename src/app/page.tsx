import { Accordion } from "@/components/Accordion/Accordion";
import { AccordionItem } from "@/components/Accordion/AccordionItem/AccordionItem";
import { accordionData } from "@/data/accordion";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans px-4 bg-white h-full">
      <main className="flex w-full max-w-3xl flex-col items-center sm:items-start py-20 space-y-12 h-full">
        <h1 className="text-5xl font-extrabold text-black sm:text-6xl">
          Accordion Example
        </h1>

        <Accordion>
          {accordionData.map(({ id, title, content }) => (
            <AccordionItem key={id} title={title} headingLevel="h2">
              {content}
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
