<script>
    import { abilityBlock } from '../../../components/ability-block.svelte';
    import Triangle from '../../../components/triangle.svelte';
  
    const title = 'Ascent';
    const tagline = `Going up!`;
    const description = `
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
        Obsessed with freedom and possibility,
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
  
    const abilities = [
      {
        title: 'Liftoff',
        desc: 'While you are unburdened, kick your heels off the ground and roll <b>Initiative</b>.',
        success: `
        <p>
            <blue>On a success,</blue> you take off flying to perform
            one of the following aerial stunts:
        </p>
        <ul>
            <li>Maneuver around any obstacle.</li>
            <li>Evade an attack.</li>
            <li>Travel up to one mile in <red>3</red> seconds.</li>
        </ul>
        <p>
            If you're still airborne after performing your stunt,
            you can glide until your feet touch the ground.
        </p>
        `,
        additional: `
          <blue>For every additional <red>3</red>,</blue> you can
          perform an additional stunt immediately or at any time
          during your glide.
        `,
        failure: `
          <red>On a failure,</red> you fly directly upward uncontrollably.
          If there’s something in your way, receive one Harm from crashing through it.
          You fall back down after about a minute, receiving one Harm if your landing isn’t softened.
        `,
        question: 'When I fly, I feel...',
        answers: [
            {
                answer: 'Empowered.',
                code: 'S1',
            },
            {
                answer: 'Free.',
                code: 'W1',
            }
        ],
      },
      {
        title: 'Flightpath',
        desc: `
          As you launch or throw an object into the air,
          lock eyes on it and roll <b>Persistence</b>.
        `,
        success: `
            <p>
                <blue>On a success,</blue> you have control over the object’s 
                trajectory for as long as you’re looking at it. 
                You can freely direct its velocity and rotation, 
                though external forces can steer it off track.
            </p>
            <p>
                Your control ends if the object lands or if you look away for more than 3 seconds.
                If the object is airborne when your control ends,
                it follows its current trajectory to conclusion.
            </p>
        `,
        additional: `
            <p>
                <blue>On every third <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>The object pierces through things it collides with without being damaged.</li>
                <li>You can operate the object while controlling it (e.g. press buttons, pull triggers).</li>
                <li>The object leaves behind a trail of one of the following as it flies:
                confetti; dense fog; pesticides; napalm; propaganda leaflets.</li>
            </ul>
        `,
        failure: `
          <red>On a failure,</red> the object hangs in the air, fixed in place where you released it.
          It cannot be moved by any means for the next hour.
        `,
        question: 'My piloting style is best described as...',
        answers: [
            {
                answer: 'Precise.',
                code: 'A2',
            },
            {
                answer: 'Whimsical.',
                code: 'P2',
            }
        ],
      },
      {
        title: 'Vantage Point',
        desc: `
          Envision someone you're searching for.
          Look down upon a reflective surface and roll <b>Attentiveness</b>.
        `,
        success: `
          <blue>On a success,</blue> the reflection is replaced by an aerial view
          of the target. It follows them as they move and can be zoomed
          in and out, but is bounded by any ceilings above them.
          The view lasts until the surface is disturbed or
          until you move away from it.
        `,
        additional: `
          <blue>On every third <red>3</red>,</blue> one person or object
          can fall through the reflection and onto the target.
          It must fit through the surface.
        `,
        failure: `
          <red>On a failure,</red> the target looks up and sees you.
          They become aware of who you are and that you were watching them.
          Your surface then shatters.
        `,
        question: 'I look down...',
        answers: [
            {
                answer: 'On others.',
                code: 'P3',
            },
            {
                answer: `At where I'm landing.`,
                code: 'D1',
            }
        ],
      },
    ];
  </script>

<style>
    @reference "../../../app.css";
    h1, h3 {
        @apply
        font-bold
        text-anomaly-blue
        leading-none
    ;}
    p, div {
        @apply
        leading-[1.25rem]
    ;}
</style>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    <div>
        <div class="flex justify-between items-end">
            <h1 class="text-[3rem] pb-1">{title}</h1>
            <h3 class="relative leading-none pr-24">
                <span class="absolute -left-[0.25rem] top-[0.35rem] text-white text-[1.5rem] pl-[0.75rem]">A<blue class="ml-[0.11rem]">NOMALY</blue></span>
                <Triangle fillColor="#3381ff"/>
              </h3>
        </div>
        <h3 class="pb-8 text-[1.25rem]">{tagline}</h3>
        <p class="space-y-2">{@html description}</p>
    </div>
    {#each abilities as ability}
        {@render abilityBlock(ability)}
    {/each}
</div>