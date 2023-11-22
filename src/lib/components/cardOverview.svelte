<script>
    import { onMount } from 'svelte';

    onMount(() => {
        document.documentElement.classList.add("javascriptEnabled");

        const listSwitch = document.querySelector('#listSwitch');
        const gridSwitch = document.querySelector('#gridSwitch');
        const customView = document.querySelector('#custom-view');

        const layoutView = document.querySelector('.layout-view')

        listSwitch.addEventListener('click', () => {
            customView.classList.remove('grid-overview');
            customView.classList.add('list-overview');
        });

        gridSwitch.addEventListener('click', () => {
            customView.classList.remove('list-overview');
            customView.classList.add('grid-overview');
        });

    });

    export let data
    console.log('Data:', data);
</script>

<section>
	<nav>
		<!-- Weergave van layout voor wensen -->
		<div class="layout-view">
			<button id="listSwitch">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="none"
					><rect width="24" height="4" x="8" fill="" rx="2" /><rect
						width="6"
						height="4"
						fill=""
						rx="2"
					/><rect width="24" height="4" x="8" y="10" fill="" rx="2" /><rect
						width="6"
						height="4"
						y="10"
						fill=""
						rx="2"
					/><rect width="24" height="4" x="8" y="20" fill="" rx="2" /><rect
						width="6"
						height="4"
						y="20"
						fill=""
						rx="2"
					/></svg>
                    <span>Schakel over op lijstweergave</span>
			</button>
			<button id="gridSwitch">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="" fill-rule="evenodd" d="M3.429 0H8.57A3.429 3.429 0 0 1 12 3.429V8.57A3.429 3.429 0 0 1 8.571 12H3.43A3.429 3.429 0 0 1 0 8.571V3.43A3.429 3.429 0 0 1 3.429 0Zm0 2.571a.857.857 0 0 0-.858.858V8.57c0 .474.384.858.858.858H8.57a.857.857 0 0 0 .858-.858V3.43a.857.857 0 0 0-.858-.858H3.43ZM17.429 0h5.142A3.429 3.429 0 0 1 26 3.429V8.57A3.429 3.429 0 0 1 22.571 12H17.43A3.429 3.429 0 0 1 14 8.571V3.43A3.429 3.429 0 0 1 17.429 0Zm0 2.571a.857.857 0 0 0-.858.858V8.57c0 .474.384.858.858.858h5.142a.857.857 0 0 0 .858-.858V3.43a.857.857 0 0 0-.858-.858H17.43ZM3.429 14H8.57A3.429 3.429 0 0 1 12 17.429v5.142A3.429 3.429 0 0 1 8.571 26H3.43A3.429 3.429 0 0 1 0 22.571V17.43A3.429 3.429 0 0 1 3.429 14Zm0 2.571a.857.857 0 0 0-.858.858v5.142c0 .474.384.858.858.858H8.57a.857.857 0 0 0 .858-.858V17.43a.857.857 0 0 0-.858-.858H3.43ZM17.429 14h5.142A3.429 3.429 0 0 1 26 17.429v5.142A3.429 3.429 0 0 1 22.571 26H17.43A3.429 3.429 0 0 1 14 22.571V17.43A3.429 3.429 0 0 1 17.429 14Zm0 2.571a.857.857 0 0 0-.858.858v5.142c0 .474.384.858.858.858h5.142a.857.857 0 0 0 .858-.858V17.43a.857.857 0 0 0-.858-.858H17.43Z" clip-rule="evenodd"/></svg>
                    <span hidden>Schakel over op rasterweergave</span>
			</button>
		</div>
	</nav>
	<article id="custom-view" class="grid-overview">
        {#if data && data.wishes && data.wishes.length > 0}
            <ul>
                {#each data.wishes as wish}
                    <li>
                        <img src={wish.image.url} alt="Afbeelding van {wish.heading}" />
                        <a href="/contact">
                            <h3>{wish.heading}</h3>
                        </a>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>Geen wensen gevonden.</p>
        {/if}
    </article>
</section>

<style>
	/* Header */
	section {
        max-width: 700px;
        margin: 0 auto;
		padding: var(--unit-default);
	}

    img {
        width: clamp(10rem, 100%, 12rem);   
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: var(--unit-micro);
    }

    li {
		background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
    }

	nav {
		display: none;
		flex-direction: row;
		justify-content: space-between;
        margin-bottom: var(--unit-default);
        background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
	}

	nav div {
		display: flex;
		flex-direction: row;
		gap: var(--unit-small);
	}

    

    /* Layout button instellingen */
    nav .layout-view button {
        padding: var(--unit-small);
        transition: var(--animation-default) ease-in-out;
        border-radius: var(--unit-micro);
    }

    nav .layout-view button svg {
        fill: var( --color-primary-50);
    }

    nav .layout-view button:is(:hover, :focus) {
        background-color: var(--color-blue);
    }

    nav .layout-view button:is(:hover, :focus) svg {
        fill: var(--color-secundary);
    }

    nav .layout-view button:active {
        background-color: var(--color-accent-100);
    }

    nav .layout-view button span {
        opacity: 0;
        width: 0px;
        height: 0;
        overflow: hidden;
        display: block;
    }

	nav div:nth-child(2) {
		gap: var(--unit-small);
		align-items: center;
	}

    /* Inhoud met wensen in lijstweergave */
    .list-overview ul li {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: var(--unit-large);
        padding: var(--unit-small);
        margin-bottom: var(--unit-default);
        border-bottom: 2px solid var(--color-accent-75);
    }

    .list-overview ul li img {
        width: clamp(8rem, 100%, 10rem);
    }

    /* Inhoud met wensen in rasterweergave */
    .grid-overview ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--unit-default);
    }

    .grid-overview ul li {
        padding: var(--unit-default);
        background-color: var(--color-secundary);
		border: 2px solid var(--color-accent-75);
		border-radius: var(--unit-small);
        padding: var(--unit-small);
    }

    .grid-overview ul li img {
        margin-bottom: var(--unit-small);
    }

    ul li a h3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        transition: var(--animation-default) ease-in-out;
    }

    ul li a:is(:hover, :focus) h3 {
        color: var(--color-blue);
    }

    #custom-view {
        transition: var(--animation-default) ease-in-out;
    }

    @media (min-width: 440px) {
        .grid-overview ul {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 500px) {
        .list-overview ul li {
            grid-template-columns: 12rem 1fr;
        }   
    }

    @media (min-width: 628px) {
        .grid-overview ul {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    /* Zichtbaarheids instelling */
    .javascriptEnabled section nav{
        display: flex;
    }
</style>