import { error } from '@sveltejs/kit';
import currentPlaywall from '../../../../data/current/playwall.js';
import currentSecretPlaywall from '../../../../data/current/playwall-secrets.js';

export async function load({ params }) {
    const { code, version } = params;
    
    let playwall, secretPlaywall;
    if (version) {
        // Dynamically import archived data
        try {
            playwall = await import(`../../../../data/archive/${version}/playwall.js`).then(m => m.default);
            // Try to import secret playwall for this version
            try {
                secretPlaywall = await import(`../../../../data/archive/${version}/playwall-secrets.js`).then(m => m.default);
            } catch {
                secretPlaywall = {}; // No secret playwalls for this version
            }
        } catch {
            // Handle case where version doesn't exist
            throw error(404, `Version '${version}' not found`);
        }
    } else {
        playwall = currentPlaywall;
        secretPlaywall = currentSecretPlaywall;
    }
    
    // Check both regular and secret playwalls
    let document = null;
    if (code) {
        if (code in playwall) {
            document = playwall[code];
        } else if (code in secretPlaywall) {
            document = secretPlaywall[code];
        }
    }
    
    return {
        document,
        code,
        version: version || 'current'
    };
}