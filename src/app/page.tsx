import {
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
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <Differentials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
