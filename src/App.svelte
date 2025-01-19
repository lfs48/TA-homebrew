<script>
    import { RouterView } from '@dvcol/svelte-simple-router/components';

    import CoachPage from './routes/coach/+page.svelte';

    const routes = [
        {
            path: '/coach',
            component: CoachPage
        }
    ];

    const options = {
        routes
    };
</script>

<RouterView {options} />