import playwall from '../../../data/current/playwall.js';

export function load({ params }) {
	return {
		document: params.code && params.code in playwall ? playwall[params.code] : null,
	};
}