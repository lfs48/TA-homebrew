import playwall from '../../data/current/playwall.js';

export function load() {
    const codes = Object.keys(playwall);
    return {
        codes,
    };
}