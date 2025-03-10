<script>
    import { ArrowRightSLineArrows, ArrowDownSLineArrows } from 'svelte-remix';
    import { RouterView } from '@dvcol/svelte-simple-router/components';

    import LandingPage from './routes/landing/+page.svelte';

    import AscentPage from './routes/anomaly/ascent.svelte';

    import CoachPage from './routes/competency/coach.svelte';
    import SecretaryPage from './routes/competency/secretary.svelte';

    import ObsessedPage from './routes/reality/obsessed.svelte';

    import ChangelogPage from './routes/changelog/+page.svelte';
    import CreditsPage from './routes/credits/+page.svelte';

    let openFolder = 'home';

    function setOpenFolder(folder) {
        if (folder === openFolder) {
            openFolder = '';
        } else {
            openFolder = folder;
        }
    }

    const routes = [
        {
            path: '/',
            component: LandingPage
        },
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
        {
            path: '/changelog',
            component: ChangelogPage,
        },
        {
            path: '/credits',
            component: CreditsPage,
        },
    ];

    const options = {
        routes,
        strict: true,
    };
</script>

{#snippet sidebarMenu(folder, links, textColor, borderColor)}
    <div class={`flex flex-col ${textColor}`}>
        <div class="flex items-center space-x-1">
            {#if openFolder === folder || window.location.pathname.includes(folder)}
                <ArrowDownSLineArrows class="size-[1rem]"/>
            {:else}
                <ArrowRightSLineArrows class="size-[1rem]"/>
            {/if}
            <button onclick={!window.location.pathname.includes(folder) ? ()=>setOpenFolder(folder) : ()=>{}} class={`pb-0.5`}>{folder}</button>
        </div>
        {#if openFolder === folder || window.location.pathname.includes(folder)}
            <div class="relative pl-[1.7rem] space-y-1.5">
                <div class={`absolute top-0 left-[0.4rem] h-full border-l ${borderColor}`}></div>
                {#each links as link}
                    <div class={`w-min pb-0.5 ${window.location.pathname.includes(link) && `border-b ${borderColor}`}`}>
                        <a href={`/${folder}/${link}`}>{link}</a>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
{/snippet}

{#snippet sidebarItem(name)}
<div class="flex items-center space-x-1">
    <ArrowRightSLineArrows class="size-[1rem]"/>
        <a class={`pb-0.5 ${window.location.pathname.includes(name) && `border-b`}`} href={`/${name}`}>{name}</a>
    </div>
{/snippet}

<div class="w-full h-full">
    <div class="flex w-full h-full pl-[8rem] bg-zinc-800 font-terminal text-zinc-200">
        <aside class={`
            fixed top-0 left-0
            flex flex-col justify-between w-[8rem] h-full pl-2 py-8
            border-r-2 border-r-zinc-200 border-opacity-20
            text-[1rem] leading-none
        `}>
            <div class="flex flex-col space-y-3">
                <div class="flex items-center space-x-1">
                    <ArrowRightSLineArrows class="size-[1rem]"/>
                    <a class={`pb-0.5 ${window.location.pathname === '/' && `border-b`}`} href="/">home</a>
                </div>
                {@render sidebarMenu('anomaly', ['ascent'], 'text-anomaly-blue', 'border-anomaly-blue')}
                {@render sidebarMenu('reality', ['obsessed'], 'text-reality-yellow', 'border-reality-yellow')}
                {@render sidebarMenu('competency', ['coach'], 'text-agency-red', 'border-agency-red')}
                {@render sidebarItem('playwall')}
            </div>
            <div class="space-y-3">
                {@render sidebarItem('changelog')}
                {@render sidebarItem('credits')}
            </div>
        </aside>
        <main class="w-full">
            <RouterView {options} />
        </main>
    </div>
</div>