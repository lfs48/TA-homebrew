

<script>
    import { FireFillWeather, QuestionFillSystem, TriangleFillDesign } from 'svelte-remix';
  
    const version = '0.1.0'
    const title = 'Ascent';
    const tagline = 'Climbing ever higher.';
    const description1 = `
      <p>
        A rocketship blasting off. A runner
        crossing the finish line. 
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
        more valuable interests.
        In the meantime, cost-benefit analysis shows
        that it remains worthwhile to employ
        them as long as they can be kept
        adequately enriched.
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
                <li>Maneuver over or around a terrestrial obstacle.</li>
                <li>Evade an attack from a grounded foe.</li>
                <li>Travel up to 1 mile in <red>3</red> seconds.</li>
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
      },
      {
        title: 'Aerodynamics',
        desc: `
            Launch or throw an object into the air
            and roll <b>Persistence</b>.
        `,
        success: `
            <b>On a success,</b>  the object follows a trajectory you describe,
            no matter how impossible. If something attempts to interact with the object
            during its flight in a way you didn’t describe, such as by swatting it out of the air,
            the object will maneuver itself around it. If your trajectory includes a landing
            or deliberate collision, that will end the object’s flight.
        `,
        additional: `
            <b>For each additional <red>3</red>,</b> you can make one midflight correction to the trajectory.
        `,
        failure: `
            <b>On a failure,</b> the object hangs in the air, fixed in place where you released it.
            It cannot be moved by any means for the next hour.
        `,
      },
      {
        title: 'Vantage Point',
        desc: 'Look up at the sky and roll <b>Attentiveness</b>.',
        success: `
            <b>On a success,</b> you project your sight to a point of view high above.
            You get a general understanding of the lay of the land and movement of crowds,
            and can easily identify any points of interest or commotions.
            You can swap between this view and your normal sight freely until you have a roof over your head.
        `,
        additional: `
            <b>On every third <red>3</red>,</b> you can describe a target you search for.
            If it is present in the area and visible from your vantage point,
            you learn where it is and can zoom in on it for a detailed look.
            If it is moving, you can track it for as long as it remains visible.
        `,
        failure: `
            <b>On a failure,</b> you can't look in any direction but up for the next <red>3</red> hours.
        `,
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

  {#snippet ability(title, desc, success, additional, failure)}
    <div class="flex flex-col justify-center pl-20 py-4 pr-16">
        <h3 class="pb-2">{title}</h3>
        <p class="pb-4">{@html desc}</p>
        <p class="pb-4">{@html success}</p>
        <p class="pb-4">{@html additional}</p>
        <p>{@html failure}</p>
    </div>
  {/snippet}
  
  <article class="flex w-full h-full tracking-[-0.012rem]">
    <div class="basis-[47.5%] pt-10 border-l-2">
      <div class="pl-16 pb-5">
        <h1 class="pb-2">{title}</h1>
        <div class="flex justify-between pr-20">
          <h2>{tagline}</h2>
          <h2 class="relative">
            <span class="text-white text-[1.5rem] pl-[0.8rem]">A<strong class="ml-[0.25rem] text-anomaly-blue">NOMALY</strong></span>
            <TriangleFillDesign class="absolute -top-[0.625rem] w-[2.75rem] h-[2.75rem] text-anomaly-blue z-[-1]" />
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
        </div>
      </div>
      <img src='' alt='' class="" />
    </div>
    <div class="basis-[5%]"></div>
    <div class="basis-[47.5%] flex">
        <div class="flex flex-col justify-center divide-y-2 divide-y-pale-blue-gray">
            {#each abilities as {title, desc, success, additional, failure}}
                {@render ability(title, desc, success, additional, failure)}
            {/each}
        </div>
      <aside class="flex justify-between bg-anomaly-blue w-20 h-full text-vertical text-white pt-10 pb-2">
        <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Anomaly ▾ {title}</div>
        <div class="flex justify-center text-horizontal font-poppins font-bold text-[1.1rem]">v{version}</div>
      </aside>
    </div>
</article>