interface GtagEventParams {
    [key: string]: string | number | boolean | undefined;
}

interface Window {
    gtag?: (...args: [string, string, GtagEventParams?]) => void;
}
