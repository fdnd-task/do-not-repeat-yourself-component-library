<script>
    export let data
</script>

<section>

    {#each data.homepages as homepage }

        <div class="story-wrapper">
            <h2>
                {homepage.ourStory.titleStory}
                <span class="yellow">{homepage.ourStory.titleStory2}</span> 
                <span>{homepage.ourStory.titleStory3}</span> 
            </h2>
            <p>{homepage.ourStory.subTextStory}</p>    
        </div>

        <div class="story-video">
            <video width="100%" height="100%" loop muted autoplay>
                <source src="{homepage.ourStory.storyVideo.url}" type="video/mp4">
            </video>
        </div>
        
    {/each}

    <div class="roll-container">
        <p class="roll-text">Where the real <span class="yellow">legends</span> begin</p>
    </div>

</section>


<style>

    section{
        padding: 4em 6em 0 6em;
    }

    .story-wrapper {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    h2 {
        max-width: 50%;
        font-size: 3em;
    }

    .yellow{
        color: var(--Yellow-Primary);
    }

    .story-wrapper p{
        max-width: 35%;
        border-left: solid 1px var(--Yellow-Primary);
        height: max-content;
        padding-left: 1%;
        font-family: var(--Apercu-Font);
    }

    .story-video {
        margin-top: 7em;
        display: flex;
        justify-content: center;
    }

    .story-video video {

        width: fit-content;
        -webkit-mask-image: url(/assets/story-shape.svg);
        mask-image: url(/assets/story-shape.svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        width: 75vw;
        height: 100%;
        object-fit: cover;
        margin-bottom: 12em;
    }

    .roll-container {
        position: relative;
        overflow: hidden;
    }

    .roll-text {
        font-size: 6em;
        font-family: var(--Paragraph-Font);
        margin-bottom: 8em;
    
        -moz-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        
        -moz-animation: my-animation 9s linear infinite;
        -webkit-animation: my-animation 9s linear infinite;
        animation: my-animation 9s linear infinite;
    }

    /* for Firefox */
    @-moz-keyframes my-animation {
        from { -moz-transform: translateX(-100%); }
        to { -moz-transform: translateX(100%); }
    }

    /* for Chrome */
    @-webkit-keyframes my-animation {
        from { -webkit-transform: translateX(-100%); }
        to { -webkit-transform: translateX(100%); }
    }


</style>
