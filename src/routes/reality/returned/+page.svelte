

<script>
    import art from '../../../assets/images/obsessed.png'
    import { FireFillWeather, QuestionFillSystem, TriangleFillDesign } from 'svelte-remix';
  
    const version = '0.1.0'
    const title = 'Returned';
    const tagline = 'The sparkle in your eye.';
    const description1 = `
      <p>
        Coming back from the dead is just part of the job
        for most Agents, but the Returned is an unusual case.
        They met their demise before they became an Agency employee,
        but somehow failed to cross the final threshold.
        Perhaps they have an obligation to the living world
        that couldn't be abandoned, or perhaps
        they were brought back against their will.
        Their body still bears

      </p>
      <p>
         
      </p>
      <p>
        
      </p>
    `;

    const description2 = `
      <p>
        Our researchers will continue to investigate
        how to guide these Agents toward 
        more valuable interests.
        In the meantime, cost-benefit analysis shows
        that it remains worthwhile to employ
        them as long as they can be kept
        adequately enriched.
      </p>
    `
  
    const tableTtitle = 'Reanimation Method';
    const tableDesc = `
      Your body still bears the marks of your first death, which your 
      Life Insurance Policy cannot repair. Choose a scar from the table below
      or create your own.
      `;
    const tableOptions = [
      'Decapitated',
      'Hole Through Chest',
      `Rotting Skin`,
      '',
    ];
  
    const triggerTtitle = 'Came Back Wrong';
    const triggerDesc = `
        You shouldn't be alive and ,
        and life itself rejects you.
        The GM may use Reality Trigger to have
        an aspect of your death bubble back up
        (<i>flesh rotting, .</i>)
        If you don't do something about it now,
        you slip further away from the living:
        the relationship you least want to let go
        loses one Connection.
      `;
    const trackTitle = 'Rest in Peace';
    const trackDesc = `
      When you let go of something from when you were alive, 
      mark the next empty empty box on a four-box
      "Rest in Peace" track. When this happens while
      all boxes are marked, or when you make peace with your death
      on your own terms, you finally accept the end of your previous life.
      If you still wish to continue your new one,
      you must choose a new Reality.
    `;
  
    const releaseTitle = 'Morbid Cursiosity';
    const releaseDesc = `
      When you are doing something that
      will make you really feel alive,
      ignore all Burnout.
    `;

    const onboarding = [
      'What is the most painful thing you have ever experienced?',
      '',
      `What are you too embarassed to admit?`,
    ]
  
    const relationships = [
      {
        q: `Who watched you die?`,
        examples: `
            Estranged Lover, Brain Surgeon, The Murderer
        `,
      },
      {
        q: `Who helped bring you back?`,
        examples: `
           Mad Scientist, 
        `,
      },
      {
        q: `Who likes you better this way?`,
        examples: `
          Mortician, Comic Book Geek, Candle Salesman
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
                    <p class="text-reality-yellow font-bold">{relationships[0].q}</p>
                    <p>Examples: <i>{relationships[0].examples}</i></p>
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
                      <p class="text-reality-yellow font-bold">{relationships[2].q}</p>
                      <p>Examples: <i>{relationships[2].examples}</i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
      <aside class="flex justify-between bg-reality-yellow w-20 h-full text-vertical text-white pt-10 pb-2">
        <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Reality ▾ {title}</div>
        <div class="flex justify-center text-horizontal font-poppins font-bold text-[1.1rem]">v{version}</div>
      </aside>
    </div>
</article>