<script module>
    export { versionIndicator };
</script>

{#snippet versionIndicator(version)}
    <div class="bg-gray-700 border border-pentachoron text-pentachoron px-4 py-3 rounded mb-4">
        <p>You are viewing material for version: <strong>{version}</strong></p>
        <a href="/" class="underline">View current version</a>
    </div>
{/snippet}