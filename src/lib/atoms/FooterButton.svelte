
<a class="sponsor-button" id="footer-sponsor-button" href="./sponsor2.html">
    Become a sponsor <svg
        class="sponsor-icon"
        width="6"
        height="11"
        viewBox="0 0 6 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.1417 0.25L0 1.48375L3.7085 5.5L0 9.51625L1.1417 10.75L6 5.5L1.1417 0.25Z"
            fill="#051A1A"
        />
    </svg>
</a>


<style>

@media only screen and (min-width: 768px) {

.sponsor-button {
			text-decoration: none;
			background-color: var(--plantGreen);
			color: var(--justWhite);
			font-family: var(--copy-font);
			font-weight: bold;
			border: none;
			border-radius: 3em;
			padding: 1em 2em;
			text-transform: uppercase;
			transition: 0.2s;
			cursor: pointer;
		}

		.sponsor-button:hover {
			background-color: var(--candelLight);
		}

        #footer-sponsor-button {
			font-weight: bold;
		}

		#footer-sponsor-button:hover {
			color: var(--charcoal);
		}

		.sponsor-button:hover svg {
			transform: translateY(1px) translateX(3px);
		}

		.sponsor-button svg {
			transform: translateY(1px);
		}


		a {
			color: white;
		}

    }

    @media only screen and (max-width: 600px) {

        .sponsor-button {
			text-decoration: none;
			background-color: var(--plantGreen);
			color: var(--justWhite);
			font-family: var(--copy-font);
			font-weight: bold;
			border: none;
			border-radius: 3em;
			padding: 1em 2em;
			text-transform: uppercase;
			transition: 0.2s;
			cursor: pointer;
			margin-bottom: 1em;
			margin-top: 1em;
			display: flex;
			justify-content: center;
		}

		.sponsor-button:hover {
			background-color: var(--candelLight);
		}

        #footer-sponsor-button {
			font-weight: bold;
		}

		#footer-sponsor-button:hover {
			color: var(--charcoal);
		}

		.sponsor-button:hover svg {
			transform: translateY(1px) translateX(3px);
		}

		.sponsor-button svg {
			transform: translateY(1px);
		}

        svg {
			margin-left: 10px;
		}

    }

</style>