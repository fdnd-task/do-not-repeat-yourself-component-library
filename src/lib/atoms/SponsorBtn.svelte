<script>
	export let href, title;
</script>

    <a class="sponsor-button" {href}> 
        {title}
        <span class="arrow"><span/>
    </a>

<style>

    .sponsor-button{
        display: inline-block;
        margin: 0 auto;
        border: none;
        border-radius: 3em;
        padding: 1em 2em;
        background-color: var(--Yellow-Primary);
        color: var(--Bg-Dark-Blue);
        font-weight: bold;
        font-family: var(--Apercu-Font);
        text-transform: uppercase;
        transition: .2s ease-in-out;
    }

    .sponsor-button:hover{
        background-color: var(--White);
        color: var(--Bg-Dark-Blue);
    }

        /* 48em = 768px */

    @media (min-width: 48em) {

        .arrow{
            background-image: url(/assets/arrow.svg);
            background-repeat: no-repeat;
            width: 28px;
            height: 28px;
            display: block;
            position: absolute;
            top: 40px;
            right: 62px;
        }

        .sponsor-button:hover .arrow{
            right: 56px;
        }

    }


</style>
