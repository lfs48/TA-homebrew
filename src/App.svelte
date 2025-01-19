

<script>
  import art from './assets/images/coach.png'
</script>

{#snippet question(num, question, optA, qualA, optB, qualB)}
  <div class="flex space-x-4">
    <div>
      <div class="flex justify-center items-center w-8 h-8 rounded-full bg-agency-red text-white text-[1.5rem] font-bold font-poppins">{num}</div>
    </div>
    <div class="flex flex-col space-y-2">
      <p class="font-bold">{question}</p>
      <ul class="space-y-1">
        <li class="flex space-x-2">
          <p class="text-agency-red text-[0.5rem]">▶</p>
          <p>{optA} (<strong>+<red>3</red> {qualA}</strong>)</p>
        </li>
        <li class="flex space-x-2">
          <p class="text-agency-red text-[0.5rem]">▶</p>
          <p>{optB} (<strong>+<red>3</red> {qualB}</strong>)</p>
        </li>
      </ul>
    </div>
  </div>
{/snippet}

<article class="flex w-screen h-screen tracking-[-0.012rem]">
  <div class="flex">
    <div class="basis-1/2 pl-24 py-10">
      <h1 class="pb-4">Coach</h1>
      <div class="flex">
        <div class="space-y-4">
          <h2>COMPETENCY</h2>
          <h2>No pain, no gain.</h2>
          <p class="w-80">
            Research has shown that most employees
            only expend <red>3</red>0-70% of available
            time and effort in their work, due to
            psychological barriers such as
            “exhaustion” or “the stress coefficient
            of human bones”. Coaches are tasked with
            liberating their fellow employees from
            these mental blockers so that they
            can achieve their true potential.
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Most Important Meal</h3>
          <p class="w-60">Choose a go-to warmup excercise by rolling on the table below or creating your own.</p>
          <div class="flex w-60 border-2 border-agency-red rounded-[1rem] [&>*>h3]:p-2 [&>*>h3]:border-b [&>*>h3]:border-agency-red [&>*>h3:last-child]:border-b-0">
            <div class="basis-1/5 flex flex-col border-r border-agency-red [&>h3]:flex [&>h3]:justify-center [&>h3]:items-center">
              <h3 class="bg-agency-red-light rounded-tl-[0.9rem] font-poppins">1</h3>
              <h3 class="font-poppins">2</h3>
              <h3 class="bg-agency-red-light font-poppins"><red>3</red></h3>
              <h3 class="font-poppins">4</h3>
            </div>
            <div class="basis-4/5 flex flex-col">
              <h3 class="bg-agency-red-light rounded-tr-[0.9rem]">Pushups</h3>
              <h3 class="">Pelvic Thrusts</h3>
              <h3 class=" bg-agency-red-light">Deadlifts</h3>
              <h3 class="">Planking</h3>
            </div>
          </div>
        </div>
        <img src={art} class="w-[25rem] h-[37.5rem]"/>
      </div>
    </div>
    <div class="basis-1/2 flex">
      <div class="flex flex-col">
        <section class="basis-1/5 flex flex-col justify-center border-b-2 border-pale-blue-gray pl-20 space-y-1.5">
          <h3 class="font-bold">Prime Directive</h3>
          <h2>Don't let them get complacent.</h2>
          <span>
            <b>Each time you give a compliment,</b> receive <b>1 Demerit.</b>
          </span>
        </section>
        <div class="basis-[30%] flex border-b-2 border-pale-blue-gray">
          <section class="basis-1/2 border-r-2 border-pale-blue-gray pl-20 py-10 pr-8 space-y-2">
            <h3>Sanctioned Behaviors</h3>
            <p>Receive <b>1 Commendation</b> each time you:</p>
            <ul class="space-y-1 pb-2 [&>li]:flex [&>li]:space-x-2">
              <li>
                <p class="text-agency-red text-[0.5rem]">▶</p>
                <p class="text-agency-red">Reject an excuse.</p>
              </li>
              <li>
                <p class="text-agency-red text-[0.5rem]">▶</p>
                <p class="text-agency-red">Point out a deficiency.</p>
              </li>
              <li>
                <p class="text-agency-red text-[0.5rem]">▶</p>
                <p class="text-agency-red">Push something past its limits.</p>
              </li>
            </ul>
            <p>
              If you complete each Sanctioned Behavior<br>
              at least once during a mission, you<br>
              receive a bonus of <b><red>3</red> Commendations</b><br>
              after superlatives have been awarded.
            </p>
          </section>
          <section class="basis-1/2 px-8 py-10 space-y-4">
            <h3 class="font-bold">
              Initial Requisition:<br>
              Motivational Pamphlet
            </h3>
            <p>
              This little pocket-sized booklet contains a 
              limitless inventory of tautological statements
              and fabricated anecdotes. Once per mission, 
              you can read one off to another person 
              while discussing a physical task that they 
              normally wouldn’t be able to perform, 
              such as walking across lava or 
              flirting with an attractive person. 
              They will succeed at that task the next time
              they attempt it today. Any injury they might 
              incur while performing that task is 
              deferred until the task is completed.
            </p>
          </section>
        </div>
        <section class="flex flex-col">
          <article class="basis-1/2 flex py-8">
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
            <div class="basis-1/2 -mx-4 flex flex-col pr-4 space-y-8">
              {@render question(
                1,
                'When I see someone stumble, I…',
                'Encourage them to watch their step by building pit traps throughout the office.',
                'Persistence',
                'Commandeer their legs to ensure it won’t happen again.',
                'Dynamism',
              )}
              {@render question(
                2,
                'I celebrate my team’s big wins by…',
                'Updating next month’s quotas to reflect the increase in productivity.',
                'Initiative',
                'Publicly shaming the losers.',
                'Presence',
              )}
              {@render question(
                3,
                'The one thing all successful people share in common is…',
                'A dedication to hard work and self improvement.',
                'Duplicity',
                'Success',
                'Attentiveness',
              )}
            </div>
          </article>
          <article class="flex justify-center items-center h-16 ml-20 mr-8 border-2 border-agency-red rounded-[1rem] text-bold text-[1.25rem] font-urw">
            "JUST. DO. IT."
          </article>
        </section>
      </div>
      <aside class="flex bg-agency-red w-32 h-full text-vertical pt-10 px-2">
        <div class="flex items-center text-white font-bold font-urw text-[1.5rem]">Competency ▾ Coach</div>
      </aside>
    </div>
  </div>
</article>