<script>
    import { ArrowRightSLineArrows } from 'svelte-remix';
    import Triangle from '../../../components/triangle.svelte';
  
    const title = 'Coach';
    const tagline = 'Just do it!';
    const description = `
        <p>
            Research has shown that most employees
            only expend <red>30</red>-70% of available
            time and effort in their work, due to
            psychological barriers such as “exhaustion” 
            or “the stress coefficient of human bones”.
            <red>Agency</red> Coaches are tasked with liberating
            their coworkers from these mental blockers 
            so that they unlock their true potential
            and maximize their revenue generation. 
            They work tirelessly toward the success of others
            by designing training regimens, monitoring performance 
            metrics, and refusing to tolerate mediocrity.
        </p>
        <p>
            While many Coaches fuffill the role in a 
            traditional sense by managing the physical fitness
            of their team, they also fill a wide variety of other 
            <red>Agency</red> positions.
            Many of our  dieticians, algebra tutors, 
            and podcast hosts are recognized as Coaches.
            Whether you're eyeing the gym or coference podium, 
            our Coaching department welcomes anyone
            with the courage to put those coddled slackers to work.
        </p>
    `;
  
    const tableTtitle = 'Give Me Twenty';
    const tableDesc = `
      Choose your favorite warmup exercise by rolling on
      the table below or creating your own.`;
    const tableOptions = [
      'Pushups',
      'Deadlifts',
      'Squats',
      'Kegels',
    ];
  
    const directive = `No pain, no gain.`;
    const demeritTrigger = 'Each time you give a compliment';
  
    const sanctioned = [
      'Reject an excuse.',
      'Identify a deficiency.',
      'Push something past its limits.',
    ];
  
    const requisitionName = 'Motivational Pamphlet';
    const requisitionDesc = `
      This little pocket-sized booklet contains a 
      limitless inventory of tautological statements
      and fabricated anecdotes. Once per mission, 
      you can read one off to another person 
      while discussing a mundane task that they 
      normally wouldn’t be able to perform.
      They will succeed at that task whenever they attempt it
      for the rest of the mission. Any injury they might 
      incur while performing that task is 
      deferred until it is completed.
    `;
  
    const assessment = [
      {
        q: `When I see someone stumble, I...`,
        answerA: `
          Ensure they've learned to watch their step.
        `,
        qualityA: 'Persistence',
        answerB: `
          Get them back up and running. Immediately.
        `,
        qualityB: 'Dynamism',
      },
      {
        q: `I celebrate my team's big wins by...`,
        answerA: `
          Preparing them to win even bigger next time.
        `,
        qualityA: 'Initiative',
        answerB: `
          Publicly ridiculing the losers.
        `,
        qualityB: `Presence`,
      },
      {
        q: `
          The one thing all successful people share
          in common is...
        `,
        answerA: `
          A dedication to hard work and self improvement.
        `,
        qualityA: 'Duplicity',
        answerB: `Success.`,
        qualityB: 'Attentiveness',
      },
    ];
  
    const quote = `You can do anything you put your mind, body, time, energy, hopes, and self-worth into.`;
  </script>

<style>
    @reference "app.css";
    h1, h2 {
        @apply
        font-bold
        text-agency-red
        leading-none
    ;}
    p {
        @apply
        leading-[1.25rem]
    ;}
</style>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    <div>
        <div class="flex justify-between items-end">
            <h1 class="text-[3rem]">{title}</h1>
            <h2 class="relative leading-none pr-24">
                <span class="absolute -left-[0.25rem] top-[0.35rem] text-white text-[1.5rem] pl-[0.75rem]">C<red class="ml-[0.11rem]">OMPETENCY</red></span>
                <Triangle/>
              </h2>
        </div>
        <h3 class="pb-8 text-agency-red text-[1.25rem]">{tagline}</h3>
        <p class="space-y-2">{@html description}</p>
    </div>
    <div>
        <h2 class="w-full border-b pb-1 mb-1 border-agency-red text-[2rem]">Prime Directive</h2>
        <p>
            <red>{directive}</red>
            {demeritTrigger}, <red>receive 1 Demerit.</red>
        </p>
    </div>
    <div>
        <h2 class="w-full border-b pb-1 mb-1 border-agency-red text-[2rem]">Sanctioned Behaviors</h2>
        <p class="pb-1">
            Receive <red>1 Commendation</red> each time you:
        </p>
        <ul class="space-y-1 pb-3">
            {#each sanctioned as behavior}
                <li class="flex items-center space-x-1">
                    <ArrowRightSLineArrows class="size-[1rem] text-agency-red"/>
                    <p>{behavior}</p>
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
        <h2 class="w-full border-b pb-1 mb-1 border-agency-red text-[2rem]">Initial Requisition</h2>
        <p>
            <red>{requisitionName}.</red>
            {@html requisitionDesc}
        </p>
    </div>
    <div>
        <h2 class="w-full border-b pb-1 mb-1 border-agency-red text-[2rem]">Self-Assessment</h2>
        <div class="space-y-2">
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
            {#each assessment as question, i}
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
                <ul class="pl-[1.5rem] space-y-1">
                    <li class="flex items-center space-x-1">
                        <ArrowRightSLineArrows class="size-[1rem] text-agency-red"/>
                        <p>
                            {@html question.answerA}
                            (<b>+</b><red>3</red> {question.qualityA})
                        </p>
                    </li>
                    <li class="flex items-center space-x-1">
                        <ArrowRightSLineArrows class="size-[1rem] text-agency-red"/>
                        <p>
                            {@html question.answerB}
                            (<b>+</b><red>3</red> {question.qualityB})
                        </p>
                    </li>
                </ul>
            {/each}
        </div>
    </div>
    <div class="w-full flex justify-center pt-8 text-agency-red">
        <p>"{quote}"</p>
    </div>
</div>