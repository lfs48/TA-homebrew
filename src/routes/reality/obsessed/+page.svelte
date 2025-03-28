<script>
    import { ArrowRightSLineArrows, CloseLargeLineSystem } from 'svelte-remix';
    import Triangle from '../../../components/triangle.svelte';
  
    const title = 'Obsessed';
    const tagline = 'The glimmer in your eye.';
    const description = `
        <p>
            The Obsessed Agent's personal life revolves
            around a singular overwhelming interest.
            It might be a piece of media, hobby,
            lifestyle, religion, or something more esoteric.
            The uniting factor is that this Obsession
            commands the Agent's attention at all times
            and shapes their perception of the world
            around itself.
        </p>
        <p>
            The <red>Agency</red> has spent considerable resources
            studying Obsessed Agents in the interest
            of harnessing their focus and dedication
            toward more economical purposes. On the
            occassion that an Agent's Obsession happens
            to align with the <red>Agency's</red> purpose,
            their productivity is unparalleled.
        </p>
        <p>
            Unfortunately, data shows that these Agents
            have little control over which interests 
            they gravitate toward, and they are
            statistically much more likely to become
            fixated on useless trivialities that generate
            no revenue. Worse yet, these frivolous
            topics often occupy their focus during
            missions, leading to overlooked details
            and critical blunders.
        </p>
        <p>
            Our researchers will continue to investigate
            how to guide these Agents toward 
            more valuable interests.
            In the meantime, cost-benefit analysis shows
            that it remains worthwhile to employ
            them as long as they can be kept
            adequately enriched.
        </p>
    `;
  
    const tableTitle = 'Fixation';
    const tableDesc = `
      You are deeply obsessed with a particular interest, called your <b>Fixation</b>.
      Decide what it is by rolling on the table below or creating your own.`;
    const tableOptions = [
      'Pop Idol',
      'Telenovela',
      `Conspiracy Theory`,
      'Birdwatching',
    ];
  
    const triggerTitle = 'Interest Mentioned!';
    const triggerDesc = `
      The GM may use Reality to have
      something related to your <b>Fixation</b>
      pop up around you (<i>an advertisement
      for new merch, someone sharing an
      incorrect fact, etc.</i>). If you ignore it, your
      attention will be consumed by it later:
      the relationship who least shares your interest loses <yellow>one Connection</yellow>.
      `;
    const trackTitle = 'Faded Spark';
    const trackDesc = `
      When you enthusiastically engross
      yourself in something unrelated to your
      <b>Fixation</b>, mark the next empty
      box on a four-box <yellow>Faded Spark</yellow> track. 
      When this happens while all boxes are marked, 
      or when you're forced to abandon your <b>Fixation</b>
      for other reasons, you move on to new things. You must choose a new Reality.
    `;
  
    const releaseTitle = 'Hyperfocused';
    const releaseDesc = `
      When you are doing something that
      engages with your <b>Fixation</b> or invokes
      specialized knowledge gained from it,
      ignore all Burnout.
    `;

    const onboarding = [
      'What is your most prized possession?',
      'How do you spend a typical Saturday night?',
      `What are you too embarrassed to admit?`,
    ]
  
    const relationships = [
      {
        q: `Who has a connection you're jealous of?`,
        examples: `
          Dog Groomer, Ran Into Them at a Bakery Once, Actor's Distant Cousin`,
      },
      {
        q: `Who's as deep in the rabbit hole as you are?`,
        examples: `
          Best Friend, Nail Tech, Tween on Internet Forum`,
      },
      {
        q: `Who can't quite follow along with your rants?`,
        examples: `
          Chauffeur, Tattoo Artist, Jujitsu Sparring Partner`,
      },
    ];

    const track = [1,2,3,4];
  
  </script>

<style>
    @reference "../../../app.css";
    h1, h2, h3 {
        @apply
        font-bold
        text-reality-yellow
        leading-none
    ;}
    h2 {
        @apply
        w-full
        border-b
        pb-1
        mb-1
        border-reality-yellow
        text-[2rem]
    ;}
    p {
        @apply
        leading-[1.25rem]
    ;}
</style>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    <div>
        <div class="flex justify-between items-end">
            <h1 class="text-[3rem] pb-1">{title}</h1>
            <h3 class="relative leading-none pr-24">
                <span class="absolute -left-[0.25rem] top-[0.35rem] text-white text-[1.5rem] pl-[0.75rem]">R<yellow class="ml-[0.11rem]">EALITY</yellow></span>
                <Triangle fillColor="#fcad30"/>
              </h3>
        </div>
        <h3 class="pb-8 text-[1.25rem]">{tagline}</h3>
        <p class="space-y-2">{@html description}</p>
    </div>
    <div>
        <h2>{tableTitle}</h2>
        <p class="pb-3 ">{@html tableDesc}</p>
        <ul class="space-y-1">
            {#each tableOptions as option, i}
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
            <yellow>{triggerTitle}</yellow>
            {@html triggerDesc}
        </p>
    </div>
    <div>
        <h2>Burnout Release</h2>
        <p>
            <yellow>{releaseTitle}.</yellow>
            {@html releaseDesc}
        </p>
    </div>
    <div>
        <h2>Onboarding Questions</h2>
        <ul class="space-y-1">
            {#each onboarding as question}
                <li class="flex items-center space-x-1">
                    <ArrowRightSLineArrows class="size-[1rem] text-reality-yellow"/>
                    <p>{question}</p>
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
        <ul>
        {#each relationships as relationship}
                <li class="flex items-center space-x-1">
                    <ArrowRightSLineArrows class="size-[1rem] text-reality-yellow"/>
                    <p><yellow>{relationship.q}</yellow> <i>(Examples: {relationship.examples})</i></p>
                </li>
            {/each}
            </ul>
    </div>
    <div>
        <h2>{trackTitle}</h2>
        <p class="pb-3">
            {@html trackDesc}
        </p>
        <div class="flex items-center">
            <ArrowRightSLineArrows class="size-[1.25rem] text-reality-yellow mr-1"/>
            {#each track as i}
                <div class={`flex justify-end items-end w-8 h-8
                 p-0.5 border border-reality-yellow text-[0.9rem] leading-none ${i === 3 && 'text-agency-red'}`}>{i}</div>
                <div class="w-[1rem] h-[1px] bg-reality-yellow"></div>
            {/each}
            <CloseLargeLineSystem class="size-[1.25rem]"/>
          </div>
    </div>
</div>