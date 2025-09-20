<script>
    import { ArrowRightSLineArrows, CloseLargeLineSystem } from 'svelte-remix';

    import Triangle from '../../../../components/triangle.svelte';
    import { versionIndicator } from '../../../../components/version-indicator.svelte';

    let { data } = $props();

    const track = [1,2,3,4];
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
    {#if data.version && data.version !== 'current'}
        {@render versionIndicator(data.version)}
    {/if}
    <div>
        <div class="flex justify-between items-end">
            <h1 class="pb-1">{data.title}</h1>
            <h3 class="relative pr-24">
                <span class="absolute -left-[0.25rem] top-[0.35rem] text-white text-[1.5rem] pl-[0.75rem]">R<yellow class="ml-[0.11rem]">EALITY</yellow></span>
                <Triangle fillColor="#fcad30"/>
            </h3>
        </div>
        <h3 class="pb-8">{data.tagline}</h3>
        <p class="space-y-2">{@html data.desc}</p>
    </div>
    <div>
        <h2>{data.tableTitle}</h2>
        <p class="pb-3 ">{@html data.tableDesc}</p>
        <ul class="space-y-1">
            {#each data.tableOptions as option, i}
                <li class="flex items-center space-x-1">
                    <p class={`font-bold ${i === 2 && 'text-agency-red'}`}>{i+1}.</p>
                    <p>{@html option}</p>
                </li>
            {/each}
        </ul>
    </div>
    <div>
        <h2>Reality Trigger</h2>
        <p>
            <yellow>{data.triggerTitle}</yellow>
            {@html data.triggerDesc}
        </p>
    </div>
    <div>
        <h2>Burnout Release</h2>
        <p>
            <yellow>{data.releaseTitle}.</yellow>
            {@html data.releaseDesc}
        </p>
    </div>
    <div>
        <h2>Onboarding Questions</h2>
        <ul class="space-y-1 pl-2">
            {#each data.onboarding as question}
                <li>
                    {question}
                </li>
            {/each}
        </ul>
    </div>
    <div>
        <h2>Relationships</h2>
        <p class="pb-3">
            You have three core
            Relationships that are your
            anchors to society. Identify them
            by answering the questions
            in your Relationship Matrix.
            Once every Relationship has
            been identified, assign each
            to another <i>{`<Agent/player>`}</i>
            at the table. When each
            character is present in a scene
            they will be portrayed by the
            assigned <i>{`<Agent/player>`}</i>.
            Give the Relationship you're
            closest to <yellow>6 Connection</yellow>. Give
            the other two <red>3</red> <yellow>Connection</yellow>.
        </p>
        <ul class="pl-2 space-y-1">
        {#each data.relationships as relationship}
                <li>
                    <yellow>{relationship.q}</yellow> <i>(Examples: {relationship.examples})</i>
                </li>
            {/each}
            </ul>
    </div>
    <div>
        <h2>{data.trackTitle}</h2>
        <p class="pb-3">
            {@html data.trackDesc}
        </p>
        <div class="flex items-center">
            <ArrowRightSLineArrows class="size-[1.25rem] text-reality-yellow mr-1"/>
            {#each track as i}
                <div class={`flex justify-end items-end w-8 h-8
                 px-0.5 border border-reality-yellow text-[0.9rem] leading-none ${i === 3 && 'text-agency-red'}`}>{i}</div>
                <div class="w-[1rem] h-[1px] bg-reality-yellow"></div>
            {/each}
            <CloseLargeLineSystem class="size-[1.25rem]"/>
          </div>
    </div>
</div>