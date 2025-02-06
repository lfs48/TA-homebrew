<script>
    import { RouterView } from '@dvcol/svelte-simple-router/components';

    import AscentPage from './routes/anomaly/ascent/+page.svelte';
    import CoachPage from './routes/competency/coach/+page.svelte';
    import ObsessedPage from './routes/reality/obsessed/+page.svelte'

    const routes = [
        {
            path: '/anomaly/ascent',
            component: AscentPage
        },
        {
            path: '/competency/coach',
            component: CoachPage
        },
        {
            path: '/reality/obsessed',
            component: ObsessedPage
        },
    ];

    const options = {
        routes
    };
</script>

<RouterView {options} />