<script>
    import { ArrowRightSLineArrows } from 'svelte-remix';
    import { RouterView } from '@dvcol/svelte-simple-router/components';

    import AscentPage from './routes/anomaly/ascent.svelte';

    import CoachPage from './routes/competency/coach.svelte';
    import SecretaryPage from './routes/competency/analyst/+page.svelte';

    import ObsessedPage from './routes/reality/obsessed.svelte'

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
            path: 'competency/secretary',
            component: SecretaryPage
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

<div class="w-screen h-screen">
    <div class="flex w-full h-full bg-zinc-800 font-terminal text-zinc-200">
        <aside class={`
            flex flex-col w-[9rem] h-full pl-2 py-8 space-y-3
            border-r-2 border-r-zinc-200 border-opacity-20
            text-[1rem] leading-none
        `}>
            <div class="flex items-center space-x-1">
                <ArrowRightSLineArrows class="size-[1rem]"/>
                <span>home</span>
            </div>
            <div class="flex items-center space-x-1 text-anomaly-blue">
                <ArrowRightSLineArrows class="size-[1rem]"/>
                <span>anomaly</span>
            </div>
            <div class="flex items-center space-x-1 text-reality-yellow">
                <ArrowRightSLineArrows class="size-[1rem]"/>
                <span>reality</span>
            </div>
            <div class="flex items-center space-x-1 text-agency-red">
                <ArrowRightSLineArrows class="size-[1rem]"/>
                <span>competency</span>
            </div>
            <div class="flex items-center space-x-1">
                <ArrowRightSLineArrows class="size-[1rem]"/>
                <span>playwall</span>
            </div>
        </aside>
        <main class="w-full">
            <header class="font-bold text-[2rem] p-8 leading-none">Placeholder Name</header>
            <RouterView {options} />
        </main>
    </div>
</div>