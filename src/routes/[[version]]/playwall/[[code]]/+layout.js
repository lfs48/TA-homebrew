import { error } from '@sveltejs/kit';
import currentPlaywall from '../../../../data/current/playwall.js';

export async function load({ parent }) {
    // Get version from parent layout
    const parentData = await parent();
    const version = parentData.version;
    
    let playwall;
    if (version) {
        // Dynamically import archived data
        try {
            playwall = await import(`../../../../data/archive/${version}/playwall.js`).then(m => m.default);
        } catch {
            // Handle case where version doesn't exist
            throw error(404, `Version '${version}' not found`);
        }
    } else {
        playwall = currentPlaywall;
    }

    const codes = Object.keys(playwall);
    return {
        codes,
        version: version || 'current'
    };
}