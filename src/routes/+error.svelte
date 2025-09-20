<script>
    import { page } from '$app/stores';
    
    let { data } = $props();
</script>

<style>
    @reference "../app.css";
    h1 {
        @apply text-agency-red;
    }
</style>

<div class="w-full h-full py-8 pl-8 pr-24 space-y-8">
    <div>
        <h1 class="text-[2rem] font-bold leading-none w-full border-b pb-1 mb-4 border-agency-red">
            {$page.status || 404}
        </h1>
        <p class="pb-4">
            {#if $page.status === 404}
                {#if $page.url.pathname.includes('/1.') || $page.url.pathname.includes('/0.')}
                    Please inform your General Manager you should receive <red>one Demerit</red> for attempting
                    to access materials from a version of <penta>Project Pentachoron</penta> which does not exist.
                {:else}
                    Please inform your General Manager you should receive <red>one Demerit</red> for attempting
                    to access materials which do not exist.
                {/if}
            {:else}
                {$page.error?.message || 'An error occurred'}
            {/if}
        </p>
        <p>
            <a href="/" class="text-pentachoron underline">Return to Project Pentachoron</a>
        </p>
    </div>
</div>