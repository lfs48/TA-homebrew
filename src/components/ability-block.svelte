<script module>
    import { ArrowRightSLineArrows, CheckFillSystem, CloseFillSystem, StarLineSystem } from 'svelte-remix';

    export { abilityBlock };
</script>

<style>
    @reference "../app.css";
    h2 {
        @apply
        font-bold
        text-anomaly-blue
        leading-none
    ;}
    h2 {
        @apply
        w-full
        border-b
        pb-1
        mb-1
        border-anomaly-blue
        text-[2rem]
    ;}
    p, div {
        @apply
        leading-[1.25rem]
    ;}
    div :global(li) {
        @apply
        leading-none
        mb-2
        last:mb-0
        before:content-["›"]
        before:mr-2
        before:text-anomaly-blue
    ;}
</style>

{#snippet abilityBlock(parts)}
    <div class="space-y-3">
        <h2>{parts.title}</h2>
        <div>{@html parts.desc}</div>
        {#if parts.success}
            <div class="flex items-start space-x-2">
                <div class="pt-[0.2rem]">
                    <CheckFillSystem class="text-anomaly-blue size-[1rem]"/>
                </div>
                <div class="space-y-2">{@html parts.success}</div>
            </div>
        {/if}
        {#if parts.additional}
            <div class="flex space-x-2">
                <div class="pt-[0.25rem]">
                    <StarLineSystem class="text-anomaly-blue size-[0.75rem]"/>
                </div>
                <div class="space-y-2">{@html parts.additional}</div>
            </div>
        {/if}
        {#if parts.trisc}
            <div class="flex space-x-2">
                <div class="pt-[0.25rem]">
                    <StarLineSystem class="text-anomaly-blue size-[0.75rem]"/>
                </div>
                <div class="space-y-2">{@html parts.trisc}</div>
            </div>
        {/if}
        {#if parts.failure}
            <div class="flex space-x-2 pb-2">
                <div class="pt-[0.2rem]">
                    <CloseFillSystem class="text-agency-red size-[1rem]"/>
                </div>
                <div class="space-y-2">{@html parts.failure}</div>
            </div>
        {/if}
        {#if parts.extra}
            <div>
                {@html parts.extra}
            </div>
        {/if}
        {#if parts.question}
            <div class="space-y-1">
                <p><blue class="pr-1">Q: </blue>{parts.question}</p>
                <div class="space-y-0.5">
                    {#each parts.answers as {answer, boxes=3, code}}
                        <p><blue>A:</blue> {answer}</p>
                        <div class="flex items-center pl-4 space-x-1 pb-0.5">
                            <ArrowRightSLineArrows class="size-[1rem] text-anomaly-blue"/>
                            {#each [...Array(boxes).keys()]}
                                <div class="size-4 border border-anomaly-blue"></div>
                            {/each}
                            <blue class="pl-1 text-[1.1rem] leading-none">{code}</blue>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
{/snippet}