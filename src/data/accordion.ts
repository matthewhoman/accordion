export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export const accordionData: AccordionItem[] = [
  {
    id: "1",
    title: "What is 5G technology?",
    content: `5G is the next generation of wireless network technology, designed to expand the scope of mobile technology beyond the capabilities of LTE. It will fuel innovation across every industry and transform every aspect of our lives. Over time, 5G technology will change the way we live, work, and play—for the better.`,
  },
  {
    id: "2",
    title: "Will 4G phones work on a 5G network?",
    content:
      "4G phones are not fully compatible with 5G networks, but they may be able to connect in some cases using 4G LTE fallback.",
  },
  {
    id: "3",
    title: "Will 5G work in 4G areas?",
    content: `4G and 5G Networks have separate coverage footprints. In many places you will have both 4G and 5G coverage with a 5G device. You can check our 5G coverage map.`,
  },
];
