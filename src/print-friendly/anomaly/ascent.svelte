

<script>
    import art from '../../../assets/images/ascent.png'
    import { OctagonFillDesign, TriangleFillDesign } from 'svelte-remix';
  
    const version = '0.1.0'
    const title = 'Ascent';
    const tagline = `Going up.`;
    const description1 = `
      <p>
        What's that in the sky?
        Is it a bird soaring to impossible heights?
        Is it a plane performing physics-defying stunts?
        Is it a superhero flying to the rescue?
        Yes, it's Ascent!
      </p>
      <p>
        All terrestrial creatures yearn to know what it's like to fly.
        Ascent <blue>Anomalies</blue> are born from this primordial urge.
        Obsessed with freedom and posibility,
        they refuse to constrain themselves to a two-dimensional existence.
        Whenever a loose paper is blown away,
        a brick is hurled through a window,
        or a rocketship blasts off into space,
        it is riding an updraft left in the wake of Ascent.
      </p>
      <p>
        At their best, Ascent-bonded Agents are dynamic and ambitious,
        serving as role models for others to look up to.
        At their worst they are aloof and airheaded,
        considering themselves a little above everyone else.
      </p>
      <p>
        Because they always go above and beyond in their work,
        these Agents frequently rise through the ranks
        to top-level positions. They work best when allowed
        to set their own flightpaths with minimal oversight.
        In order to help steer their trajectory back on track
        when necessary, the <red>Agency</red> recommends partnering
        them with at least one teammate trained in the use of
        anti-aircraft weaponry.
      </p>
    `;

    const description2 = `
      <p>
      </p>
    `
  
    const abilities = [
      {
        title: 'Liftoff',
        desc: 'While you are unburdened, kick your heels off the ground and roll <b>Initiative</b>.',
        success: `
          <p>
            <b>On a success,</b> you take off flying for a short burst,
            allowing you to do one or more of the following:
          </p>
          <ul>
            <li>Maneuver over an obstacle.</li>
            <li>Evade an attack from a grounded foe.</li>
            <li>Travel up to one mile in <three>3</three> seconds.</li>
          </ul>
        `,
        additional: `
          <b>On every third <red>3</red>,</b> you can carry one other person
          or heavy object during your flight.
        `,
        failure: `
          <b>On a failure,</b> you fly directly upward uncontrollably.
          If there’s something in your way, receive one Harm from crashing through it.
          You fall back down after about a minute, receiving one Harm if your landing isn’t softened.
        `,
        q: 'I fly high to...',
        a1: 'Reach for the stars.',
        a2: 'Escape my problems.'
      },
      {
        title: 'Aerodynamics',
        desc: `
          As you launch or throw an object into the air,
          visualize a trajectory for it and roll <b>Persistence</b>.
        `,
        success: `
          <b>On a success,</b>  the object follows that trajectory,
          no matter how implausible. The flight ends once it
          touches the ground or collides with something.
        `,
        additional: `
          <b>For each additional <red>3</red>,</b> you can make one midflight correction to the trajectory.
        `,
        failure: `
          <b>On a failure,</b> the object hangs in the air, fixed in place where you released it.
          It cannot be moved by any means for the next hour.
        `,
        q: 'I think birds are...',
        a1: 'Pretty neat!',
        a2: 'A nuissance.',
      },
      {
        title: 'Vantage Point',
        desc: `
          Envision someone you're searching for.
          Look down upon a reflective surface and roll <b>Attentiveness</b>.
        `,
        success: `
          <b>On a success,</b> the reflection is replaced by an aerial view
          of the target. It follows them as they move and can be zoomed
          in and out, but is bounded by any ceilings above them.
          The view lasts until the surface is disturbed or
          until you look at it from a different angle.
        `,
        additional: `
          <b>On every third <red>3</red>,</b> you can drop an object
          through the reflection and onto the target. 
          It must fit through the surface.
        `,
        failure: `
          <b>On a failure,</b> the target looks up and sees you.
          They become aware of who you are and that you were watching them.
          Your surface then shatters.
        `,
        q: 'I look down to...',
        a1: 'Watch over others.',
        a2: 'Remind myself how far I might fall.',
      },
    ];
  
  </script>

  <style>
    h1, h2 {
      @apply
        text-anomaly-blue
    }
    h3 {
      @apply
        text-[1.25rem]
    }
  </style>

  {#snippet ability(title, desc, success, additional, failure, q, a1, a2)}
    <div class="flex flex-col pl-20 py-4 pr-8">
      <h3 class="pb-2">{title}</h3>
      <p class="pb-4">{@html desc}</p>
      <div class="flex space-x-4">
        <div class="flex flex-col">
          <div class="flex space-x-2 pb-4">
            <div class="relative">
              <TriangleFillDesign class="w-[1.8rem] h-[1.8rem] text-anomaly-blue"/>
              <p class="absolute top-[0.45rem] left-[0.45rem] text-[1.3rem] text-white">✔</p>
              <div>

              </div>
            </div>
            <p>{@html success}</p>
          </div>
          <div class="flex space-x-2 pb-4">
            <div class="relative">
              <TriangleFillDesign class="w-[1.8rem] h-[1.8rem] text-anomaly-blue"/>
              <p class="absolute top-[0.5rem] left-[0.45rem] text-[1.1rem] text-white">★</p>
            </div>
            <p>{@html additional}</p>
          </div>
          <div class="flex space-x-2">
            <div class="relative">
              <OctagonFillDesign class="w-[1.8rem] h-[1.8rem] text-agency-red"/>
              <p class="absolute top-[0.45rem] left-[0.5rem] text-[1rem] text-white">✖</p>
            </div>
            <p>{@html failure}</p>
          </div>
        </div>
        <div class="min-w-[15rem] h-min self-end p-4 space-y-1 rounded bg-anomaly-blue-lighter [&>p>b]:text-[1rem] [&>p>b]:mr-2">
          <p class="text-anomaly-blue"><b>Q: </b>{@html q}</p>
          <p class="text-anomaly-blue"><b>A: </b>{@html a1}</p>
          <div class="flex items-center pl-6 space-x-1 text-anomaly-blue">
            <div>🡆</div>
            <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
            <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
            <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
          </div>          
          <p class="text-anomaly-blue"><b>A: </b>{@html a2}</p>
          <div class="flex items-center pl-6 space-x-1 text-anomaly-blue">
            <div>🡆</div>
            <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
            <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
            <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
  
  <article class="flex w-full h-full tracking-[-0.012rem]">
    <div class="basis-[47.5%] border-l-2">
      <div class="relative -ml-12 pb-40">
        <h1 class="transform -rotate-45 pb-2">{title}</h1>
        <div class="flex justify-between pr-20 pb-20">
          <h2 class="relative -top-[2.5rem] -right-[14rem] transform -rotate-45">
            <span class="text-white text-[1.5rem] pl-[0.8rem]">A<strong class="ml-[0.25rem] text-anomaly-blue">NOMALY</strong></span>
            <TriangleFillDesign class="absolute -top-[0.625rem] w-[2.75rem] h-[2.75rem] text-anomaly-blue z-[-1]" />
          </h2>
        </div>
      </div>
      <div class="pl-16">
        <h2 class="pb-4">{tagline}</h2>
        <div class="flex space-x-2 pb-5">
          <div class="basis-1/2 flex">
              <div class="w-72 space-y-1">
                {@html description1}
              </div>
          </div>
          <div class="basis-1/2 space-y-3 pr-20">
            <div>
              {@html description2}
            </div>
          </div>
        </div>
      </div>
      <img src={art} alt='' class="fixed size-[30rem] top-[10rem] left-[20rem]" />
    </div>
    <div class="basis-[5%]"></div>
    <div class="basis-[47.5%] flex">
        <div class="flex flex-col justify-center w-full divide-y-2 divide-y-pale-blue-gray">
          <div class="flex flex-col pl-20 py-4 pr-8">
            <h3 class="pb-2">{abilities[0].title}</h3>
            <p class="pb-4">{@html abilities[0].desc}</p>
            <div class="flex space-x-4">
              <div class="flex flex-col">
                <div class="flex space-x-2 pb-4">
                  <div class="relative">
                    <TriangleFillDesign class="w-[1.8rem] h-[1.8rem] text-anomaly-blue"/>
                    <p class="absolute top-[0.45rem] left-[0.45rem] text-[1.3rem] text-white">✔</p>
                    <div class="flex flex-col items-center">
                      <div class="w-1 h-[0.85rem] rounded-tr-full rounded-tl-full bg-anomaly-blue"></div>
                      <div class="size-[0.8rem] rounded-full border-[0.2rem] border-anomaly-blue"></div>
                      <div class="w-1 h-[0.45rem] bg-anomaly-blue"></div>
                      <div class="size-[0.8rem] rounded-full border-[0.2rem] border-anomaly-blue"></div>
                      <div class="w-1 h-[0.45rem] bg-anomaly-blue"></div>
                      <div class="size-[0.8rem] rounded-full border-[0.2rem] border-anomaly-blue"></div>
                    </div>
                  </div>
                  <p class="space-y-2 [&>ul]:space-y-1">{@html abilities[0].success}</p>
                </div>
                <div class="flex space-x-2 pb-4">
                  <div class="relative">
                    <TriangleFillDesign class="w-[1.8rem] h-[1.8rem] text-anomaly-blue"/>
                    <p class="absolute top-[0.5rem] left-[0.45rem] text-[1.1rem] text-white">★</p>
                  </div>
                  <p>{@html abilities[0].additional}</p>
                </div>
                <div class="flex space-x-2">
                  <div class="relative">
                    <OctagonFillDesign class="w-[1.8rem] h-[1.8rem] text-agency-red"/>
                    <p class="absolute top-[0.45rem] left-[0.5rem] text-[1rem] text-white">✖</p>
                  </div>
                  <p>{@html abilities[0].failure}</p>
                </div>
              </div>
              <div class="min-w-[15rem] h-min self-end p-4 space-y-1 rounded bg-anomaly-blue-lighter [&>p>b]:text-[1rem] [&>p>b]:mr-2">
                <p class="text-anomaly-blue"><b>Q: </b>{@html abilities[0].q}</p>
                <p class="text-anomaly-blue"><b>A: </b>{@html abilities[0].a1}</p>
                <div class="flex items-center pl-6 space-x-1 text-anomaly-blue">
                  <div>🡆</div>
                  <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
                  <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
                  <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
                </div>          
                <p class="text-anomaly-blue"><b>A: </b>{@html abilities[0].a2}</p>
                <div class="flex items-center pl-6 space-x-1 text-anomaly-blue">
                  <div>🡆</div>
                  <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
                  <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
                  <div class="w-4 h-4 rounded bg-white border border-anomaly-blue-light"></div>
                </div>
              </div>
            </div>
          </div>
          {#each abilities.slice(1,3) as {title, desc, success, additional, failure, q, a1, a2}}
            {@render ability(title, desc, success, additional, failure, q, a1, a2)}
          {/each}
        </div>
      <aside class="flex justify-between bg-anomaly-blue w-20 h-full text-vertical text-white pt-10 pb-2">
        <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Anomaly ▾ {title}</div>
        <div class="flex justify-center text-horizontal font-poppins font-bold text-[1.1rem]">v{version}</div>
      </aside>
    </div>
</article>