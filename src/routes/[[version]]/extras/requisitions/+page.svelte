<script>
    import { ArrowRightSLineArrows } from 'svelte-remix';
</script>

<style>
    @reference "../../../../app.css";
    h1, h2, h3 {
        @apply
        text-agency-red
    ;}
    h2 {
        @apply
        mb-1 
        pb-1
        border-agency-red
    ;}
    li {
        @apply
        marker:text-agency-red
    ;}
</style>

{#snippet listItem(text)}
    <div class="flex items-center space-x-2">
        <ArrowRightSLineArrows class="text-agency-red size-[1rem]"/>
        <div class="leading-none">{@html text}</div>
    </div>
{/snippet}

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    <div class="space-y-2">
        <h1 class="text-[3rem]">Requisitions</h1>
        <p>
            At your GM's discretion, the following <red>Requisitions</red> may be made
            available for purchase at your branch.
        </p>
    </div>
    <div>
        <h2>Positive Affirmations</h2>
        <div class="space-y-2">
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
            <div class="grid grid-cols-3 gap-1">
                {#each [
                    "You are good enough.",
                    "Believe in yourself.",
                    "You are performing adequately.",
                    "Reality will be stabilized.",
                    "I love you.",
                    "You can do anything.",
                    "Don't give up!",
                    "You will successfully capture this <blue>Anomaly</blue>.",
                    "Everything will be okay.",
                ] as phrase}
                    <li>{@html phrase}</li>
                {/each}
            </div>
            <div class="flex justify-between">
                <div class="space-y-0.5">
                    <p><b>Basic Purchase:</b> <red>6 Commendations</red></p>
                    <p><b>Custom Phrase Add-On:</b> <red>3 Commendations per Word</red></p>
                </div>
                <p class="text-end text-[0.5rem]">
                    <b>Disclaimer:</b> Recorded statements may not accurately reflect Reality.
                    Recorded statements do not represent the views
                    of the <red>Triangle Agency</red> or its employees.
                </p>
            </div>
        </div>
    </div>
    <div class="space-y-2">
        <h2>Unreal Estate</h2>
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
        <div class="space-y-0.5">
            <p><b><red>3</red>-Bedroom Rental:</b> <red>3 Commendations</red></p>
            <p><b>Penthouse Rental:</b> <red>9 Commendations</red></p>
        </div>
    </div>
    <div>
        <h2>UV300 Triangular Shades</h2>
        <div class="space-y-2">
            <p>
                In addition to making you look incredibly stylish
                and protection your eyes from hurtful radiation,
                these red-tinted <red>triangle</red>-lensed sunglasses will
                highlight nearby people and objects in your field of view
                that may be helpful to your investigation.
            </p>
            <div class="space-y-0.5">
                <p><b>Standard Pair:</b> <red>15 Commendations</red></p>
                <p><b>Anti-Hypnosis Coating:</b> <red>15 Additional Commendations</red></p>
            </div>
        </div>
    </div>
</div>