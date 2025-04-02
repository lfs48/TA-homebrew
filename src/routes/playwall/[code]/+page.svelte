<script>
    import { abilityBlock } from '../../../components/ability-block.svelte';
    
	let { data } = $props();
</script>

{#if data.document}
    {@render abilityBlock(data.document)}
{/if}