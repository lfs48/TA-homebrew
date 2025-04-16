import changes from '../../data/current/changelog';

export function load() {
    const reversed = changes.reverse();
    return {
       changes: reversed,
    };
}