import anomalies from '../data/current/anomaly';
import realities from '../data/current/reality';
import competencies from '../data/current/competency';

export function load() {
    const anomalySlugs = Object.keys(anomalies);
    const realitySlugs = Object.keys(realities);
    const competencySlugs = Object.keys(competencies);

    return {
        anomalySlugs,
        realitySlugs,
        competencySlugs,
    };
}

export const ssr = false;