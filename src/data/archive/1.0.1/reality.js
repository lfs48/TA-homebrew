export default {
    obsessed: {
        title: 'Obsessed',
        tagline: 'The glimmer in your eye.',
        desc: `
            <p>
                The Obsessed Agent's personal life revolves
                around a singular overwhelming interest.
                It might be a piece of media, hobby,
                lifestyle, religion, or something more esoteric.
                The uniting factor is that this Obsession
                commands the Agent's attention at all times
                and shapes their perception of the world
                around itself.
            </p>
            <p>
                The <red>Agency</red> has spent considerable resources
                studying Obsessed Agents in the interest
                of harnessing their focus and dedication
                toward more economical purposes. On the
                occasion that an Agent's Fixation happens
                to align with our goals, their productivity is unparalleled.
            </p>
            <p>
                Unfortunately, data shows that these Agents
                have little control over which interests 
                they gravitate toward, and they are
                statistically much more likely to become
                engrossed in useless trivialities that generate
                no revenue. Worse yet, these frivolous
                topics often occupy their focus during
                missions, leading to overlooked details
                and critical blunders.
            </p>
            <p>
                Our researchers will continue to investigate
                how to guide these Agents toward 
                more valuable interests.
                In the meantime, cost-benefit analysis shows
                that it remains worthwhile to employ
                them as long as they can be kept
                adequately enriched.
            </p>
        `,
        tableTitle: 'Fixation',
        tableDesc: `
            You are deeply obsessed with a particular interest, called your Fixation.
            Decide what it is by rolling on the table below or creating your own.
        `,
        tableOptions: [
            'Pop Idol',
            'Telenovela',
            `Conspiracy Theory`,
            'Birdwatching',
        ],
        triggerTitle: 'Interest Mentioned!',
        triggerDesc:`
            The GM may use Reality to have
            something related to your Fixation
            pop up around you (<i>an advertisement
            for new merch, someone sharing an
            incorrect fact, etc.</i>). If you ignore it, your
            attention will be consumed by it later:
            the relationship who least shares your interest loses <yellow>one Connection</yellow>.
        `,
        trackTitle: 'Onto New Things',
        trackDesc:`
            When you enthusiastically engross
            yourself in something unrelated to your
            Fixation, mark the next empty
            box on a four-box <yellow>Onto New Things</yellow> track. 
            When this happens while all boxes are marked, 
            or when you're forced to abandon your Fixation
            for other reasons, you move on to new things. You must choose a new Reality.
        `,
        releaseTitle: 'Hyperfocused',
        releaseDesc: `
            When you are doing something that
            engages with your Fixation or invokes
            specialized knowledge gained from it,
            ignore all Burnout.
        `,
        onboarding: [
            'What is your most prized possession?',
            'How do you spend a typical Saturday night?',
            `What are you too embarrassed to admit?`,
        ],
        relationships: [
            {
            q: `Who has a connection you're jealous of?`,
            examples: `
                Dog Groomer, Ran Into Them at a Bakery Once, Actor's Distant Cousin`,
            },
            {
            q: `Who's as deep in the rabbit hole as you are?`,
            examples: `
                Best Friend, Nail Tech, Tween on Internet Forum`,
            },
            {
            q: `Who can't quite follow along with your rants?`,
            examples: `
                Chauffeur, Tattoo Artist, Jujitsu Sparring Partner`,
            },
        ],
    },
}