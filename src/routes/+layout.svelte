<script>
	import { ArrowRightSLineArrows, ArrowDownSLineArrows } from 'svelte-remix';

	import '../app.css';

	import { page } from '$app/stores';

	let { children } = $props();

    let openFolders = $state({
        anomaly: false,
        reality: false,
        competency: false,
        extras: false,
    });

    function setOpenFolder(folder) {
        openFolders[folder] = !openFolders[folder];
    }

    const anomalyLinks = [
        {
            link: 'ascent',
        },
    ];

    const realityLinks = [
        {
            link: 'obsessed',
        },
    ];

    const competencyLinks = [
        {
            link: 'coach',
        },
    ];

    const extraLinks = [
        {
            link: 'connections',
            color: 'text-reality-yellow border-reality-yellow',
        },
        {
            link: 'requisitions',
            color: 'text-agency-red border-agency-red',
        },
    ];

	function isPath(path) {
		return $page.url.pathname.includes(path);
	}

</script>

{#snippet sidebarMenu(folder, links, textColor, borderColor)}
    <div class={`flex flex-col ${textColor}`}>
        <button 
            class="flex items-center w-min space-x-1 cursor-pointer"
            onclick={!isPath(folder) || !openFolders[folder] ? ()=>setOpenFolder(folder) : ()=>{}}
        >
            {#if openFolders[folder]}
                <ArrowDownSLineArrows class="size-[1rem]"/>
            {:else}
                <ArrowRightSLineArrows class="size-[1rem]"/>
            {/if}
            <div class={`pb-0.5`}>{folder}</div>
    </button>
        {#if openFolders[folder]}
            <div class="relative pl-[1.7rem] space-y-1.5">
                <div class={`absolute top-0 left-[0.4rem] h-full border-l ${borderColor}`}></div>
                {#each links as {link, color}}
                    <div class={`w-min pb-0.5 ${color} border-b ${isPath(link) ? (!color && borderColor) : 'border-zinc-800'}`}>
                        <a href={`/${folder}/${link}`}>{link}</a>
                    </div>
                {/each}
            </div>
        {/if}
        </div>
{/snippet}

{#snippet sidebarItem(name)}
    <a class="flex items-center space-x-1" href={`/${name}`}>
        <ArrowRightSLineArrows class="size-[1rem]"/>
        <div class={`pb-0.5 border-b ${isPath(name) ? 'border-zinc-200' : `border-zinc-800`}`}>{name}</div>
    </a>
{/snippet}

<div class="w-full h-full">
    <div class="flex w-full h-full pl-[9.5rem] bg-zinc-800 font-terminal text-zinc-200">
        <aside class={`
            fixed top-0 left-0
            flex flex-col justify-between w-[9.5rem] h-full pl-2 py-8
            border-r-2 border-r-zinc-200 border-opacity-20
            text-[1rem] leading-none
        `}>
            <div class="flex flex-col space-y-3">
                <div class="flex items-center space-x-1 text-pentachoron">
                    <ArrowRightSLineArrows class="size-[1rem]"/>
                    <a class={`pb-0.5 border-b ${$page.url.pathname === '/' ? 'border-pentachoron' : 'border-zinc-800'}`} href="/">home</a>
                </div>
                {@render sidebarMenu('anomaly', anomalyLinks, 'text-anomaly-blue', 'border-anomaly-blue')}
                {@render sidebarMenu('reality', realityLinks, 'text-reality-yellow', 'border-reality-yellow')}
                {@render sidebarMenu('competency', competencyLinks, 'text-agency-red', 'border-agency-red')}
                {@render sidebarMenu('extras', extraLinks, 'text-zinc-200', 'border-zinc-200')}
                {@render sidebarItem('playwall')}
            </div>
            <div class="space-y-3">
                {@render sidebarItem('credits')}
                <div class="pl-2 text-pentachoron">
                    <p>1.0.0</p>
                </div>
            </div>
        </aside>
        <main class="w-full h-full">
            {@render children()}
        </main>
    </div>
</div>
