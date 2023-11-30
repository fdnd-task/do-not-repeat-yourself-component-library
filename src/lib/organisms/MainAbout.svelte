<section class="intro-about">
    <div class="intro">
        <p class="intro-text">
            We are dedicated to providing these children with a second chance in life,ensuring
            they have access to education, shelter, nutrition, and an opportunity to pursue their dreams of
            becomingtop football players.
        </p>
        <a href="/about" class="intro-about-button">About us</a>
    </div>
</section>

<style>

    section{
        display: inline-block;
        margin: 4em 0;
    }

    /* ============== INTRO ABOUT - SECTION START ==============*/

    .intro {
        width: 100%;
        height: 75vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        background-image: url(/assets/intro-mask.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;

        margin: 12vw 0 0 0;
        padding: 0 14vw;
    }

    .intro-text {
        display: flex;
        flex-direction: column;
        color: var(--Black);
        font-family: var(--Paragraph-Font);
        font-size: clamp(2vw, 4vw, 57px);
        line-height: 96%;
    }

    .intro-about-button {
        font-family: var(--Apercu-Font);
        font-weight: 700;
        line-height: 140%;
        font-size: 16px;
        text-transform: uppercase;
        width: fit-content;
        border: none;
        text-decoration: none;
        outline: none;
        color: var(--Black);
        background-color: var(--White);
        border-radius: 40px;
        padding: 5px 10px;
        margin: 1em 0;
        transition: 0.2s ease-in-out;
    }

    .intro-about-button:hover{
        background-color: var(--Blue-Secondary);
        color: var(--White);
        transform: scale(1.02);
    }

    @media (min-width: 600px){

        .intro-text  {
            font-size: 1.5em;
        }

    }


    @media (min-width: 800px){

        .intro-text {
            font-size: 1.7em;
        }
    }

    @media (min-width: 1000px){

        .intro-text {
            font-size: 2em;
        }

    }

    @media (min-width: 1000px){

        .intro-text {
            font-size: 2.7em;
        }

        .intro-about-button {
            font-size: 20px;
            margin: 2em 0;
        }
    }

    @media (min-width: 1500px){

        .intro-text {
            font-size: 2.5em;
        }

        .intro-about-button {
            font-size: 22px;
            margin: 2.2em 0;
        }
    }

</style>
