<script>
    import { MainHead, MainAbout, PlayerCarrousel, MainStats,  } from "../lib/index.js";
    export let data
</script>

<svelte:head> <title>INK - Legends</title> </svelte:head>

<MainHead />
<MainAbout          data={data} />
<PlayerCarrousel    data={data} />
<MainStats          data={data} />

