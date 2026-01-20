export default {
  coach: {
    title: 'Coach',
    tagline: 'Just do it!',
    desc: `
      <p>
        Research has shown that most employees only achieve 
        <red>30</red>-70% of their potential revenue generation,
        due to psychological barriers such as hesitation, self-doubt, 
        and the tensile strength of human bones.
        <red>Agency</red> Coaches are tasked with liberating
        their coworkers from these mental blockers 
        to unlock those final few percentage points. 
        They work tirelessly toward the success of others
        by designing training regimens, monitoring performance 
        metrics, and refusing to tolerate anything short of perfection.
      </p>
      <p>
        While many Coaches fuffill the role in a 
        traditional sense by managing the physical fitness
        of their team, they also fill a wide variety of other 
        <red>Agency</red> positions.
        Many of our  dieticians, algebra tutors,
        and podcast hosts are recognized as Coaches.
        Whether you're eyeing the gym or conference podium, 
        the Coaching department welcomes anyone
        with the courage to call out mediocrity
        and the will to put those coddled slackers to work.
      </p>
    `,
    directive: `No pain, no gain.`,
    demeritTrigger: 'Each time you give a compliment',
    sanctioned: [
      'Reject an excuse.',
      'Make someone feel inadequate.',
      'Push something past its limits.',
    ],
    reqName: 'Motivational Pamphlet',
    reqDesc: `
      This little pocket-sized booklet contains a 
      limitless inventory of tautological statements
      and fabricated anecdotes. Once per mission, 
      you can read one off to another person 
      while discussing a mundane task that they 
      normally wouldn’t be able to perform.
      They will succeed at that task whenever they attempt it
      for the next 10 minutes, achieving the best possible results.
      Any injury they might  incur while performing that task is 
      deferred until it is completed.
    `,
    assessment: [
      {
        q: `When I see someone stumble, I...`,
        answerA: `
          Note it for their next performance review.
        `,
        qualityA: 'Attentiveness',
        answerB: `
          Get them back up and running. Immediately.
        `,
        qualityB: 'Dynamism',
      },
      {
        q: `I celebrate my team's big wins by...`,
        answerA: `
          Preparing them to win even bigger next time.
        `,
        qualityA: 'Initiative',
        answerB: `
          Ridiculing the losers.
        `,
        qualityB: `Presence`,
      },
      {
        q: `
          The one thing all successful people share
          in common is...
        `,
        answerA: `
          <red>30</red> raw eggs and <red>300</red> push-ups every morning.
        `,
        qualityA: 'Persistence',
        answerB: `
            Revealed in my bestselling self-help book.
        `,
        qualityB: 'Duplicity',
      },
    ],
    quote: `You can do anything you put your mind, body, time, energy, hopes, and self-worth into.`,
  },
  quant: {
    title: 'Quant',
    tagline: `Exactly what you're expecting.`,
    desc: `
      <p>
        The unknown is scary to think about - particularly for those timelines 
        where the <red>Agency</red> has not yet achieved full market capture of the future. 
        Quants are our first line of defense against the terrors of uncertainty.
        Utilizing statistical models, analytical reasoning, and a dash of prescient vision,
        Quants deliver confident predictions to free others from the tiresome burden
        of reasoning things out for themselves.
      </p>
      <p>
        Wherever there is data to be interpreted and indecision to be resolved,
        you'll find our Quants at work. They serve on the cutting edge as
        financial advisors, meteorologists, sports commentators, and doomsday prophets.
        Intradepartmental research shows that teams leveraging a Quant are <red>30%</red> more efficient,
        successfully capture 60% more <blue>Anomalies</blue>,
        and suffer catastrophic ruin due to misrepresented data in only one out of nine cases.
      </p>
      <p>
        Our Quant department maintains a list of every Agent
        that will ever be a member of it. If your name is on it, you should have already deduced it.
      </p>
    `,
    directive: `Are you sure about that?`,
    demeritTrigger: 'Each time you make a guess',
    sanctioned: [
      'Back up a claim with data.',
      'Highlight a hidden pattern.',
      'Simplify the equation.',
    ],
    reqName: 'Crystal Tetrahedron',
    reqDesc: `
      This pyramidal liquid-crystal display encases a cutting-edge <red>trinary</red> supercomputer.
      Once per mission when things go awry, you may reveal it was but a potential outcome
      you were simulating on the device. Snap back to Reality the last time you were in
      a neutral position or <red>3</red> minutes ago, whichever is nearer.
      Game quantities such as <b>Commendations</b>, <red>Demerits</red>,
      and <b>Quality Assurances</b> return to their prior values.
    `,
    reqDesc2: `
      This sleek triangular wristwatch displays an indecipherable maze of ever-shifting graphs and figures.
      Once per mission when things goe awry, you may reveal it was but a potential outcome
      you were simulating on the device. Snap back to Reality the last time you were in
      a neutral position or <red>3</red> minutes ago, whichever is nearer.
      Game quantities such as <b>Commendations</b>, <red>Demerits</red>,
      and <b>Quality Assurances</b> return to their prior values.
    `,
    assessment: [
      {
        q: `When presented with a dataset to sift through, my first step is to...`,
        answerA: `
          Scan it for statistical <blue>Anomalies</blue>.
        `,
        qualityA: 'Initiative',
        answerB: `
          Apply a <red>Stable</red> sorting algorithm.
        `,
        qualityB: 'Professionalism',
      },
      {
        q: `When I discover an error in my analysis, I...`,
        answerA: `
          Determine the odds of anyone finding out.
        `,
        qualityA: 'Subtlety',
        answerB: `
          Reveal it was a deliberate test of our review process.
        `,
        qualityB: 'Duplicity',
      },
      {
        q: `
          I walk into the office to find the bits and chunks of my coworker splattered all over the floor. I shall...
        `,
        answerA: `
          Study the scatter plot.
        `,
        qualityA: 'Attentiveness',
        answerB: `
          Extrapolate the remainder of their life.
        `,
        qualityB: 'Empathy',
      },
    ],
    quote: `
      Everything's a 33% chance: It either happens, doesn't happen, or something else happens.
    `,
  },
}