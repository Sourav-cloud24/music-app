import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
const content = [
  {
    title: "Live Jam Sessions",
    description:
      "Jam together in real time with musicians from anywhere in the world. Play, record, and collaborate live with zero creative friction. Feel the energy of a studio session, even when you're miles apart.",
  },
  {
    title: "Real-Time Audio Sync",
    description:
      "Hear every beat, note, and rhythm as it happens. Our real-time audio sync ensures perfect timing during practice and collaboration, so your music always stays tight and in sync.",
  },
  {
    title: "Track Version History",
    description:
      "Never lose a great idea again. Automatically save and revisit previous versions of your tracks, mixes, and arrangements. Experiment freely, knowing you can always roll back to the perfect sound.",
  },
  {
    title: "Learn & Create Together",
    description:
      "Learn music collaboratively with guided lessons, shared practice rooms, and instant feedback. Whether you're a beginner or a pro, grow faster by creating music together.",
  },
];

  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs