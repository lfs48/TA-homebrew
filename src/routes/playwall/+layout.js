import playwall from '../../data/playwall.js';

export function load() {
    const codes = Object.keys(playwall);
    return {
        codes,
    };
}