<script>
	import { ArrowRightSLineArrows, ArrowDownSLineArrows } from 'svelte-remix';

	import '../app.css';

	import { page } from '$app/stores';

	let { children } = $props();

    let openFolder = $state('home');

    function setOpenFolder(folder) {
        if (folder === openFolder) {
            openFolder = '';
        } else {
            openFolder = folder;
        }
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
        <div class="flex items-center space-x-1">
            {#if openFolder === folder || isPath(folder)}
                <ArrowDownSLineArrows class="size-[1rem]"/>
            {:else}
                <ArrowRightSLineArrows class="size-[1rem]"/>
            {/if}
            <button onclick={!isPath(folder) ? ()=>setOpenFolder(folder) : ()=>{}} class={`pb-0.5`}>{folder}</button>
        </div>
        {#if openFolder === folder || isPath(folder)}
            <div class="relative pl-[1.7rem] space-y-1.5">
                <div class={`absolute top-0 left-[0.4rem] h-full border-l ${borderColor}`}></div>
                {#each links as {link, color}}
                    <div class={`w-min pb-0.5 ${color} ${isPath(link) && `border-b ${!color && borderColor}`}`}>
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
        <a class={`pb-0.5 ${isPath(name) && `border-b`}`} href={`/${name}`}>{name}</a>
    </div>
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
                <div class="flex items-center space-x-1">
                    <ArrowRightSLineArrows class="size-[1rem]"/>
                    <a class={`pb-0.5 ${$page.path === '/' && `border-b`}`} href="/">home</a>
                </div>
                {@render sidebarMenu('anomaly', anomalyLinks, 'text-anomaly-blue', 'border-anomaly-blue')}
                {@render sidebarMenu('reality', realityLinks, 'text-reality-yellow', 'border-reality-yellow')}
                {@render sidebarMenu('competency', competencyLinks, 'text-agency-red', 'border-agency-red')}
                {@render sidebarMenu('extras', extraLinks, 'text-zinc-200', 'border-zinc-200')}
                {@render sidebarItem('playwall')}
            </div>
            <div class="space-y-3">
                {@render sidebarItem('changelog')}
                {@render sidebarItem('credits')}
            </div>
        </aside>
        <main class="w-full">
            {@render children()}
        </main>
    </div>
</div>
