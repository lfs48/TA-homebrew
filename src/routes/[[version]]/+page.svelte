<script>
    let { data } = $props();
    
    // Function to generate versioned URLs
    function getVersionedPath(basePath) {
        return data.version ? `${basePath}/${data.version}` : basePath;
    }
</script>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    {#if data.version}
        <div class="bg-gray-700 border border-pentachoron text-pentachoron px-4 py-3 rounded mb-4">
            <p>You are viewing materials for version: <strong>{data.version}</strong></p>
            <a href="/" class="underline">View current version</a>
        </div>
    {/if}
    
    <div class="space-y-2 pb-4">
        <p class="pb-2">Congratulations, General Manager!</p>
        <p>
            By accessing this hypertext document, you have opted into participating 
            in <penta>Project Pentachoron</penta>. This exciting new initiative 
            will promote connection and synergy between the five
            <red>Agency</red>-favorable timelines by offering materials from
            alternate chronologies to your branch.
        </p>
        <p>
            At your discretion, you may direct <red>Agents</red> on your Field Team
            to visit this page and consider the materials presented therein as
            a supplement to their Field Agent Manuals.
        </p>
        <p>
            If you are an <red>Agent</red> from a non-participating branch who has
            erroneously accessed this document, please coax your General Manager
            into visiting this page so that your access is retroactively justified.
        </p>
    </div>
    <div class="flex justify-center w-full">
        <img class="" src="compatability.svg" />
    </div>
</div>