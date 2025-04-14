export default {
    A1: {
        type: 'Ability',
        title: "Aerodynamics",
        desc:`
            Wet your index finger and stick it up in thr air. Roll <b>Dynamism.</b>
        `,
        success:`
            <p>
                <blue>On a success,</blue> you take control of the flow of air around you.
                You can direct it to follow any path or pattern you describe,
                with a maximum range extending about the size of a city block
                centered on you. You maintain control until you make another roll
                or put your finger down.
            </p>
            <p>
                The maximum intensity of the air flow you can produce
                is determined by the number of <red>3s</red> rolled.
            </p>
            <ul>
                <li>1-2: A stiff breeze; enough to move loose objects.</li>
                <li><red>3</red>-4: A powerful gale; enough to push people and heavy objects around.</li>
                <li>5-6: Hurricane winds; enough to sweep up anything not anchored to the ground.</li>
                <li>7+: Apocalyptic winds; enough to uproot buildings.</li>
            </ul>
        `,
        failure:`
            <p>
                <red>On a failure,</red> you are swept up by a sudden wind and blown away
                to a distant and inconvenient location.
            </p>
        `,
    },
    A2: {
        type: 'Ability',
        title: 'Autopilot',
        desc:`
            When you activate <blue>Flightpath</blue>, instead of locking eyes on the object,
            you can lock eyes on a target or visualize one whose location you know.
            When you do so, roll <b>Professionalism</b> instead of Persistence and use the following text:
        `,
        success:`
            <p>
                <blue>On a success,</blue> the object will autonomously guide itself toward the target,
                avoiding all obstacles and mundane attempts to disturb it while doing so.
                Choose whether the object safely arrives at the target or violently collides with it.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>You or one ally can hitch a ride.</li>
                <li>It's guaranteed to arrive within 30 seconds.</li>
                <li>It's disguised as a mundane flying animal of similar size until it arrives.</li>
            </ul>
        `,
        failure:`
            <p>
                <red>On a failure,</red> the object's target becomes one that's incredibly
                inconvenient for you. It will perform at least one physics-defying midair stunt
                on its way there.
            </p>
        `,
        question:`
            I get things to...
        `,
        answers: [
            {
                answer: 'Where I want them to be.',
                code: 'H2',
            },
            {
                answer: 'Where they need to be.',
                code: 'G1',
            },
        ],
    },
    B1: {
        type: 'Ability',
        title: 'Bounceback',
        desc:`
            As you land from any fall <i>(from a height, from grace, through the ranks,
            etc.)</i>, relax and bend your knees. Roll <b>Duplicity</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> whatever space or structure you just fell through
                is inverted. Wherever you landed is now at the top: the floor is now the ceiling,
                last place is now first, etc.
            </p>
        `,
        tri:`
            <p>
                <red>On Triscendence,</red> everyone considers it to have
                always been this way.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> a hole opens in the space so that you fall
                even further down than what was previously possible. You land with
                spectacular embarrassment and/or injury. The gap is permanent and
                obvious to everyone.
            </p>
        `,
    },
    D1: {
        type: 'Ability',
        title: 'Divebomb',
        desc:`
            <p>
                You always land gracefully and unhurt from a fall.
            </p>
            <p>
                As you fall from a height, choose a target beneath you to land on
                and roll <b>Dynamism</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> you land on the target, causing it Harm
                proportional to the height of your fall.
            </p>
            <ul>
                <li>
                    <b>One Harm:</b> Negligible fall less than <red>3</red> feet,
                    e.g. jumping onto someone.
                </li>
                <li>
                    <b>Two Harm:</b> Between <red>3</red> and <red>300</red> feet.
                </li>
                <li>
                    <b><red>3</red> Harm:</b> More than <red>300</red> feet.
                </li>
                <li>
                    <b>Five Harm:</b> An astronomical or anomalous height.
                </li>
            </ul>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> you can bounce once,
                dealing the same Harm again to the target or to a different one near it.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> you miss the target and land on a nearby ally or bystander.
                You both take the Harm.
            </p>
        `,
        extra: [
            {
                type: 'desc',
                text: `
                    <p>
                        In addition, when you activate the "On every third <red>3</red>" effect of <blue>Vantage Point</blue>
                        to drop yourself through the surface onto the target, you can immediately activate
                        the success effect of <blue>Divebomb</blue> choosing the same target.
                    </p>
                `
            },
        ],
        question:`
            When I start to fall, I...
        `,
        answers: [
            {
                answer: 'Lighten my load.',
                code: 'J1',
            },
            {
                answer: 'Brace for impact.',
                code: 'B1',
            }
        ],
    },
    F1: {
        type: 'Ability',
        title: 'Flock Together',
        desc:`
            <p>
                You can fluently understand and whistle birdsong.
                Birds are empathetic toward you and will readily perform
                simple favors for you in exchange for treats.
            </p>
            <p>
                When you're in need of help, extend your arm out as a perch
                and roll <b>Presence</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> a bird of your choice (either an
                individual bird or a particular species) arrives to help you.
                It will perform one task you give it to the best of its ability
                before leaving.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> you can augment the bird
                in one of the following ways while it's helping you.
            </p>
            <ul>
                <li>You can see through its eyes and communicate with it telepathically.</li>
                <li>It can outmaneuver any mundane foe or <blue>Minor Anomaly</blue>.</li>
                <li>Any mundane person seeing it fly becomes fixated on it, ignoring
                anything going on at ground level.</li>
            </ul>
        `,
        tri:`
            <red>On Triscendence,</red> the bird acts as your loyal companion for the rest of the mission.
        `,
        failure:`
            <p>
                <red>On a failure,</red> an ornery bird arrives to harass and torment you.
                It will demand something from you and won't leave until you satisfy it.
                If you hurt it, birds will shun you until you spend at least <red>3</red>
                hours feeding birds at local parks.
            </p>
        `,
        extra: [
            {
                type: 'desc',
                text:`
                    <p>
                        When you use <blue>Wings of Change</blue> to take an avian form, 
                        you can activate the success effect of <blue>Flock Together</blue>,
                        calling a bird of the same kind you turned into.
                    </p>
                `
            }
        ]
    },
    G1: {
        type: 'Ability',
        title: 'Guidemarker',
        desc:`
            As people fly through life, you can steer their trajectories. Choose a person
            and describe a goal or destination for them. Roll <b>Empathy</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> the target becomes determined to reach that goal
                and charts their own course toward it, working towards it to the best
                of their ability. If it isn't possible for them, they will still try
                until they're forced to give up.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> you can describe a specific step
                they'll have to take to reach their goal, and they will take it.
            </p>
        `,
        tri:`
            <red>On Triscendence,</red> they're guaranteed to succeed.
        `,
        failure:`
            <p>
                <red>On a failure,</red> they're given an absurd goal, chosen by the GM,
                that they cannot possibly achieve on their own and is of no benefit to you.
                Until they succeed, anything you attempt to do that isn't directly related
                to helping them achieve that goal will fail. This includes <blue>Anomaly Abilities</blue>.
            </p>
        `,
    },
    H1: {
        type: 'Ability',
        title: 'Heart of the Swarm',
        desc:`
            <p>
                You can sense and decipher insect pheromones,
                and can produce your own to communicate with them.
            </p>
            <p>
                When you use <blue>Wings of Change</blue> to take an insectoid shape,
                a swarm of similar insects will form around you. They will follow your lead
                to amplify the effectiveness of whatever mundane actions you perform
                as a bug <red>300</red>-fold. Any Harm you would receive while the swarm
                is present is absorbed by it instead, causing it to disperse.
                It reforms around you again after about a minute if you're still a bug.
            </p>
        `
    },
    H2: {
        type: 'Ability',
        title: 'Hijack',
        desc:`
            You can trigger <blue>Flightpath</blue> and <blue>Autopilot</blue>
            on anything airborne - not just objects, and not just things you threw yourself.
        `
    },
    H3: {
        type: 'Ability',
        title: 'Hit the Gas',
        desc:`
            Slowly exhale a deep breath and roll <b>Subtlety<b>.
        `,
        success:`
            <blue>On a success,</blue> you disperse into a cloud of atmospheric gas.
            You are intangible and can move freely in <red>3</red> dimensions,
            though air currents can push you around and very strong ones can Harm you.
            You remain in this form until you choose to condense back into a solid.
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>You can manipulate loose objects inside you.</li>
                <li>You become a nauseating gas.</li>
                <li>You become a suffocating gas.</li>
                <li>You become a toxic gas.</li>
                <li>You become a cryogenic gas.</li>
                <li>You become a flammable gas. Ignition doesn't Harm you in gaseous form.</li>
            </ul>
        `,
        failure:`
            <red>On a failure,</red> foul-smelling opaque gas pours from all your
            facial orifices for the next <red>3</red> hours. You can't use this
            ability again during that time.
        `
    },
    J1: {
        type: 'Ability',
        title: 'Jettison',
        desc: `
            When something is weighing you down, empty your pocket and roll <b>Professionalism</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> you cast it aside. Whatever it was, it falls from you
                and you no longer possess it. If it wasn't already an object, it manifests as one.
                You cannot pick it back up or make it a part of yourself again.
            </p>
        `,
        tri:`
            <red>On Triscendence,</red> it falls onto someone else nearby. They now bear that burden.
        `,
        failure:`
            <p>
                <red>On a failure,</red> the weight becomes too much to bear. Whatever your burden was,
                you are crushed beneath it and cannot get back up on your own. Only help from
                a Relationship or <blue>Anomalous</blue> assistance from another Resonant can relieve you.
            </p>
        `,
    },
    M1: {
        type: 'Ability',
        title: 'Master of Puppets',
        desc:`
            <p>
                You can now shift your perspective of Reality from first to <red>3rd</red> person at will.
                When you do so, you perceive the world from an aerial view above yourself, as if targeting
                yourself with the success effect of <blue>Vantage Point</blue>.
            </p>
            <p>
                You can now activate <blue>Puppeteer</blue> by dangling a string toward any target
                in your field of view, and the ability no longer ends when you use it again.
            </p>
        `
    },
    M2: {
        type: 'Ability',
        title: 'Metamorphosis',
        desc:`
            When you use <blue>Wings of Change</blue>, you may transform
            into a chimera of up to <red>3</red> flying beasts or vehicles.
            The chimeric form has the most useful traits of all its constituents,
            as identified by you.
        `
    },
    M3: {
        type: 'Ability',
        title: 'Mile High Club',
        desc:`
            <p>
                You can trigger <blue>Wings of Change</blue> while grounded,
                and landing no longer ends the transformation - you can instead
                end it whenever you choose.
            </p>
            <p>
                When you use <blue>Wings of Change</blue> to transform into
                a vehicle, passengers who are securely buckled in experience
                a smooth and comfortable ride regardless of how you're flying,
                and cannot be Harmed or targeted by foes.
            </p>
        `
    },
    N1: {
        type: 'Ability',
        title: 'Need a Lift?',
        desc:`
            When someone else is feeling down or stuck in a rut, describe a higher position or state
            you'd like to elevate them to. Offer them a hand up and roll <b>Presence</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> the target takes your hand and is lifted up
                to the destination you described. They perceive themselves as having
                achieved it mundanely through their own effort, with some helpful encouragement
                from you. They remain at this elevated position for up to <red>30</red> minutes
                after letting go of your hand, after which they will fall back down
                unless they can stay up there on their own.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red></blue>, you can elevate the target one additional way.
            </p>
        `,
        tri:`
            <red>On Triscendence,</red> one way in which the target was elevated is made permanent.
            Nothing can ever bring them down.
        `,
        failure:`
            <red>On a failure,</red> the target's sense of their own ability is
            dramatically inflated. They immediately rush into a risky and/or
            dangerous situation that they're convinced they can handle, but
            absolutely cannot. Mundane means won't deter them.
        `,
        extra: [
            {
                type: 'desc',
                text:`
                    In addition, <blue>Puppeteer</blue> gains the following additional text:
                `
            },
            {
                type: 'additional',
                text:`
                    <blue>On six or more <red>3s</red></blue>, you can activate the success effect
                    of <blue>Need a Lift?</blue> on the target. When activated this way, the lift
                    lasts for as long as your puppeteering does, and the target is unaware that
                    they've been helped at all.
                `
            }
        ]
    },
    P1: {
        type: 'Ability',
        title: 'Power UP!',
        desc:`
            <p>
            When you roll for an <blue>Anomaly</blue> ability other than this one,
            after seeing the result of the roll but before the effects are resolved,
            you may decide that you need more power to achieve what you want.
            Clench your fists, yell a catchphrase, and roll <b>Persistence</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> you unleash a surge of inner power. Add a number of <red>3s</red>
                to the targeted roll equal to <red>triple</red> the number of <red>3s</red>
                rolled for this ability. This effect can make a roll exceed six <red>3s</red>
                and can potentially turn a <red>failure</red> into a <blue>success</blue>.
            </p>
        `,
        tri:`
            <red>On Triscendence,</red> the targeted roll achieves <red>Triscendence</red>
            as well.
        `,
        failure:`
            <red>On a failure,</red> <red>triple</red> the amount of <blue>Chaos</blue>
            generated by this roll and the targeted roll.
        `
    },
    P2: {
        type: 'Ability',
        title: 'Pump it Up',
        desc:`
            Touch a target while blowing air into your thumb and roll <b>Persistence</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> the target inflates, behaving as if it were a helium balloon.
                It slowly deflates over the next <red>30</red> minutes, at which point it
                returns to normal. The target is highly susceptible to puncture in this state,
                and receives at least two Harm if ruptured.
            </p>
        `,
        additional:`
            <p>
                <blue>For every additional <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>Inflate an additional target within your reach.</li>
                <li>Over-inflate a target to pop it.</li>
                <li>Twist a target into a balloon sculpture.</li>
            </ul>
        `,
        failure:`
            <red>On a failure,</red> you deflate. You remain in a helpless shrivelled state
            until someone pumps a sufficient amount of air into you.
        `,
        extra:[
            {
                type: 'desc',
                text:`
                    <p>
                        In addition, you can trigger <blue>Flightpath</blue> when you
                        inflate a target with <blue>Pump it Up</blue>, even if the target
                        wasn't an object.
                    </p>
                `
            }
        ],
        question: 'When the wind blows against me, I...',
        answers: [
            {
                code: 'A1',
                answer: 'Make it blow my way.'
            },
            {
                code: 'H3',
                answer: 'Go where it takes me.'
            }
        ]
    },
    P3: {
        type: 'Ability',
        title: 'Puppeteer',
        desc:`
            While looking down on someone from above,
            dangle down a string toward them and roll <b>Subtlety</b>.
        `,
        success:`
            <blue>On a success,</blue>, your string attaches to the target.
            You have control over the movement of their limbs,
            and can freely adjust the length of your string to dangle them
            up and down. Your control ends if you ever look up at the target,
            if the string is cut, or you use this ability again.
        `,
        additional:`
            <blue>On every third <red>3</red>,</blue> you can dangle another
            string at an additional target beneath you.
        `,
        tri:`
            <red>On Triscendence,</red> you have complete control over the targets.
        `,
        failure:`
            <red>On a failure,</red> a string materializes on a surface above you
            and attaches to you. While the string is attached you are under the control
            of an enigmatic entity, portrayed by the GM, who will use you to further its
            own goals. The string can't be cut or detached by mundane means.
        `,
        question: 'I elevate myself above others so that I can...',
        answers: [
            {
                code: 'N1',
                answer: 'Help them climb higher.'
            },
            {
                code: 'M1',
                answer: 'Make them my pawns.'
            }
        ],
    },
    S1: {
        type: 'Ability',
        title: 'Superfly',
        desc:`
            <p>
                Activating <blue>Liftoff</blue> no longer requires you to be unburdened.
                During <blue>Liftoff's</blue> bursts of speed you can additionally:
            </p>
            <ul>
                <li>Break free of any physical restraints.</li>
                <li>Pick up, carry, and throw any amount of weight. When you glide,
                you can continue to carry any weight you've already picked up.</li>
                <li>Intercept attacks aimed at other targets, taking them yourself.</li>
            </ul>
        `,
        question: 'Others look up to me because of...',
        answers: [
            {
                code: 'T1',
                answer: 'What I stand for.',
            },
            {
                code: 'P1',
                answer: "What I'm capable of.",
            },
        ],
    },
    T1: {
        type: 'Ability',
        title: 'To the Rescue',
        desc:`
            <p>
                When you gain this ability, design a personal emblem representing
                your heroic values.
            </p>
            <p>
                Whenever you save or help a mundane person using an <blue>Anomaly Ability</blue>,
                you can give them a token bearing your emblem. When they need your help,
                they can hold the token up to call for you. You become aware of what trouble
                they're in. If you choose to help, you can immediately fly to wherever they are
                and activate the success effect of <blue>Liftoff</blue> upon arrival.
            </p>
            <p>
                Each of your <yellow>Relationships</yellow> also gets a token, unless
                you choose otherwise. Play out a short scene of you giving each of them theirs.
            </p>
            <p>
                People bearing your tokens can't be <b>Loose Ends</b> as long as
                they believe you will protect them.
            </p>
        `
    },
    W1: {
        type: 'Ability',
        title: 'Wings of Change',
        desc:`
            While gliding through the air, flap your arms and roll <b>Duplicity</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> you take on a form better suited for flight.
                You transform into any mundane flying creature or vehicle you're
                familiar with. You possess whatever capabilities your new form
                would normally have.
            </p>
            <p>
                You can use <blue>Liftoff</blue> while transformed, but making a roll
                for any other purpose, or landing, ends the transformation.
            </p>
        `,
        additional:`
            <blue>On six or more <red>3s</red>,</blue> you can take that form again
            any time you're airborne for the remainder of the mission.
        `,
        failure:`
            <red>On a failure,</red> you partially transform - just enough to make you
            extremely aerodynamically unstable. Anyone who sees your botched transformation
            is likely to become a <b>Loose End</b>. You revert back to your original form
            after spending at least <red>3</red> minutes lying flat on the ground.
        `,
        extra: [
            {
                type: 'desc',
                text:`
                    In addition, <blue>Liftoff</blue> gains the following additional text:
                `
            },
            {
                type: 'additional',
                text:`
                    <blue>On six or more <red>3s</red></blue>, you can activate the success effect
                    of <blue>Wings of Change</blue> as you take flight.
                `
            },
        ],
        question:`
            When you use <blue>Be Known</blue> for this ability, instead of asking a question,
            mark off a box in one the following tracks whose condition you met during
            the previous mission. You can fill all four tracks and receive all four abilities.
        `,
        answers: [
            {
                code: 'F1',
                answer: 'I transformed into a bird.',
                boxes: 2,
            },
            {
                code: 'H1',
                answer: 'I transformed into a bug.',
                boxes: 2,
            },
            {
                code: 'M3',
                answer: 'I transformed into a passenger aircraft.',
                boxes: 2,
            },
            {
                code: 'M2',
                answer: 'I transformed into at least <red>3</red> different things.',
                boxes: 2,
            },
        ],
    },
}