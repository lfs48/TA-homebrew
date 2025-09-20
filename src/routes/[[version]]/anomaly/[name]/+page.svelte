<script>
    import Triangle from '../../../../components/triangle.svelte';

    import { abilityBlock } from '../../../../components/ability-block.svelte';
    import { versionIndicator } from '../../../../components/version-indicator.svelte';
	let { data } = $props();
</script>

<style>
    @reference "../../../../app.css";
    h1, h3 {
      @apply
      text-anomaly-blue
    ;}
</style>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    {#if data.version && data.version !== 'current'}
        {@render versionIndicator(data.version)}
    {/if}
    <div>
        <div class="flex justify-between items-end">
            <h1 class="pb-1">{data.title}</h1>
            <h3 class="relative pr-24">
                <span class="absolute -left-[0.25rem] top-[0.35rem] text-white text-[1.5rem] pl-[0.75rem]">A<blue class="ml-[0.11rem]">NOMALY</blue></span>
                <Triangle fillColor="#3381ff"/>
              </h3>
        </div>
        <h3 class="pb-8">{data.tagline}</h3>
        <p class="space-y-2">{@html data.desc}</p>
    </div>
    {#each data.abilities as ability}
        {@render abilityBlock(ability)}
    {/each}
</div>