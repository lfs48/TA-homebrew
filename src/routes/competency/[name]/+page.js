import competency from '../../../data/current/competency';

export function load({ params }) {
    return {
        ...params.name && params.name in competency ? competency[params.name] : null,
    };
}