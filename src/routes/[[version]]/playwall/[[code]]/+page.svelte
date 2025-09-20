<script>
    import { abilityBlock } from '../../../../components/ability-block.svelte';
    
	let { data } = $props();
</script>

{#if data.document}
    {@render abilityBlock(data.document)}
{:else if data.code && data.code.length > 0}
    <h2 class="font-bold
        text-agency-red
        leading-none
        w-full
        border-b
        pb-1
        mb-1
        border-agency-red
        text-[2rem]">404</h2>
    <p>
        Please inform your General Manager you should receive <red>one Demerit</red> for attempting
        to access a <b>Playwalled Document</b> which does not exist.
    </p>
{/if}