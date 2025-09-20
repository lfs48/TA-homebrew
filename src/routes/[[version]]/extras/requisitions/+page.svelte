<script>
    import { ArrowRightSLineArrows } from 'svelte-remix';
    
    let { data } = $props();
    const { requisitions } = data;
    import { versionIndicator } from '../../../../components/version-indicator.svelte';
</script>

<style>
    @reference "../../../../app.css";
    h1, h2, h3 {
        @apply
        text-agency-red
    ;}
    h2 {
        @apply
        mb-1 
        pb-1
        border-agency-red
    ;}
    li {
        @apply
        marker:text-agency-red
    ;}
</style>

{#snippet listItem(text)}
    <div class="flex items-center space-x-2">
        <ArrowRightSLineArrows class="text-agency-red size-[1rem]"/>
        <div class="leading-none">{@html text}</div>
    </div>
{/snippet}

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    {#if data.version && data.version !== 'current'}
        {@render versionIndicator(data.version)}
    {/if}
    <div class="space-y-2">
        <h1 class="text-[3rem]">Requisitions</h1>
        <p>
            At your GM's discretion, the following <red>Requisitions</red> may be made
            available for purchase at your branch.
        </p>
    </div>
    {#each Object.entries(requisitions) as [key, requisition]}
        <div class="space-y-2">
            <h2>{requisition.title}</h2>
            <div class="space-y-2">
                {@html requisition.description}
                
                {#if requisition.options}
                    <div class="grid grid-cols-3 gap-1">
                        {#each requisition.options as option}
                            <li>{@html option}</li>
                        {/each}
                    </div>
                {/if}
                
                <div class="flex justify-between">
                    <div class="space-y-0.5">
                        {#each requisition.pricing as price}
                            <p><b>{@html price.name}:</b> <red>{price.cost}</red></p>
                        {/each}
                    </div>
                    {#if requisition.disclaimer}
                        <p class="text-end text-[0.5rem]">
                            {@html requisition.disclaimer}
                        </p>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>