import { cache } from "react";

const getLoadTime = cache(async(url: string) => {
    const startTime = performance.now();
    try {
        await fetch(url);
    } catch (error) {
        return -1;
    }
    const endTime = performance.now();
    const loadTime = endTime - startTime;

    return loadTime;
})

export default getLoadTime;