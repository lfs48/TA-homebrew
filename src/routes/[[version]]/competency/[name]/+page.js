// src/routes/competency/[name]/[[version]]/+page.js
import { error } from '@sveltejs/kit';
import currentCompetencies from '../../../../data/current/competency.js';

export async function load({ params }) {
    const { name, version } = params;
    
    let competencies;
    if (version) {
        // Dynamically import archived data
        try {
            competencies = await import(`../../../../data/archive/${version}/competency.js`).then(m => m.default);
        } catch {
            // Handle case where version doesn't exist
            throw error(404, `Version '${version}' not found`);
        }
    } else {
        competencies = currentCompetencies;
    }
    
    return {
        ...name && name in competencies ? competencies[name] : null,
        version: version || 'current'
    };
}