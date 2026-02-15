import {
    BackgroundGlow,
    Header,
    Hero,
    WhatWeDo,
    HowWeWork,
    Differentials,
    CTA,
    Footer,
    SectionDivider,
} from '@/components';

export default function Home() {
    return (
        <div className="relative" style={{ overflowX: 'hidden' }}>
            <BackgroundGlow />
            <Header />
            <main className="relative">
                <Hero />
                <SectionDivider />
                <WhatWeDo />
                <SectionDivider />
                <HowWeWork />
                <SectionDivider />
                <Differentials />
                <SectionDivider />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
