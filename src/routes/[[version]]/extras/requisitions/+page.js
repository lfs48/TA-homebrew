import currentRequisitions from '../../../../data/current/requisitions.js';
export async function load({ params }) {
    const { version } = params;

    let requisitions;
    if (version) {
        try {
            requisitions = await import(`../../../../data/archive/${version}/requisitions.js`).then(m => m.default);
        } catch {
        throw error(404, 'Page not found');
        }
    } else {
        requisitions = currentRequisitions;
    }

    return {
        requisitions
    };
}

import { error } from '@sveltejs/kit';