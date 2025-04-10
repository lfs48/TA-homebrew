import anomalies from '../../../data/current/anomaly';

export function load({ params }) {
    return {
        ...params.name && params.name in anomalies ? anomalies[params.name] : null,
    };
}