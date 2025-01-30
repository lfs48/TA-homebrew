<script>
    import { RouterView } from '@dvcol/svelte-simple-router/components';

    import CoachPage from './routes/coach/+page.svelte';
    import ObsessedPage from './routes/obsessed/+page.svelte'

    const routes = [
        {
            path: '/coach',
            component: CoachPage
        },
        {
            path: '/obsessed',
            component: ObsessedPage
        }
    ];

    const options = {
        routes
    };
</script>

<RouterView {options} />