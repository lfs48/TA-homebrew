<script>
	let { data } = $props();
</script>

<style>
    @reference "../../app.css";
    div :global(ul) {
        @apply
        list-disc
        pl-[0.5rem]
    ;}
    div :global(li) {
        @apply
        mb-2
        last:mb-0
        marker:text-pentachoron
    ;}
</style>

<div class="py-8 pl-8 pr-24 leading-none space-y-6">
    <h1>Changelog</h1>
    {#each data.changes as change}
        <div>
            <h2>
                <a href={`/${change.version}`}>{change.version} - {change.date}</a>
            </h2>
            <p>
                {@html change.notes}
            </p>
        </div>
    {/each}
</div>
