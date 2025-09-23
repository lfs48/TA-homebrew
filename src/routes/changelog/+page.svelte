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
    h3 {
        @apply
        text-xl
        mb-1
        mt-4
    ;}
    h4  {
        @apply
        mb-1
        mt-2
        pl-8
        ml-8
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
            <h2>{change.version} - {change.date}</h2>
            <p>
                {@html change.notes}
            </p>
        </div>
    {/each}
</div>
