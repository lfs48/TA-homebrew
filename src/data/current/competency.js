export default {
  coach: {
    title: 'Coach',
    tagline: 'Just do it!',
    desc: `
      <p>
        Research has shown that most employees only achieve 
        <red>30</red>-70% of their potential revenue generation,
        due to psychological barriers such as hesitation, self-doubt, 
        and the stress coefficient of human bones.
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
      'Highlight a flaw.',
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
      for the rest of the mission, achieving the best possible results.
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
          A dedication to hard work and self improvement.
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
}