<script>
    let { data } = $props();
    const { connections } = data;
</script>

<style>
    @reference "../../../../app.css";
    h1, h2, h3 {
        @apply
        text-reality-yellow
    ;}
    h2 {
        @apply
        pb-1 
        mb-1 
        border-reality-yellow
    ;}
    li {
        @apply
        marker:text-reality-yellow
    ;}
</style>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    <div class="space-y-2">
        <h1>Connection Bonuses</h1>
        <p>
            At your GM's discretion, the following <yellow>Connection Bonuses</yellow>
            may be made available to assign to Relationships at your branch.
        </p>
    </div>
    {#each Object.entries(connections) as [key, connection]}
        <div>
            <h2>{connection.title}</h2>
            <div>
                {@html connection.description}
            </div>
        </div>
    {/each}
</div>