<script>
    import {  
            MainHead, 
            MainAbout, 
            PlayerCarrousel, 
            MainStats, 
            MainSponsor, 
            MainStory,  

    } from "../lib/index.js";
    export let data
</script>

<svelte:head> <title>INK - Legends</title> </svelte:head>

<MainHead />
<MainAbout          data={data} />
<PlayerCarrousel    data={data} />
<MainStats          data={data} />
<MainSponsor        data={data} />
<MainStory          data={data} />
