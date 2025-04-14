<script>
    import Triangle from '../../../components/triangle.svelte';
    
	let { data } = $props();
</script>

<style>
    @reference "../../../app.css";
    h1, h2, h3 {
        @apply
        text-agency-red
    ;}
    h2 {
        @apply
        border-agency-red
        pb-1
        mb-1
    ;}
    li {
        @apply
        marker:text-agency-red
    ;}
</style>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    <div>
        <div class="flex justify-between items-end">
            <h1>{data.title}</h1>
            <h3 class="relative pr-24">
                <span class="absolute -left-[0.25rem] top-[0.35rem] text-white text-[1.5rem] pl-[0.75rem]">C<red class="ml-[0.11rem]">OMPETENCY</red></span>
                <Triangle/>
            </h3>
        </div>
        <h3 class="pb-8">{data.tagline}</h3>
        <p class="space-y-2">{@html data.desc}</p>
    </div>
    <div>
        <h2>Prime Directive</h2>
        <p>
            <red>{data.directive}</red>
            {data.demeritTrigger}, <red>receive 1 Demerit.</red>
        </p>
    </div>
    <div>
        <h2>Sanctioned Behaviors</h2>
        <p class="pb-1">
            Receive <red>1 Commendation</red> each time you:
        </p>
        <ul class="space-y-1 pb-3 pl-2">
            {#each data.sanctioned as behavior}
                <li>
                    {behavior}
                </li>
            {/each}
        </ul>
        <p>
            If you complete each Sanctioned Behavior
            at least once during a mission, you
            receive a bonus of <red>3 Commendations</red>
            after superlatives have been awarded.
          </p>
    </div>
    <div>
        <h2>Initial Requisition</h2>
        <p>
            <red>{data.reqName}.</red>
            {@html data.reqDesc}
        </p>
    </div>
    <div>
        <h2>Self-Assessment</h2>
        <div class="space-y-3">
            <p>
                Please answer the following questions
                and increase your maximum Quality
                Assurances by <red>3</red> in the Qualities
                corresponding to your answers.
            </p>
            <p>
                When you begin your first mission,
                you will have a total of nine Quality
                Assurances available to you. Quality
                Assurances return to their current
                maximum at the end of each mission.
            </p>
            <p>
                Afterwards, please provide your GM
                with a short description of the work
                you'd most like to do within this
                department and any requests for
                specific supervisors or coworkers.
            </p>
            {#each data.assessment as question, i}
                <div class="space-y-1">
                    <div>
                        <p>
                            {#if i === 2}
                                <red>{i+1}.</red>
                            {:else}
                                <b>{i+1}.</b>
                            {/if}
                            {@html question.q}
                        </p>
                    </div>
                    <ul class="pl-[2rem] space-y-1">
                        <li>
                            {@html question.answerA}
                            (<b>+</b><red>3</red> {question.qualityA})
                        </li>
                        <li>
                            {@html question.answerB}
                            (<b>+</b><red>3</red> {question.qualityB})
                        </li>
                    </ul>
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full flex justify-center pt-8 text-agency-red">
        <p>"{data.quote}"</p>
    </div>
</div>