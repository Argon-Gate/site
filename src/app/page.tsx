import {
  BackgroundGlow,
  Header,
  Hero,
  WhatWeDo,
  HowWeWork,
  Differentials,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <BackgroundGlow />
      <Header />
      <main style={{ position: "relative" }}>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <Differentials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
