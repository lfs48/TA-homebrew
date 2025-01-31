

<script>
  import art from '../../../assets/images/coach.png'
  import { AuctionFillFinance, MedalLineBusiness, TriangleFillDesign } from 'svelte-remix';

  const title = 'Coach';
  const tagline = 'No pain, no gain.';
  const description = `
    Research has shown that most employees
    only expend <red>3</red>0-70% of available
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
    <br>
    <br>
    While many Coaches fuffill the role in a 
    traditional sense by managing the physical fitness
    of their team, they also fill a wide variety of other 
    <red>Agency</red> positions.
    Many of our  dieticians, algebra tutors, 
    and podcast hosts are recognized as Coaches.
    Whether you're eyeing the gym or coference podium, 
    our Coaching department welcomes anyone
    with the courage to put those coddled slackers to work.
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

  const directive = `Keep them sweating.`;
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
    while discussing a physical task that they 
    normally wouldn’t be able to perform, 
    such as walking across water or 
    flirting with an attractive person. 
    They will succeed at that task the next time
    they attempt it today. Any injury they might 
    incur while performing that task is 
    deferred until the task is completed.
  `;

  const assessment = [
    {
      q: `When I see someone stumble, I...`,
      answerA: `
        Encourage them to watch their step by building
        pit traps throughout the office.
      `,
      qualityA: 'Persistence',
      answerB: `
        Help them get back up and running by chasing
        after them with a knife.
      `,
      qualityB: 'Dynamism',
    },
    {
      q: `I celebrate my team's big wins by...`,
      answerA: `
        Updating next month's quotas to reflect the increase<br>
        in productivity.
      `,
      qualityA: 'Initiative',
      answerB: `
        Publicly ridiculing the losers.
      `,
      qualityB: `Presence`,
    },
    {
      q: `
        The one thing all successful people share<br>
        in common is...
      `,
      answerA: `
        A dedication to hard work and self improvement.<br>
      `,
      qualityA: 'Duplicity',
      answerB: `Success.`,
      qualityB: 'Attentiveness.',
    },
  ];

  const quote = `"JUST. DO. IT."`;
</script>

{#snippet question(num, question, optA, qualA, optB, qualB)}
  <div class="flex space-x-4">
    <div>
      <div class="flex justify-center items-center w-8 h-8 rounded-full bg-agency-red text-white text-[1.5rem] font-bold font-poppins">{num}</div>
    </div>
    <div class="flex flex-col space-y-2">
      <p class="font-bold">{@html question}</p>
      <ul class="space-y-1">
        <li class="flex space-x-2">
          <p class="text-agency-red text-[0.5rem]">▶</p>
          <p class="leading-[0.85rem]">{@html optA} (<strong>+<red>3</red> {qualA}</strong>)</p>
        </li>
        <li class="flex space-x-2">
          <p class="text-agency-red text-[0.5rem]">▶</p>
          <p class="leading-[0.85rem]">{@html optB} (<strong>+<red>3</red> {qualB}</strong>)</p>
        </li>
      </ul>
    </div>
  </div>
{/snippet}

<style>
  h1, h2 {
    @apply
      text-agency-red
  }
</style>

<article class="flex w-full h-full tracking-[-0.012rem]">
  <div class="flex">
    <div class="basis-1/2 pl-24 py-10">
      <h1 class="pb-4">{title}</h1>
      <div class="flex">
        <div class="space-y-4">
          <h2 class="relative">
            <span class="text-white text-[1.5rem] pl-[0.75rem]">C<red class="ml-[0.11rem]">OMPETENCY</red></span>
            <TriangleFillDesign class="absolute -top-[0.6rem] w-[2.75rem] h-[2.75rem] text-agency-red z-[-1]" />
          </h2>
          <h2>{tagline}</h2>
          <p class="w-72">
            {@html description}
          </p>
          <h4>{tableTtitle}</h4>
          <p class="w-60">{@html tableDesc}</p>
          <div class="flex w-60 border-2 border-agency-red rounded-[1rem] [&>*>h4]:p-2 [&>*>h4]:border-b [&>*>h4]:border-agency-red [&>*>h4:last-child]:border-b-0">
            <div class="basis-1/5 flex flex-col border-r border-agency-red [&>h4]:flex [&>h4]:justify-center [&>h4]:items-center">
              <h4 class="bg-agency-red-light rounded-tl-[0.9rem] font-poppins">1</h4>
              <h4 class="font-poppins">2</h4>
              <h4 class="bg-agency-red-light font-poppins"><red>3</red></h4>
              <h4 class="font-poppins">4</h4>
            </div>
            <div class="basis-4/5 flex flex-col">
              <h4 class="bg-agency-red-light rounded-tr-[0.9rem]">{tableOptions[0]}</h4>
              <h4 class="">{tableOptions[1]}</h4>
              <h4 class=" bg-agency-red-light">{tableOptions[2]}</h4>
              <h4 class="">{tableOptions[3]}</h4>
            </div>
          </div>
        </div>
        <img alt='' src={art} class="w-[25rem] h-[37.5rem]"/>
      </div>
    </div>
    <div class="basis-1/2 flex">
      <div class="flex flex-col">
        <section class="basis-[20%] relative flex flex-col border-b-2 border-pale-blue-gray pl-20">
          <div class="pt-12 space-y-1.5">
            <h4 class="font-bold">Prime Directive</h4>
            <h2 class="pb-2">{directive}</h2>
            <span class="text-deep-purple">
              <b>{demeritTrigger},</b> receive <b>1 Demerit.</b>
            </span>
        </div>
          <AuctionFillFinance transform="scale(-1, 1)" class="absolute top-[1rem] right-[4rem] w-32 h-32 text-agency-red-light z-[-1]" />
        </section>
        <div class="basis-[30%] flex border-b-2 border-pale-blue-gray">
          <section class="basis-1/2 relative border-r-2 border-pale-blue-gray pl-20">
            <div class="py-8 space-y-2">
              <h4>Sanctioned Behaviors</h4>
              <p class="pb-1">Receive <b>1 Commendation</b> each time you:</p>
              <ul class="w-36 space-y-1 pb-2 [&>li]:flex [&>li]:space-x-2 z-10">
                <li>
                  <p class="text-agency-red text-[0.5rem]">▶</p>
                  <p class="text-agency-red">{sanctioned[0]}</p>
                </li>
                <li>
                  <p class="text-agency-red text-[0.5rem]">▶</p>
                  <p class="text-agency-red">{sanctioned[1]}</p>
                </li>
                <li>
                  <p class="text-agency-red text-[0.5rem]">▶</p>
                  <p class="text-agency-red">{sanctioned[2]}</p>
                </li>
              </ul>
              <p>
                If you complete each Sanctioned Behavior<br>
                at least once during a mission, you<br>
                receive a bonus of <b><red>3</red> Commendations</b><br>
                after superlatives have been awarded.
              </p>
            </div>
            <MedalLineBusiness class="absolute top-[4rem] right-[2.5rem] w-32 h-32 text-agency-red-light z-[-1]" />
          </section>
          <section class="basis-1/2 px-8">
            <div class="py-8 space-y-4">
              <h4 class="font-bold">
                Initial Requisition:<br>
                {requisitionName}
              </h4>
              <p>
                {@html requisitionDesc}
              </p>
            </div>
          </section>
        </div>
        <section class="basis-[50%] flex flex-col">
          <article class="basis-1/2">
            <div class="flex pt-8">
              <div class="basis-1/2 pl-20 pr-10 space-y-5">
                <h2>Self-Assessment</h2>
                <p>
                  Please answer the following questions<br>
                  and increase your maximum Quality<br>
                  Assurances by <red>3</red> in the Qualities<br>
                  corresponding to your answers.<br>
                  <br>
                  When you begin your first mission,<br>
                  you will have a total of nine Quality<br>
                  Assurances available to you. Quality<br>
                  Assurances return to their current<br>
                  maximum at the end of each mission.<br>
                  <br>
                  Afterwards, please provide your GM<br>
                  with a short description of the work<br>
                  you'd most like to do within this<br>
                  department and any requests for<br>
                  specific supervisors or coworkers.<br>
                </p>
              </div>
              <div class="basis-1/2 -mx-4 flex flex-col pr-4 space-y-4">
                {#each assessment as ass, i}
                  {@render question(
                    i+1,
                    ass.q,
                    ass.answerA,
                    ass.qualityA,
                    ass.answerB,
                    ass.qualityB,
                  )}
                {/each}
              </div>
            </div>
          </article>
          <article class="flex items-center w-full h-full pl-20 pr-8">
            <div class="flex justify-center items-center w-full h-16 border-2 border-agency-red rounded-[1rem] text-bold text-[1.25rem] font-urw">
              {quote}
            </div>
          </article>
        </section>
      </div>
      <aside class="flex bg-agency-red w-32 h-full text-vertical pt-10 px-2">
        <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Competency ▾ {title}</div>
      </aside>
    </div>
  </div>
</article>