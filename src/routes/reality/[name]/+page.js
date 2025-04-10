import realities from '../../../data/current/reality';

export function load({ params }) {
    return {
        ...params.name && params.name in realities ? realities[params.name] : null,
    };
}