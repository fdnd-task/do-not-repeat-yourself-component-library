<script>
    import '../lib/styles/fonts.css';
    import { Header } from "../lib/index.js";

</script>

<Header />

<slot />

<style>

    :global(*){
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
        font-family: var(--Apercu-font);
    }

    /* Color variable */

    :global(:root){

        --Bg-Dark-Blue: #051A1A;

        --Yellow-Primery: #FFDA1D;
        --Blue-Secondary: #3DBAE1;

        --White: #FFFFFF;

        --Apercu-Font: 'Apercu pro', sans-serif;
        --Paragraph-Font: 'Jubilat', serif;
        --Header-Font: 'Kirang Haerang', sans-serif;

    }

    :global(body) {
        background-color: var(--Bg-Dark-Blue);
        color: var(--White);
        width: 100%;
        height: 100vh;
        overflow: hidden;
        overflow-y: scroll;
    }

    :global(h1){
        font-family: var(--Header-Font);
        font-size: 4em;
        padding: .5em;
        color: var(--Yellow-Primery);
    }

</style>