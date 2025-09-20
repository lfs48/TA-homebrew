import { error } from '@sveltejs/kit';
import currentPlaywall from '../../../../data/current/playwall.js';

export async function load({ params }) {
    const { code, version } = params;
    
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
    
    return {
        document: code && code in playwall ? playwall[code] : null,
        code,
        version: version || 'current'
    };
}