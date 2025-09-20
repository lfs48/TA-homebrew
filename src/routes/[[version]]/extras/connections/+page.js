import currentConnections from '../../../../data/current/connections.js';
export async function load({ params }) {
    const { version } = params;

    let connections;
    if (version) {
        try {
            connections = await import(`../../../../data/archive/${version}/connections.js`).then(m => m.default);
        } catch {
        throw error(404, 'Page not found');
        }
    } else {
        connections = currentConnections;
    }

    return {
        connections
    };
}

import { error } from '@sveltejs/kit';