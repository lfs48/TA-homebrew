import { error } from '@sveltejs/kit';
import anomalies from '../../data/current/anomaly.js';
import realities from '../../data/current/reality.js';
import competencies from '../../data/current/competency.js';

export function load({ params }) {
    const { version } = params;
    
    // If version is provided, validate it exists
    if (version && version !== 'current') {
        // You might want to check if the version directory exists
        // This is a simple check - you could make it more robust
        const availableVersions = ['1.0.0', '1.0.1', '1.1.0']; // or read from filesystem
        if (!availableVersions.includes(version)) {
            throw error(404, `Version '${version}' not found`);
        }
    }
    
    const anomalySlugs = Object.keys(anomalies);
    const realitySlugs = Object.keys(realities);
    const competencySlugs = Object.keys(competencies);

    return {
        anomalySlugs,
        realitySlugs,
        competencySlugs,
        version: version || null
    };
}

export const ssr = false;