

<script>
    import art from '../../assets/images/obsessed.png'
    import { FireFillWeather, QuestionFillSystem, TriangleFillDesign } from 'svelte-remix';
  
    const title = 'Obsessed';
    const tagline = 'The sparkle in your eye.';
    const description1 = `
      <p>
        The Obsessed Agent's personal life revolves
        around a singular overwhelming interest
        in a specific thing: their Obsession.
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
    `;

    const description2 = `
      <p>
        Our researchers will continue to investigate
        how to guide these Agents toward 
        value-adding interests.
        In the meantime, cost-benefit analysis shows
        that it remains worthwhile to employ
        them as long as they can be kept
        adequately enriched.
      </p>
    `
  
    const tableTtitle = 'Fixation';
    const tableDesc = `
      Decide what your Obsession is by rolling on the table below or creating your own.`;
    const tableOptions = [
      'Pop Idol',
      'Telenovela',
      `Conspiracy Theory`,
      'Birdwatching',
    ];
  
    const triggerTtitle = 'Interest Mentioned!';
    const triggerDesc = `
      The GM may use Reality to have
      something related to your Obsession
      pop up around you (<i>an advertisement
      for new merch, someone sharing an
      incorrect fact, etc.</i>). If you ignore it, your
      attention will will be consumed by it later:
      the relationship whose time you most value
      loses one Connection.
      `;
    const trackTitle = 'Moved On';
    const trackDesc = `
      When you enthusiastically engross
      yourself in something that doesn't relate
      to your Obsession, mark the next empty
      mark the next empty box on a four-box
      "Moved On" track. When this happens while
      all boxes are marked, or when your Obsession
      abruptly ceases through other means,
      you must choose a new Reality.
    `;
  
    const releaseTitle = 'Hyperfocused';
    const releaseDesc = `
      When you are doing something that
      engages with your Obsession or invokes
      specialized knowledge gained from it,
      ignore all Burnout.
    `;

    const onboarding = [
      'What is your most prized possession?',
      'How do you spend a typical Saturday night?',
      `What are you too embarassed to admit?`,
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
        q: `Who has a connection you're jealous of?`,
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
    <div class="basis-[47.5%] pt-10 border-l-2">
      <div class="pl-16 pb-5">
        <h1 class="pb-2">{title}</h1>
        <div class="flex justify-between pr-20">
          <h2>{tagline}</h2>
          <h2 class="relative">
            <span class="text-white text-[1.5rem] pl-[0.95rem]">R<strong class="ml-[0.25rem] text-reality-yellow">EALITY</strong></span>
            <TriangleFillDesign class="absolute -top-[0.625rem] w-[2.75rem] h-[2.75rem] text-reality-yellow z-[-1]" />
          </h2>
        </div>
      </div>
      <div class="flex space-x-2 pl-16 pb-5">
        <div class="basis-1/2 flex">
            <div class="w-72 space-y-1">
              {@html description1}
            </div>
        </div>
        <div class="basis-1/2 space-y-3 pr-20">
          <div>
            {@html description2}
          </div>
          <h3>{tableTtitle}</h3>
          <p class="w-60">{@html tableDesc}</p>
          <div class="flex w-60 border-2 border-reality-yellow rounded-[1rem] [&>*>h4]:p-2 [&>*>h4]:border-b [&>*>h4]:border-reality-yellow [&>*>h4:last-child]:border-b-0">
            <div class="basis-[15%] flex flex-col border-r border-reality-yellow [&>h4]:flex [&>h4]:justify-center [&>h4]:items-center">
              <h4 class="bg-reality-yellow-lighter rounded-tl-[0.9rem] font-poppins">1</h4>
              <h4 class="font-poppins">2</h4>
              <h4 class="bg-reality-yellow-lighter font-poppins"><red>3</red></h4>
              <h4 class="font-poppins">4</h4>
            </div>
            <div class="basis-[85%] flex flex-col">
              <h4 class="bg-reality-yellow-lighter rounded-tr-[0.9rem]">{tableOptions[0]}</h4>
              <h4 class="">{tableOptions[1]}</h4>
              <h4 class=" bg-reality-yellow-lighter">{tableOptions[2]}</h4>
              <h4 class="">{tableOptions[3]}</h4>
            </div>
          </div>
        </div>
      </div>
      <img src={art} alt='' class="w-[45rem] h-[22rem] pl-8" />
    </div>
    <div class="basis-[5%]"></div>
    <div class="basis-[47.5%] flex">
      <div class="flex flex-col w-full">
        <section class="basis-[30%] relative flex border-b-2 border-pale-blue-gray pl-20 pt-12">
          <div class="basis-1/2 space-y-1.5">
            <h3>Reality Trigger:<br>{triggerTtitle}</h3>
            <p class="w-60">
              {@html triggerDesc}
            </p>
          </div>
          <div class="basis-1/2 space-y-1.5">
            <h3 class="text-reality-yellow">{trackTitle}</h3>
            <p class="w-60">
              {@html trackDesc}
            </p>
            <div class="flex items-center">
              <div class="text-reality-yellow text-[2rem] mr-1">▶</div>
              {#each [1,2,3,4] as i}
                <div class={`flex justify-center items-center w-[2.25rem] h-[2.25rem] border-[3px] border-reality-yellow font-bold font-poppins ${i === 3 && 'text-agency-red'}`}>{i}</div>
                <div class="w-[0.55rem] h-1 bg-reality-yellow"></div>
              {/each}
              <div class="flex justify-center items-center w-8 h-8 rounded-full bg-reality-yellow font-bold text-white text-[1rem]">X</div>
            </div>
          </div>
        </section>
        <div class="basis-[25%] flex border-b-2 border-pale-blue-gray">
          <section class="basis-1/2 relative border-r-2 border-pale-blue-gray pl-20">
            <div class="pt-16 space-y-2">
              <h3>
                Burnout Release:<br>
                {releaseTitle}
              </h3>
              <p class="w-48">{@html releaseDesc}</p>
            </div>
            <FireFillWeather class="absolute top-[3rem] right-[0.5rem] w-32 h-32 text-reality-yellow-light z-[-1]" />
          </section>
          <section class="basis-[50%] relative px-8">
            <div class="pt-14 space-y-4">
              <h3 class="font-bold">
                Onboarding Questions
              </h3>
              <ul class="w-48 space-y-1 pb-2 [&>li]:flex [&>li]:space-x-2 z-10">
                {#each onboarding as question}
                  <li>
                    <p class="text-reality-yellow text-[0.75rem]">▶</p>
                    <p>{question}</p>
                  </li>
                {/each}
              </ul>
            </div>
            <QuestionFillSystem class="absolute top-[3rem] right-[1.5rem] w-32 h-32 text-reality-yellow-light z-[-1]" />
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
              <div class="basis-1/2 relative -mx-4 flex flex-col pr-4 space-y-4 pt-20">
                <!-- {#each relationships as relation}
                  <div class="w-44">
                    <p class="text-reality-yellow font-bold">{relationships[0].q}</p>
                    <p>Examples: <i>{relationships[0].examples}</i></p>
                  </div>
                {/each} -->
                <div class="flex justify-evenly items-end w-full h-full pt-6 border-l-4 border-b-4 border-purple-gray">
                  {#each ['h-[6.5rem]', 'h-[5rem]', 'h-[2.5rem]', 'h-[4rem]', 'h-[7rem]', 'h-[12.5rem]', 'h-[11rem]', 'h-[6rem]'] as height}
                    <div class={`"basis-[1/8] w-4 ${height} bg-reality-yellow`}></div>
                  {/each}
                </div>
                <div>
                  <div class="absolute -top-[0.3rem] left-[2rem] w-[0.2rem] h-[12.3rem] bg-reality-yellow"></div>
                  <div class="absolute -top-[0.3rem] left-[2rem] w-[1rem] h-[0.2rem] bg-reality-yellow"></div>
                  <div class="absolute -top-[0.5rem] left-[3.5rem] w-32">
                    <p class="text-reality-yellow font-bold">{relationships[2].q}</p>
                    <p>Examples: <i>{relationships[2].examples}</i></p>
                  </div>
                </div>
                <div>
                  <div class="absolute top-[5.7rem] left-[16.3rem] w-[0.2rem] h-[2rem] bg-reality-yellow"></div>
                  <div class="absolute top-[5.7rem] left-[13rem] w-[3.5rem] h-[0.2rem] bg-reality-yellow"></div>
                  <div class="absolute top-[0.2rem] left-[13rem] w-[0.2rem] h-[5.5rem] bg-reality-yellow"></div>
                  <div class="absolute top-[0.2rem] left-[13rem] w-[1.1rem] h-[0.2rem] bg-reality-yellow"></div>
                  <div class="absolute top-[0rem] left-[14.5rem] w-32">
                    <p class="text-reality-yellow font-bold">{relationships[1].q}</p>
                    <p>Examples: <i>{relationships[1].examples}</i></p>
                  </div>
                </div>
                <div>
                  <div>
                    <div class="absolute top-[13rem] left-[6.75rem] w-[0.2rem] h-[3rem] bg-reality-yellow"></div>
                    <div class="absolute top-[13rem] left-[3.5rem] w-[3.25rem] h-[0.2rem] bg-reality-yellow"></div>
                    <div class="absolute top-[7.2rem] left-[3.5rem] w-[0.2rem] h-[5.8rem] bg-reality-yellow"></div>
                    <div class="absolute top-[7.2rem] left-[3.5rem] w-[1.1rem] h-[0.2rem] bg-reality-yellow"></div>
                    <div class="absolute top-[7rem] left-[5rem] w-32">
                      <p class="text-reality-yellow font-bold">{relationships[0].q}</p>
                      <p>Examples: <i>{relationships[0].examples}</i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
      <aside class="flex bg-reality-yellow w-20 h-full text-vertical pt-10 px-2">
        <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Reality ▾ {title}</div>
      </aside>
    </div>
</article>