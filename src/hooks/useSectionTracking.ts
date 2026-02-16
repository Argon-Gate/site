'use client';

import { useEffect, useRef } from 'react';
import { AnalyticsEvents } from '@/lib/analytics';

export function useSectionTracking<T extends HTMLElement = HTMLElement>(sectionName: string) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    AnalyticsEvents.sectionView(sectionName);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [sectionName]);

    return ref;
}
