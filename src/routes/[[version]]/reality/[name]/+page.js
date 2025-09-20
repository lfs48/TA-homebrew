// src/routes/reality/[name]/[[version]]/+page.js
import { error } from '@sveltejs/kit';
import currentRealities from '../../../../data/current/reality.js';

export async function load({ params }) {
    const { name, version } = params;
    
    let realities;
    if (version) {
        // Dynamically import archived data
        try {
            realities = await import(`../../../../data/archive/${version}/reality.js`).then(m => m.default);
        } catch {
            // Handle case where version doesn't exist
            throw error(404, `Version '${version}' not found`);
        }
    } else {
        realities = currentRealities;
    }
    
    return {
        ...name && name in realities ? realities[name] : null,
        version: version || 'current'
    };
}