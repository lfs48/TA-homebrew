<script module>
    import { ArrowRightSLineArrows, CheckFillSystem, CloseFillSystem, StarLineSystem, TriangleLineDesign } from 'svelte-remix';

    export { abilityBlock };

    const snips = {
        desc: descSnip,
        success: successSnip,
        additional: additionalSnip,
        tri: triSnip,
        failure: failureSnip,
    };
</script>

<style>
    @reference "../app.css";
    h2 {
        @apply
        text-anomaly-blue
        border-anomaly-blue
    ;}
    div :global(ul) {
        @apply
        list-disc
        pl-[0.5rem]
    ;}
    div :global(li) {
        @apply
        leading-none
        mb-2
        last:mb-0
        marker:text-anomaly-blue
    ;}
</style>

{#snippet descSnip(text)}
    <div class="space-y-2"v>
        {@html text}
    </div>
{/snippet}

{#snippet successSnip(text)}
    <div class="flex items-start space-x-2">
        <div class="pt-[0.2rem]">
            <CheckFillSystem class="text-anomaly-blue size-[1rem]"/>
        </div>
        <div class="space-y-2">{@html text}</div>
    </div>
{/snippet}

{#snippet additionalSnip(text)}
    <div class="flex space-x-2">
        <div class="pt-[0.25rem]">
            <StarLineSystem class="text-anomaly-blue size-[0.75rem]"/>
        </div>
        <div class="space-y-2">{@html text}</div>
    </div>
{/snippet}

{#snippet triSnip(text)}
    <div class="flex space-x-2">
        <div class="pt-[0.25rem]">
            <TriangleLineDesign class="text-agency-red size-[0.75rem]"/>
        </div>
        <div class="space-y-2">{@html text}</div>
    </div>
{/snippet}

{#snippet failureSnip(text)}
    <div class="flex space-x-2 pb-2">
        <div class="pt-[0.2rem]">
            <CloseFillSystem class="text-agency-red size-[1rem]"/>
        </div>
        <div class="space-y-2">{@html text}</div>
    </div>
{/snippet}

{#snippet abilityBlock({title, desc, success, additional, tri, failure, extra, questionContext, question, answers, trackContext, track})}
    <div class="space-y-3">
        <h2>{title}</h2>
        {@render descSnip(desc)}
        {#if success}
            {@render successSnip(success)}
        {/if}
        {#if additional}
            {@render additionalSnip(additional)}
        {/if}
        {#if tri}
            {@render triSnip(tri)}
        {/if}
        {#if failure}
            {@render failureSnip(failure)}
        {/if}
        {#if extra}
            {#each extra as {type, text}}
                {@render snips[type](text)}
            {/each}
        {/if}
        {#if question}
            <div class="pt-2 space-y-1">
                {#if questionContext}
                    <p class="italic text-anomaly-blue">{@html questionContext}</p>
                {/if}
                <p><blue class="pr-1">Q: </blue>{@html question}</p>
                <div class="space-y-0.5">
                    {#each answers as {answer, boxes=3, code}}
                        <p><blue>A:</blue> {@html answer}</p>
                        <div class="flex items-center pl-4 space-x-1 pb-0.5">
                            <ArrowRightSLineArrows class="size-[1rem] text-anomaly-blue"/>
                            {#each [...Array(boxes).keys()]}
                                <div class="size-4 border border-anomaly-blue"></div>
                            {/each}
                            <a href={`/playwall/${code}`} class="ml-1 flex items-center">
                                <blue class="text-[1.1rem] leading-none">/{code}</blue>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
        {#if track}
            <p class="italic text-anomaly-blue">{@html track.description}</p>
            <div class="flex items-center space-x-1 pb-0.5">
                <ArrowRightSLineArrows class="size-[1rem] text-anomaly-blue"/>
                {#each [...Array(track.length).keys()]}
                    <div class="size-4 border border-anomaly-blue"></div>
                {/each}
            </div>
        {/if}
    </div>
{/snippet}