

<script>
    import { FireFillWeather, QuestionFillSystem, TriangleFillDesign } from 'svelte-remix';
  
    const version = '0.1.0'
    const title = 'Scale';
    const tagline = `Perfectly balanced.`;
    const description1 = `
      <p>
        A murderer struck by lightning.
        .
        The heat death of the universe.
        Scale <blue>Anomalies</blue>
        maintain symmetries
        and pass judgment on those who break them.
      </p>
      <p>
        Absolute and exacting, Scales 
        Every action has an equal and opposite reaction
        because Scales ensure that it is so.

      </p>
      <p>
        
      </p>
      <p>
        Scale Agents are crucial lynchpins in
        otherwise discordant teams, unifying opposing
        viewpoints to provide a balanced central perspective.

        They can serve as a counterwight to extreme excess,
        and are always happy to play devil's advocate.
        They also tend to have a much deeper and more
        intuitive apprecation for the <red>Agency's</red>
        moral imperative to balance ans stabilize reality. 
        If a Scale Agent on your team doesn't fit this description,
        they are an impostor and should be neutralized immediately.
      </p>
    `;

    const description2 = `
      <p>
      </p>
    `
  
    const abilities = [
        {
        title: 'Equilibrium',
        desc: `
            Touch two targets, one with your left hand and one with your right,
            and  identify a property that the first target has more of than the second
            (e.g. size, knowledge of a subject, number of vacation homes owned).
            Roll <b>Empathy</b>.
        `,
        success: `
          <b>On a success,</b> the property is evenly distributed between the
          two targets (e.g. the larger shrinks and the smaller grows until they are the same size). 
          The change persists for <three>3</three> hours or until you touch your hands together.
        `,
        additional: `
          <b>On every third <red>3</red>,</b> you may redistribute an additional
          property between the targets.
        `,
        failure: `
          <b>On a failure,</b> the property is doubled in the first target and/or
          halved in the second, whatever outcome is worse for you. The change is permanent.
        `,
        q: `When I discover I'm playing a rigged game, I...`,
        a1: `Expose the cheating.`,
        a2: 'Start cheating myself.',
      },
      {
        title: 'Eye for an Eye',
        desc: `
          When you or an ally is hurt or Harmed,
          point at the one responsible and roll <b>Dynamism</b>.
        `,
        success: `
          <b>On a success,</b> the same hurt is inflicted back to them.
        `,
        additional: `
          <b>For each additional <red>3</red>,</b> you can inflict
          an additional instance of that hurt to them.
        `,
        failure: `
          <b>On a failure,</b> inflict that hurt to the target, yourself,
          the original victim (possibly yourself again), and a random bystander.
        `,
        q: 'Someone has stolen from me to feed their family. I will...',
        a1: `Punish them for their crime.`,
        a2: 'Share my food willingly.',
      },
      {
        title: 'I Know What You Did',
        desc: 'Look someone in the eye and say "I know what you did." Roll <b>Presence</b>.',
        success: `
          <p>
            <b>On a success,</b> they are overcome with guilt and confess their greatest
            sin to you. You may suggest one of the following means of penance,
            and they will pursue it.
          </p>
          <ul>
            <li>Self-flagellation.</li>
            <li>Repairing the damage.</li>
            <li>Turning themselves in.</li>
          </ul>
        `,
        additional: `
          <b>On six or more <red>3s</red>,</b> you can instead
          propose any specific act of penance you like.
          They will perform it to the best of their ability.
        `,
        failure: `
          <b>On a failure,</b> you absolve them of their sin and assume it for yourself.
          Everyone, including you and the target, believes <i>you</i>
          to be the one responsible for it.
        `,
        q: 'I believe people are...',
        a1: 'Fundamentally good.',
        a2: 'Fundamentally evil.'
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
          <p class="pb-4">{@html success}</p>
          <p class="pb-4">{@html additional}</p>
          <p>{@html failure}</p>
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
      <div class="relative pl-16 pb-40">
        <h1 class="pb-2">{title}</h1>
          <h2 class="relative -top-[2.5rem] -right-[14rem]">
            <span class="text-white text-[1.5rem] pl-[0.8rem]">A<strong class="ml-[0.25rem] text-anomaly-blue">NOMALY</strong></span>
            <TriangleFillDesign class="absolute -top-[0.625rem] w-[2.75rem] h-[2.75rem] text-anomaly-blue z-[-1]" />
          </h2>
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
      <img src='' alt='' class="" />
    </div>
    <div class="basis-[5%]"></div>
    <div class="basis-[47.5%] flex">
        <div class="flex flex-col justify-center w-full divide-y-2 divide-y-pale-blue-gray">
          {#each abilities as {title, desc, success, additional, failure, q, a1, a2}}
            {@render ability(title, desc, success, additional, failure, q, a1, a2)}
          {/each}
        </div>
      <aside class="flex justify-between bg-anomaly-blue w-20 h-full text-vertical text-white pt-10 pb-2">
        <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Anomaly ▾ {title}</div>
        <div class="flex justify-center text-horizontal font-poppins font-bold text-[1.1rem]">v{version}</div>
      </aside>
    </div>
</article>