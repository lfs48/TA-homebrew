// src/routes/anomaly/[name]/[[version]]/+page.js
import { error } from '@sveltejs/kit';
import currentAnomalies from '../../../../data/current/anomaly.js';

export async function load({ params }) {
    const { name, version } = params;
    
    let anomalies;
    if (version) {
        // Dynamically import archived data
        try {
            anomalies = await import(`../../../../data/archive/${version}/anomaly.js`).then(m => m.default);
        } catch {
            // Handle case where version doesn't exist
            throw error(404, `Version '${version}' not found`);
        }
    } else {
        anomalies = currentAnomalies;
    }
    
    return {
        ...name && name in anomalies ? anomalies[name] : null,
        version: version || 'current'
    };
}