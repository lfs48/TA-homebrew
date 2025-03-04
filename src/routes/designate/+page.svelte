

<script>
    import { FireFillWeather, QuestionFillSystem, TriangleFillDesign } from 'svelte-remix';
  
    const title = 'Designate';
    const tagline = 'Do I have to?';
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
  
    const tableTtitle = 'Fixation';
    const tableDesc = `
      Decide the responsibility you've been charged with by rolling on the table below or creating your own.`;
    const tableOptions = [
      'Family Business',
      'Telenovela',
      `Conspiracy Theory`,
      'Birdwatching',
    ];
  
    const triggerTtitle = 'Interest Mentioned!';
    const triggerDesc1 = `
      The GM may use Reality to have<br>
      something related to your obsession<br> 
      pop up around you (<i>an announcement<br>
      for a new season, someone sharing an<br>
      incorrect fact, etc.</i>). If you ignore it, your<br>
      attention will will be consumed by it later:<br>
      the relationship who [SOMETHING]<br>
      loses one Connection.
      `;
    const triggerDesc2 = '';
    const triggerTrack = 'Disengaged';
  
    const releaseTitle = 'Just Like in Episode 53';
    const releaseDesc = `
      When you are doing something that<br>
      engages with your interest or invokes<br>
      specialized knowledge gained from it,<br>
      ignore all Burnout.
    `;

    const onboarding = [
      'What does your bedroom look like?',
      '',
      '',
    ]
  
    const relationships = [
      {
        q: `Who is as deep in the rabbit hole as you are?`,
        examples: `
          Best Friend, Nail Tech, Tween on Internet Forum 
        `,
      },
      {
        q: `Who can't quite follow along with your rants?`,
        examples: `
          Chauffeur, Tattoo Artist, Jujitsu Sparring Partner
        `,
      },
      {
        q: `Who has a connection to your obsession that you're jealous of?`,
        examples: `
          Dog Groomer, Ran Into Them at a Bakery Once, Actor's Distant Cousin
        `,
      },
    ];
  
  </script>

  <style>
    h1, h2 {
      @apply
        text-reality-yellow
    }
    h3 {
      @apply
        text-[1.25rem]
    }
  </style>
  
  <article class="flex w-full h-full tracking-[-0.012rem]">
    <div class="flex">
      <div class="basis-1/2 pl-24 py-10">
        <h1 class="pb-4">{title}</h1>
        <div class="flex">
          <div class="space-y-4">
            <h2 class="relative">
              <span class="text-white text-[1.5rem] pl-[0.9rem]">R<strong class="ml-[0.25rem] text-reality-yellow">EALITY</strong></span>
              <TriangleFillDesign class="absolute -top-[0.6rem] w-[2.75rem] h-[2.75rem] text-reality-yellow z-[-1]" />
            </h2>
            <h2>{tagline}</h2>
            <p class="w-72">
              {@html description}
            </p>
            <h3>{tableTtitle}</h3>
            <p class="w-60">{@html tableDesc}</p>
            <div class="flex w-60 border-2 border-reality-yellow rounded-[1rem] [&>*>h4]:p-2 [&>*>h4]:border-b [&>*>h4]:border-reality-yellow [&>*>h4:last-child]:border-b-0">
              <div class="basis-1/5 flex flex-col border-r border-reality-yellow [&>h4]:flex [&>h4]:justify-center [&>h4]:items-center">
                <h4 class="bg-reality-yellow-light rounded-tl-[0.9rem] font-poppins">1</h4>
                <h4 class="font-poppins">2</h4>
                <h4 class="bg-reality-yellow-light font-poppins"><red>3</red></h4>
                <h4 class="font-poppins">4</h4>
              </div>
              <div class="basis-4/5 flex flex-col">
                <h4 class="bg-reality-yellow-light rounded-tr-[0.9rem]">{tableOptions[0]}</h4>
                <h4 class="">{tableOptions[1]}</h4>
                <h4 class=" bg-reality-yellow-light">{tableOptions[2]}</h4>
                <h4 class="">{tableOptions[3]}</h4>
              </div>
            </div>
          </div>
          <img alt='' class="w-[25rem] h-[37.5rem]"/>
        </div>
      </div>
      <div class="basis-1/2 flex">
        <div class="flex flex-col">
          <section class="basis-[30%] relative flex flex-col border-b-2 border-pale-blue-gray pl-20">
            <div class="pt-12 space-y-1.5">
              <h3>Reality Trigger: {triggerTtitle}</h3>
              <p>
                {@html triggerDesc1}
              </p>
            </div>
          </section>
          <div class="basis-[25%] flex border-b-2 border-pale-blue-gray">
            <section class="basis-1/2 relative border-r-2 border-pale-blue-gray pl-20">
              <div class="py-8 space-y-2">
                <h3>
                  Burnout Release:<br>
                  {releaseTitle}
                </h3>
                <p >{@html releaseDesc}</p>
              </div>
              <FireFillWeather class="absolute top-[4rem] right-[2.5rem] w-32 h-32 text-reality-yellow-light z-[-1]" />
            </section>
            <section class="basis-1/2 relative px-8">
              <div class="py-8 space-y-4">
                <h3 class="font-bold">
                  Onboarding Questions
                </h3>
                <ul class="w-36 space-y-1 pb-2 [&>li]:flex [&>li]:space-x-2 z-10">
                  {#each onboarding as question}
                    <li>
                      <p class="text-reality-yellow text-[0.5rem]">▶</p>
                      <p>{question}</p>
                    </li>
                  {/each}
                </ul>
              </div>
              <QuestionFillSystem class="absolute top-[4rem] right-[2.5rem] w-32 h-32 text-reality-yellow-light z-[-1]" />
            </section>
          </div>
          <section class="basis-[45%] flex flex-col">
            <article class="basis-1/2">
              <div class="flex pt-8">
                <div class="basis-1/2 pl-20 pr-10 space-y-5">
                  <h3>Relationship Matrix</h3>
                  <p>
                    You have three core<br>
                    Relationships that are your<br>
                    anchors to society. Identify them<br>
                    by answering the questions<br>
                    in your Relationship Matrix.<br>
                    <br>
                    Once every Relationshio has<br>
                    been identified, assign each<br>
                    to another <i>{`<Agent/player>`}</i><br>
                    at the table. When each<br>
                    character is present in a scene,<br>
                    they will be portrayed by the<br>
                    assigned <i>{`<Agent/player>`}</i>.<br>
                    <br>
                    Give the Relationship you're<br>
                    closest to <b>6 Connection.</b> Give<br>
                    the other two <red>3</red> <b>Connection.</b>
                  </p>
                </div>
                <div class="basis-1/2 -mx-4 flex flex-col pr-4 space-y-4">
                  {#each relationships as relation}
                    <div>
                      <p class="text-reality-yellow font-bold">{relation.q}</p>
                      <p>Examples: <i>{relation.examples}</i></p>
                    </div>
                  {/each}
                </div>
              </div>
            </article>
          </section>
        </div>
        <aside class="flex bg-reality-yellow w-32 h-full text-vertical pt-10 px-2">
          <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Reality ▾ {title}</div>
        </aside>
      </div>
    </div>
  </article>