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
            Cup an object in your hands and describe a task that you want it to perform
            that is appropriate for that kind of object (e.g. broom cleaning, letter delivering itself, etc).
            Exhale onto it and roll <b>Professionalism.</b>
        `,
        success:`
            <p>
                <blue>On a success,</blue> the object will animate and take flight
                to perform the desired task. It does so mundanely and efficiently,
                with skill comparable to an experienced professional. It will avoid
                all obstacles and mundane attempts to disturb it while performing the task.
                Once it is completed, it will gently fall back to the ground.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>It performs the task with <blue>Anomalous</blue> efficiency, completing it in 30 seconds or less.</li>
                <li>Describe an additional task for it to perform after it completes the previous one.</li>
                <li>An additional nearby object of the same kind animates, either to assist with the same task or to perform a different one.</li>
            </ul>
        `,
        failure:`
            <p>
                <red>On a failure,</red> the object animates as a hostile Minor <blue>Anomaly</blue>.
                It immediately takes action against you or your allies before you can respond.
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
                answer: 'Where they need to go.',
                code: 'G1',
            },
        ],
    },
    A3: {
        type: 'Ability',
        title: "Avenged Sevenfold",
        desc:`
            <p>
                Once per mission when you trigger <blue>Eye for an Eye</blue>,
                you may achieve <red>Triscendence</red> without rolling.
            </p>
        `,
    },
    B1: {
        type: 'Ability',
        title: "Balance Patch",
        desc:`
        <p>
            At the beginning of each mission, every player and the GM
            must each secretly nominate two <blue>Anomalous Abilities</blue>:
            one as <b>Underpowered</b>, and one as <b>Overpowered</b>.
            Reveal and count the nominations.
        </p>
        <p>
            The ability most nominated for <b>Underpowered</b> gains
            the following additional text this mission:
        </p>
        <p>
            “When rolling for this ability, add one additional <red>3</red> to the result.”
        </p>
        <p>
            The ability most nominated for <b>Overpowered</b> gains the following additional text this mission:
        </p>
        <p>
            “Apply one additional <b>Burnout</b> when rolling for this ability.”
        </p>
        <p>
            If there is a tie, all <blue>Abilities</blue> with the most nominations for that category receive the additional text.
            Only <blue>Abilities</blue> possessed by an active Agent at the branch may be nominated.
        </p>
        `,
    },
    B2: {
        type: 'Ability',
        title: "Banhammer",
        desc:`
            <p>
                When you gain this ability, write a list of nine words to censor.
                They must be verbs, nouns, or adjectives -
                they may not be articles, conjunctions, etc.
            </p>
            <p>
                Whenever a character portrayed by the GM speaks or writes
                one of your banned words, slam a gavel and roll <b>Initiative</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> the character who used the word is
                forcibly ejected from the space they were occupying.
                An invisible force prevents them from ever entering
                or occupying that space again.
            </p>
        `,
        additional:`
            <p>
                <blue>For each additional 3,</blue> you may replace “the space they were occupying”
                with the next phrase in this sequence: the immediate area →
                the vicinity → the location → the region → the world → the game of <red>Triangle Agency</red>.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> that word is removed from your list,
                and added to the GM’s. You must replace it with a different word
                from the last sentence you spoke. Whenever you speak a word on the GM’s
                banlist, you receive 1 <b>Harm</b> in the form of a bizarre accident involving hammers.
            </p>
        `,
        extra: [
            {
                type: 'desc',
                text:`
                    <p>
                        When you Spend Time on <blue>Anomaly</blue>, you may swap one word
                        on your banlist for a different word, following the same restrictions.
                    </p>
                `
            }
        ],
    },
    B3: {
        type: 'Ability',
        title: 'Bounceback',
        desc:`
            As you land from any fall <i>(from a height, from grace, through the ranks,
            etc.)</i>, relax and bend your knees. Roll <b>Duplicity</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> whatever space or structure you just fell through
                is inverted along with its occupants. Wherever you landed is now at the top: 
                the floor is now the ceiling, last place  gets the prize,
                the private gives orders to the general, etc.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> choose a target to remain in place through the inversion.
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
        B4: {
        type: 'Ability',
        title: 'Buried Lead',
        desc:`
            Dig up the ground where a person stood today and roll <b>Attentiveness</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> you unearth one of the following:
            </p>
            <ul>
                <li>The treasure they keep most guarded.</li>
                <li>The thing they've lost they most want back.</li>
                <li>The secret they hold closest.</li>
            </ul>
            <p>
                If your choice is something intangible, you will find it in the form of
                a piece of writing from the target. Otherwise, you unearth the genuine thing itself.
            </p>
        `,
        tri:`
            <p>
                <red>On Triscendence</red>, you may unearth all three options at once.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> something of yours falls into the hole and is buried.
                It will find its way into that person's possession.
            </p>
        `,
        question:`I keep my troubles...`,
        answers: [
            {
                answer: 'Buried deep.',
                code: 'T1',
            },
            {
                answer: 'Close to my heart.',
                code: 'T2',
            }
        ],
    },
    C1: {
        type: 'Ability',
        title: "Can't Run, Can't Hide",
        desc:`
            <p>
                Dab your thumb into the residue of a wrong done (blood from a wound, tears from an insult, debris from an outburst).
                Smear it across the ground and roll <b>Persistence</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> an incorporeal shade manifests to track down the wrongdoer.
                It cannot be seen by mundane eyes; It moves as quickly as you can follow
                and waits patiently when you cannot; it cannot be distracted or deterred from its task;
                and it can always find the shortest path to its quarry.
            </p>
            <p>
                The shade disappears once it has led you to the quarry.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>The shade will wail to indicate how near the quarry is.</li>
                <li>A ghostly image of the quarry is visible within the shade's form.</li>
                <li>Once the quarry is found, the shade will envelop and
                momentarily immobilize them before disappearing.</li>
            </ul>
        `,
        failure:`
            <p>
                <red>On a failure,</red> the residue indelibly stains your hands.
                For the remainder of the mission, anyone you meet assumes
                you are guilty of the deed it represents.
            </p>
        `,
        question:`
            I serve justice...
        `,
        answers: [
            {
                answer: 'With my own hands.',
                code: 'M1'
            },
            {
                answer: 'With the help of my community.',
                code: 'D2'
            }
        ],
    },
    D1: {
        type: 'Ability',
        title: 'Divebomb',
        desc:`
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
                    <b>Five Harm:</b> An astronomical or <blue>Anomalous</blue> height.
                </li>
            </ul>
            <p>
                You are unhurt by the fall and land gracefully.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> you can bounce onto another target,
                causing it to receive the same Harm. You may bounce onto the same target
                multiple times as long as consecutive bounces are onto different targets.
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
                code: 'B3',
            }
        ],
    },
    D2: {
        type: 'Ability',
        title: "Dogpile",
        desc:`
            <p>
                When someone steps out of line, whistle sharply and roll <b>Presence</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> a nearby mundane observer is sent into a bestial frenzy.
                They become a <blue>Violent Minor Anomaly</blue> that fixates on the target.
                They will attack relentlessly until the target is torn to pieces,
                then return to their mundane selves.
            </p>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> an additional mundane observer becomes frenzied.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> nearby mundane observers close ranks about the target
                to form a <blue>Protective Minor Anomaly</blue> <b>[Threat 0 / Stability 3]</b>
                that will intercept any <b>Harm</b> that might come to them.
            </p>
        `,
    },
    E1: {
        type: 'Ability',
        title: "Exile from the Garden",
        desc:`
            <p>
                You are banished from the game of <red>Triangle Agency</red>.
                Choose a different tabletop roleplaying game.
                You are a character of that game now.
                You retain your knowledge and sense of self,
                but otherwise must exist within the restrictions of your new home.
                If your player wishes to continue portraying you,
                they must find a table playing that game to do so in.
            </p>
        `,
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
                When you use <blue>Wings of Change</blue> to take an avian shape,
                use  the following additional text:
            </p>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> you may choose a nearby ally
                to also transform into a bird. You may choose the kind of bird independently for each target.
            </p>
        `,
        extra: [
            {
                type: 'desc',
                text:`
                    <p>
                        Additionally, <blue>Liftoff</blue> gains the following extra text:
                    </p>
                `
            },
            {
                type: 'desc',
                text:`
                    <p>
                        Each time you get a burst of speed, each ally you've transformed with
                        <blue>Wings of Change</blue> also gets one.
                    </p>
                `
            }
        ]
    },
    F2: {
        type: 'Ability',
        title: "Forbidden Fruit",
        desc:`
            <p>
                You produce a <b>Fruit of Knowledge</b>, sufficient for <red>3</red> bites.
                Each time you eat a bite of the fruit, ask the GM any question.
                They must answer completely and truthfully.
            </p>
            <p>
                No-one else benefits from eating your fruit. Any attempt to alter, copy,
                or reproduce the fruit will cause it to wither and rot.
            </p>
        `,
        questionContext:`
            <p>
                After receiving each answer from the GM, you must answer the following question.
            </p>
        `,
        question:`
            Did you learn something you wish you hadn't?
        `,
        answers: [
            {
                answer: 'Yes.',
                code: 'E1',
                boxes: 1,
            },
            {
                answer: 'No.',
                code: 'R3',
            }
        ],
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
            on any airborne object - not just ones you throw or hold yourself.
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
    I1: {
        type: 'Ability',
        title: "I Can't Let You Do That",
        desc:`
            Shine a red light on someone and roll <b>Initiative</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> you learn the next thing the target will do that will make them feel guilty or shameful.
                Your foreknowledge means that mundane actions you take to prevent the act will succeed
                unless there is Anomalous interference. If you describe the act to other people,
                they will implicitly believe you and judge the target as if they've already done it.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> you may determine one of the following:
            </p>
            <ul>
                <li>Where the act will take place.</li>
                <li>When the act will take place.</li>
                <li>Who the victim(s) will be, if any.</li>
            </ul>
        `,
        failure:`
            <p>
                <red>On a failure,</red> fate seals itself around the both of you.
                The deed will be one that affects you dearly and personally and is guaranteed to come to pass.
                Anything done to attempt to prevent it will only make it worse.
            </p>
        `,
    },
    I2: {
        type: 'Ability',
        title: "I Know What You Are",
        desc:`
            Make a person feel a twinge of self-doubt. Look them in the eye and say
            "I know what you are." Roll <b>Duplicity</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> the trait the target hates most about themselves
                bubbles up to the surface and consumes them. They transform into a twisted,
                monstrous version of themselves embodying that trait. The effect lasts
                until someone hugs them.
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> you may automatically
                apply the success effect of this ability to one person hurt by
                the target in their monstrous form.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> the target sees their worst trait
                reflected in your own eyes, and is freed from their shame.
                You now possess that trait, and they no longer hate themselves for it.
            </p>
        `,
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
    J2: {
        type: 'Ability',
        title: "Jolly Cooperation",
        desc:`
            <p>
                At the start of each mission, choose an adjective. For the duration of the mission,
                all mundane people you encounter strive to make the world more like that adjective.
            </p>
        `,
    },
    L1: {
        type: 'Ability',
        title: "Look What You've Done",
        desc:`
            <p>
                When you witness someone making a mistake, point at the resulting mess
                and say "Look what you've done." Roll <b>Attentiveness</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> the mistake they made redefines them.
                They become incapable of taking any action without repeating that mistake
                or even it worse. Any mundane observer will judge the target exclusively
                by that mistake. The effect lasts until someone offers to help them.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> you may describe an additional 
                consequence of the initial mistake that's now true.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> you absorb the mistake into yourself.
                Any consequences of their mistake are immediately cleaned up.
                Once for the remainder of the mission, the GM may have any action
                you attempt fail in a similar manner to the target's mistake.
            </p>
        `,
        question:`
            I am who I am...
        `,
        answers: [
            {
                answer: 'On my worst day.',
                code: 'I2',
            },
            {
                answer: 'In my worst moments.',
                code: 'I1',
            }
        ],
    },
    M1: {
        type: 'Ability',
        title: "Marvelous Avenger",
        desc:`
            <p>
                Extend your hand to a mundane person who has been done wrong
                and offer to enact revenge on their behalf. Roll <b>Empathy</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> you form a Pact of Vengeance with them.
                They become your avengee, and you become their avenger.
                The following effects apply:
            </p>
            <ul>
                <li>
                    For the purposes of triggering <blue>Eye for an Eye</blue>,
                    treat the wrongdoing against your avengee as if it had just occurred in front of you.
                </li>
                <li>
                    Note the number of <red>3s</red> rolled for this ability.
                    When you activate the success effect of <blue>Eye for an Eye</blue>
                    to enact vengeance on behalf of your avengee, add that many
                    additional <red>3s</red> to the roll.
                </li>
                <li>
                    Your avengee cannot be a <b>Loose End</b>. This effect applies in perpetuity if you successfully fulfill the pact.
                </li>
            </ul>
            <p>
                You may not use this ability while you are already in a pact of vengeance.
                The pact is fulfilled once you have enacted vengeance
                to the avengee’s satisfaction.
            </p>
            <p>
                If you should fail to enact their revenge by the end of the mission or if it becomes impossible
                for you to do so, the pact is broken. Automatically trigger the <red>On a failure</red> effect.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> the avengee disregards their previous hurts in favor of
                a single-minded quest for vengeance against you for failing them. They will appear throughout
                future missions, pouring their time and effort into sabotaging and tormenting you.
                Mundane deterrence short of death is ineffective, and even <blue>Anomalous</blue> means will only
                temporarily hinder them. If they do die, they will continue haunting you in some way.
                Only your utter ruin will sate their thirst for revenge.
            </p>
        `,
        track: {
            description:`
                Each time you successfully fulfill a pact of vengeance, mark a box on the following track.
                When the track is filled, unlock <blue>[A3]</blue>.
            `,
            length: 7,
        }
    },
    M2: {
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
    M3: {
        type: 'Ability',
        title: 'Metamorphosis',
        desc:`
            When you use <blue>Wings of Change</blue>, you may transform
            into a chimera of up to <red>3</red> flying beasts or vehicles.
            The chimeric form has the most useful traits of all its constituents,
            as identified by you.
        `
    },
    M4: {
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
    O1: {
        type: 'Ability',
        title: "Original Sin",
        desc:`
            <p>
                Define a new deadly sin and corresponding punishment. Add them to your list.
            </p>
        `,
    },
    P1: {
        type: 'Ability',
        title: "Painful Choice",
        desc:`
            <p>
                Hold two things, one in each hand. Offer someone a choice between them and roll <b>Persistence</b>.
            </p>
        `,
        success:`
            <p>
                <blue>On a success,</blue> the target is compelled to make a decision between them right now.
                Whichever choice they make, they become bound by it. The option not chosen disappears to them
                forever: it leaves their memory, becomes invisible to them, and if they would touch
                they simply pass through one another.
            </p>
        `,
        additional:`
            <p>
                <blue>On six or more <red>3s</red>,</blue> you may attach a condition to one or both
                of the options (e.g. if you choose the left you must surrender to us; if you choose
                the right you will never eat cheese again) that the target will be bound by if they choose that option.
            </p>
        `,
        tri:`
            <red>On Triscendence,</red> make the choice for them.
        `,
        failure:`
            <red>On a failure,</red> the target takes a third option. They claim both choices,
            and you're left with neither: they disappear to you the same way they would have disappeared
            to the target had they not chosen them.
        `,
    },
    P2: {
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
                <blue>On a success,</blue> choose a quantity represented by a word or numeral
                in the ability's rule text. Increase that quantity by an amount equal to
                the number of <red>3s</red> rolled for this ability.
            </p>
        `,
        failure:`
            <red>On a failure,</red> all quantities represented by words or numerals
            in the ability's rule text become zero.
        `
    },
    P3: {
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
    P4: {
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
                code: 'M2',
                answer: 'Make them my pawns.'
            }
        ],
    },
    R1: {
        type: 'Ability',
        title: "Read the Sign",
        desc:`
            When someone breaks a written rule legible to them from where they broke it,
            point to it and say “Read the sign.” Roll <b>Professionalism</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> the target is punished for breaking the rule.
                If the rule itself describes a mundane penalty or punishment,
                it is immediately inflicted on them. Otherwise a chain of karmic accidents
                will occur to punish them, resulting in them receiving 1 <b>Harm</b>.
            </p>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>An additional target that broke the rule is punished.</li>
                <li>A target is punished with an additional karmic accident.</li>
            </ul>
        `,
        tri:`
            <red>On Triscendence,</red> the targets will never break the rule again.
        `,
        failure:`
            <p>
                <red>On a failure,</red>  the rule is retroactively amended to contain a loophole
                that permits their actions. As punishment for your false accusation,
                a chain of karmic accidents will occur to result in you receiving 1 <b>Harm</b>.
            </p>
        `,
        question:`
            I believe rules should be...
        `,
        answers: [
            {
                answer: 'Handed down from a higher authority.',
                code: 'W1',
            },
            {
                answer: 'Written by me.',
                code: 'B2',
            }
        ],
    },
    R2: {
        type: 'Ability',
        title: "Reflection Symmetry",
        desc:`
            Reflect a target in a mirror and roll <b>Duplicity</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> the target becomes pinned to its reflection.
                By moving and rotating the mirror around, the target is forcibly pushed and pulled
                correspondingly so that its reflection remains fixed in place on the mirror’s surface.
                The target may shift around in place but not move from its position,
                and no other external forces can move it.
                The effect ends when something blocks the target’s reflection or when the mirror shatters.
            </p>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> you may pin an additional target to its reflection.
            </p>
        `,
        tri:`
            <red>On Triscendence,</red> shattering the mirror will also shatter the target,
            automatically activating the success effect of <blue>Separate but Equal</blue> to split it into sevenths.
            You may shatter the mirror at any time during the effect by snapping your fingers.
        `,
        failure:`
            <p>
                <red>On a failure,</red> your own reflection breaks free from the mirror
                and steps out into your world. The mirror shatters behind them, and to return them
                to the mirror world you must touch them with a different mirror.
                If you and your mirror-self make contact you will annihilate
                each other, each receiving five <b>Harm</b>. Your mirror-self craves this -
                hence why your reflection always reaches out to you.
            </p>
        `,
    },
    R3: {
        type: 'Ability',
        title: "Reseeding",
        desc:`
            <p>
                Having consumed the fruit, you are left with a seed. Plant it somewhere in your Region.
                It will have grown to maturity after <red>33</red> units of time have passed at your Branch.
                A single Agent at your branch may then harvest it to unlock <blue>[/F2]</blue>.
            </p>
        `,
    },
    S1: {
        type: 'Ability',
        title: "Separate but Equal",
        desc:`
            Unzip a zipper and roll <b>Duplicity</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> a nearby target is split into two smaller halves.
                All quantifiable properties of the original target are equally distributed among the halves.
                The halves merge back into their original whole if they maintain contact for at least <red>30</red> seconds.
            </p>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> the target is split into an additional equal part
                (i.e. <red>3</red> equal <red>thirds</red>, four equal fourths, etc.). Any two fractions
                may merge back together with one another (e.g. two one-<red>thirds</red> may merge into two-<red>third</red> of the original).
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> a quantifiable property of the target is doubled and another is halved.
                This lasts until you touch it for at least <red>30</red> seconds.
            </p>
        `,
        questionContext:`
            <p>
                After using and resolving Be Known for this or any other ability,
                if you have the same number of boxes checked for each possible answer,
                unlock <blue>[B1]</blue>.
            </p>
        `,
        question:`
            I am defined by...
        `,
        answers: [
            {
                answer: `The choices I've made.`,
                code: 'P1',
            },
            {
                answer: `The face in the mirror.`,
                code: 'R2',
            },
        ],
    },
    S2: {
        type: 'Ability',
        title: "Shareholder Value",
        desc:`
            <p>
                When you activate the success effect of <blue>Fair Share</blue>, instead of equally redistributing
                the property among targets, you may have it elevated to <red>3</red> times its maximum value
                among all targets, or reduced to one <red>third</red> its minimum value among all targets, for all targets.
            </p>
        `,
    },
    S3: {
        type: 'Ability',
        title: "Sharing is Caring",
        desc:`
            <p>
                When you use <blue>Fair Share</blue> to target two sentient beings you may roll 
                <b>Professionalism</b> instead of Empathy. When you do so,
                add the following text to its <blue>On Success</blue> effect:
            </p>
            <p>
            “While under this effect, the two targets will intuitively identify the goals they share in common.
            They will put aside all other differences to mutually pursue those goals.”
            </p>
        `,
        question:`
            I bring people together to...
        `,
        answers: [
            {
                code: 'S2',
                answer: 'Mutually benefit each other.',
            },
            {
                code: 'J2',
                answer: 'Make the world a better place.',
            },
        ],
    },
    S4: {
        type: 'Ability',
        title: 'Superfly',
        desc:`
            <p>
                When activating the success or <blue>For each additional <red>3</red></blue> effects of <blue>Liftoff</blue>, you may
                substitute a burst of speed for a burst of any of the following other powers:
            </p>
            <ul>
                <li>
                    <blue>Super Strength:</blue> You may immediately break free of any restraints.
                    You can lift, carry, and throw any amount of weight for <red>3</red> seconds.
                </li>
                <li>
                    <blue>Super Stability:</blue> The next time you would be hurt and/or forcibly displaced
                    within <red>3</red> seconds, you are impervious to it.
                </li>
                <li>
                    <blue>Super Senses:</blue> You can catch a view of anything you have line of sight to
                    with perfect detail, or hear any one sound occuring within <red>3</red> miles with perfect clarity.
                </li>
            </ul>
            <p>
                You may overlap different powers at the same time.
            </p>
        `,
        question: 'Others look up to me because of...',
        answers: [
            {
                code: 'T3',
                answer: 'What I stand for.',
            },
            {
                code: 'P2',
                answer: "What I'm capable of.",
            },
        ],
    },
    T1: {
        type: 'Ability',
        title: "The Earth Remembers",
        desc:`
            Grief seeps deep into the earth, an you know how to dredge it up.
            Dig a big hole and roll <b>Empathy</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> you unearth a diorama within the hole depicting
                a miniature version of this location, woven of dust and echoes. Within the diorama,
                a recreation of the worst event to ever take place at this location plays out.
                You may inspect this reenactment to learn a detailed history of the event.
                The diorama remains available until you refill the hole.
            </p>
        `,
        additional:`
            <p>
                <blue>On every third <red>3</red>,</blue> you may ask one question
                to a figure within the diorama as if you were speaking to that person
                at the time of the event, and receive a truthful answer.
            </p>
        `,
        tri:`
            <red>On Triscendence,</red> you may disperse the diorama to erase the event and its consequences from history.
        `,
        failure:`
            <p>
                <red>On a failure,</red> the hole expands and swallows you, along with anyone nearby.
                You are pulled into a great historic tragedy of your world, such as a war or plague,
                and forced to live some portion of it out in the role of its victims.
                You will be ejected once you have suffered as they did; to leave early you must escape
                through Anomalous means. Any changes you make to that event here will retroactively echo through history.
            </p>
        `,
    },
    T2: {
        type: 'Ability',
        title: "Ties that Bind",
        desc:`
            When you’ve opened someone up, peer into their heart and roll <b>Subtlety</b>.
        `,
        success:`
            <p>
            <blue>On a success,</blue> ethereal threads appear to connect the target
            with each source of a regret of theirs. The thickness and opacity of the thread corresponds
            to the intensity of the regret. You may touch a thread to learn the nature of that regret,
            and may then sever it to free the target from it. The effect then ends.
            </p>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> you may sever
                an additional thread before the effect ends.
            </p>
            <p>
                <blue>On six or more <red>3s</red>,</blue> you may keep one of the severed threads.
                Until the end of the mission, you may attach that thread to someone else to
                burden them with that regret as if it were their own.
            </p>
        `,
        failure:`
            <p>
                <red>On a failure,</red> the threads tighten and tangle around the target's heart.
                They become obsessed with their regrets, unable to focus on anything else.
                They will go to any lengths to resolve even the pettiest one.
                Mundane deterrence short of death is ineffective.
            </p>
        `,
    },
    T3: {
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
        title: "We Have a Sinner",
        desc:`
            There are seven deadly sins: lust, gluttony, envy, sloth, greed, wrath, and pride.
            When you witness someone give into any of them, slam a book closed and roll <b>Persistence</b>.
        `,
        success:`
            <p>
                <blue>On a success,</blue> the target is punished according to their sin:
            </p>
            <ul>
                <li><b>	Lust:</b> The target becomes grotesque to all who behold them.</li>
                <li><b>	Gluttony:</b> The target’s mouth is shut and cannot be reopened.</li>
                <li><b>	Envy:</b> The target’s eyes are shut and cannot be reopened.</li>
                <li><b>	Sloth:</b> The target must dance unceasingly.</li>
                <li><b>	Greed:</b> The target’s mundane possessions are reduced to dust.</li>
                <li><b>	Wrath:</b> The target’s appendages are turned into soft plush, incapable of hurting anyone or holding any tool that could do so.</li>
                <li><b>	Pride:</b> The target forgets their own name and face, and cannot be reminded of them.</li>
            </ul>
        `,
        additional:`
            <p>
                <blue>For each additional <red>3</red>,</blue> choose one:
            </p>
            <ul>
                <li>Punish an additional sinner.</li>
                <li>Punish a target for another sin they’ve committed.</li>
            </ul>
        `,
        failure:`
            <p>
                <red>On a failure,</red> the target is forgiven for all sins, past present and future.
                They become immune to the effects of this ability and double down on their present indulgence.
            </p>        
        `,
        questionContext:`
            You may not mark Practiced for this ability by any means unless you have used it to punish
            all seven of the original deadly sins at least once. Only you may answer the question.
        `,
        question:`
            Have you sinned?
        `,
        answers: [
            {
                code: 'O1',
                answer: 'Yes.',
                boxes: 1,
            },
            {                
                code: 'F2',
                answer: 'No.',
                boxes: 1,
            },
        ],
    },
    W2: {
        type: 'Ability',
        title: 'Wings of Change',
        desc:`
            While airborne, flap your arms and roll <b>Duplicity</b>.
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
                code: 'M4',
                answer: 'I transformed into a passenger aircraft.',
                boxes: 2,
            },
            {
                code: 'M3',
                answer: 'I transformed into at least <red>3</red> different things.',
                boxes: 2,
            },
        ],
    },
}
