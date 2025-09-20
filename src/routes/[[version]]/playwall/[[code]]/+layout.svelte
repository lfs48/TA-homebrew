<script>
    import { page } from '$app/stores';
    import { versionIndicator } from '../../../../components/version-indicator.svelte';

	let { children, data } = $props();
    const slug = $derived($page.params.code);
    
    // Function to generate versioned playwall URLs
    function getVersionedPlaywallPath(code) {
        return data.version && data.version !== 'current' 
            ? `/${data.version}/playwall/${code}` 
            : `/playwall/${code}`;
    }
</script>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    {#if data.version && data.version !== 'current'}
        {@render versionIndicator(data.version)}
    {/if}
    
    <h1 class="text-[3rem]">Playwalled Documents</h1>
    <div class="grid grid-cols-10 gap-y-4 pb-8">
        {#each data.codes as code}
            <a href={getVersionedPlaywallPath(code)} 
            class={`w-min border-b text-[1.25rem] font-bold leading-none
            ${code === slug ? 'text-anomaly-blue border-anomaly-blue' : 'text-zinc-200 border-zinc-200'}
            `}>
            {code}</a>
        {/each}
    </div>
    <div>
        {@render children()}
    </div>
</div>