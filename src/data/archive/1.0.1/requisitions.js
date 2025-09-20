export default {
    'positive-affirmations': {
        title: 'Positive Affirmations',
        description: `
            <p>
                You receive a miniature MP<red>3</red> player,
                containing recordings of short uplifting phrases
                being spoken by the voice of a mundane person of your choice
                in a warm and reassuring tone.
            </p>
            <p>
                Each time the play button is pressed,
                one of the following phrases is played at random:
            </p>
        `,
        options: [
            "You are good enough.",
            "Believe in yourself.",
            "You are performing adequately.",
            "Reality will be stabilized.",
            "I love you.",
            "You can do anything.",
            "Don't give up!",
            "You will successfully capture this <blue>Anomaly</blue>.",
            "Everything will be okay.",
        ],
        pricing: [
            { name: 'Basic Purchase', cost: '6 Commendations' },
            { name: 'Custom Phrase Add-On', cost: '3 Commendations per Word' }
        ],
        disclaimer: `
            <b>Disclaimer:</b> Recorded statements may not accurately reflect Reality.
            Recorded statements do not represent the views
            of the <red>Triangle Agency</red> or its employees.
        `
    },
    'unreal-estate': {
        title: 'Unreal Estate',
        description: `
            <p>
                The <red>Agency</red> owns and manages a number of residential properties,
                including an apartment whose location is central and convenient to the mission
                you're currently on. You can rent this apartment for the duration of your mission.
            </p>
            <p>
                Apartments include basic furnishings and utilities.
                The penthouse apartment also features luxury amenities
                including an indoor pool, private theater,
                and helipad (helicopter not included).
            </p>
            <p>
                Mundane people cannot locate this apartment without directions from you
                and cannot enter it uninvited.
            </p>
        `,
        pricing: [
            { name: '<red>3</red>-Bedroom Rental', cost: '3 Commendations' },
            { name: 'Penthouse Rental', cost: '9 Commendations' }
        ]
    },
    'uv300-triangular-shades': {
        title: 'UV300 Triangular Shades',
        description: `
            <p>
                In addition to making you look incredibly stylish
                and protection your eyes from hurtful radiation,
                these red-tinted <red>triangle</red>-lensed sunglasses will
                highlight nearby people and objects in your field of view
                that may be helpful to your investigation.
            </p>
        `,
        pricing: [
            { name: 'Standard Pair', cost: '15 Commendations' },
            { name: 'Anti-Hypnosis Coating', cost: '15 Additional Commendations' }
        ]
    }
};