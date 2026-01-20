export default {
    ascent: {
        title: 'Ascent',
        tagline: `Going up!`,
        desc:`
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
        `,
        abilities: [
            {
                title: 'Liftoff',
                desc: 'While you are unburdened, kick your heels off the ground and roll <b>Initiative</b>.',
                success: `
                <p>
                    <blue>On a success,</blue> you take off flying. Your initial burst of speed allows you
                    to fly up to a mile per second for <red>3</red> seconds, avoiding all attacks and obstacles
                    as you do so. If you're still airborne after <red>3</red> seconds, you enter a gentle glide
                    until your feet touch the ground.
                </p>
                `,
                additional: `
                <p>
                    <blue>For every additional <red>3</red>,</blue> choose one:
                </p> 
                <ul>
                <li>
                    You get an additional burst of speed either immediately
                    or at any time during your glide.
                </li>
                <li>
                    You can carry one other person or cumbersome object with you
                    for the duration of your flight.
                </li>
                </ul>
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
                        code: 'S4',
                    },
                    {
                        answer: 'Free.',
                        code: 'W2',
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
                        <blue>On a success,</blue> you can steer the object's flight trajectory
                        for as long as you're looking at it. It maintains the velocity you launched it with.
                        External forces can still influence it.
                    </p>
                    <p>
                        Your control ends if the object lands or if you look away for more than <red>3</red> seconds.
                        If the object is airborne when your control ends,
                        it follows its current trajectory to conclusion.
                    </p>
                `,
                additional: `
                    <p>
                        <blue>On every third <red>3</red>,</blue> choose one:
                    </p>
                    <ul>
                        <li>You can accelerate and deccelerate the object at will while controlling it.</li>
                        <li>The object pierces through the next thing it collides with without being damaged.</li>
                        <li>You can operate the object while controlling it (e.g. press buttons, pull triggers).</li>
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
                        code: 'P3',
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
                        code: 'P4',
                    },
                    {
                        answer: `At where I'm landing.`,
                        code: 'D1',
                    }
                ],
            },
        ],
    },
    judgment: {
        title: 'Judgment',
        tagline: `And jury, and executioner.`,
        desc:`
          <p>
            Judgment is the voice in the back of your head that tells you right from wrong.
            Judgment is the strike of lightning sent from the heavens to purge the wicked.
            Judgment is the feather upon the scale that weighs the soul.
            Judgment is absolute, unyielding, and eternal.
          </p>
          <p>
            These <blue>Anomalies</blue> act as arbiters of right and wrong, scrutinizing conduct
            and enacting punishment. They operate in a milieu of guilt before innocence,
            prescription before discretion, and retribution before mercy. They are often
            born in prisons, elementary schools, and the back alley scenes of vigilantism.
            Their presence is felt as a leaden aura, a sense of being watched from all directions,
            forcing you to watch your every step.
          </p>
          <p>
            Agents resonant with such Anomalies often have a rigid sense of justice,
            and take it upon themselves to enforce it upon others.
            As the <red>Agency's</red> mission is objectively morally correct,
            this never causes any issues. If you find yourself working alongside a
            Judgment Agent whose code of ethics seems to be at odds with our purpose
            to Stabilize Reality, be aware that they are an impostor and should
            be subdued immediately for transport to the Vault.
          </p>
        `,
        abilities: [
            {
                title: 'I Know What You Did',
                desc: 'When you make someone feel a pang of guilt, look them in the eye and say "I know what you did." Roll <b>Presence</b>.',
                success: `
                <p>
                    <blue>On a success,</blue> the target’s greatest source of guilt
                    comes to the forefront of their mind for as long as they’re in your presence.
                    You learn what this is, and they know you know it.
                    If you suggest an act of penance along one of the following lines, they will pursue it.
                </p>
                <ul>
                    <li>Self-flagellation.</li>
                    <li>Public confession.</li>
                    <li>Making amends.</li>
                </ul>
                `,
                additional: `
                <p>
                    <blue>On six or more <red>3s</red>,</blue> the target will undertake any arbitrary act of penance you describe.
                </p> 
                `,
                failure: `
                <red>On a failure,</red> you absolve the target’s guilt and assume it for yourself.
                Whatever they believed themselves guilty of, you are somehow the one truly responsible for it.
                Now <i>they</i> know what <i>you</i> did.
                `,
                question: `When I'm suspicious of someone, I...`,
                answers: [
                    {
                        answer: 'Keep a close eye on them.',
                        code: 'L1',
                    },
                    {
                        answer: 'Go dig up some dirt.',
                        code: 'B4',
                    }
                ],
            },
            {
                title: 'Eye for an Eye',
                desc: `
                    When you or a nearby ally is hurt or wronged,
                    give a thumbs down to the perpetrator and roll <b>Dynamism</b>.
                `,
                success: `
                    <p>
                        <blue>On a success,</blue> you are empowered to inflict the same wrong or hurt
                        onto the perpetrator. No one will stop you, and those who are witness
                        to the event will approve of your actions.
                    </p>
                `,
                additional: `
                    <p>
                        <blue>On every third <red>3</red>,</blue> you may inflict an additional instance
                        of that hurt or wrong to the perpetrator.
                    </p>
                `,
                failure: `
                    <red>On a failure,</red> the same hurt is caused again to the one who was hurt,
                    to the perpetrator, to you (if you weren't already the one hurt), or to a random bystander.
                `,
                question: 'When injustice is done, I...',
                answers: [
                    {
                        answer: 'Hunt down those responsible.',
                        code: 'C1',
                    },
                    {
                        answer: 'Apply the full force of the law.',
                        code: 'R1',
                    }
                ],
            },
            {
                title: 'Fair Share',
                desc: `
                Choose two targets near you and identify a quantifiable property
                that one has more of than the other (e.g. length, saturation of the color yellow,
                christmas ornamentation). Clap your hands and roll <b>Empathy</b>.
                `,
                success: `
                <blue>On a success,</blue> the property is redistributed evenly between the two targets
                such that they each have an equal amount of it. The effect lasts until you separate your hands.
                `,
                additional: `
                    <p>
                        <blue>On every third <red>3</red>,</blue> choose one:
                    </p>
                    <ul>
                        <li>
                        You may choose an additional target.
                        Chosen properties are equally redistributed among all targets.
                        </li>
                        <li>
                        You may choose an additional property to equally redistribute between the targets.
                        </li>
                        <li>
                        The effect lasts an additional <red>30</red> minutes after you separate your hands.
                        </li>
                    </ul>
                `,
                failure: `
                <red>On a failure,</red> the property is halved in the target with less or
                doubled in the target with more, chosen at random. This lasts until
                you touch both targets at the same time.
                `,
                question: `If there's a disagreement in the group, I will...`,
                answers: [
                    {
                        answer: 'Find consensus.',
                        code: 'S3',
                    },
                    {
                        answer: `Suggest splitting up.`,
                        code: 'S1',
                    }
                ],
            },
        ],
    }
}