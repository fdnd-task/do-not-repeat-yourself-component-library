<div class="informatie">
    <ul class="contact-info">
        <li class="contact">CONTACT</li>
        <div class="link-contact">
            <li><a class="tel" href="tel:+31 20 1234679">+31 20 1234679</a></li> 
        </div>
        <div class="link-contact">
            <li><a href="mailto:info@ink.org">info@ink.org</a></li>
        </div>
    </ul>
</div>

<style>

	@media only screen and (min-width: 768px) {

		.informatie {
				/* margin-left: 9rem; */
				width: 15rem;
				margin-top: 1.7em;
			}

		.link-contact{
				margin-bottom: 25px;
			}

		
		
		.contact-info a {
				font-family: var(--Apercu-Font);
				font-size: 1em;
				font-weight: 200;
				transition: 0.2s;

			}

		
		
		a.tel {
			color: white;
		}

		a {
			text-decoration: none;
				color: var(--White);
				font-family: var(--Paragraph-Font);
				text-transform: uppercase;
				font-size: 1em;
				display: inline-block;
				transition: 0.2s;
		}

		.contact {
				font-family: var(--Paragraph-Font);
				color: var(--White);
				font-size: 25px;
				margin-bottom: 25px;
				font-weight: 200;
			}
	}

	@media only screen and (max-width: 600px) {

		a {
			text-decoration: none;
			color: var(--justWhite);
			font-family: var(--Paragraph-Font);
			text-transform: uppercase;
			font-size: 1em;
			display: inline-block;
			transition: 0.2s;
			margin-bottom: 5px;
		}

		.contact {
				color: #ffffff;
				font-size: 25px;
				margin-bottom: 25px;
				font-weight: 200;
				display: flex;
				justify-content: center;
			}
		
		
		.contact-info a {
				font-family: var(--Apercu-Font);
				font-size: 1em;
				font-weight: 200;
				line-height: 1em;
				transition: 0.2s;
				
				
			}

		

		.link-contact {
				display: flex;
				justify-content: center;
				margin-bottom: 25px;
				
			}
		
		a.tel {
				color: white;
			}
	}

	@media only screen and (max-width: 768px) {

		a {
	text-decoration: none;
	color: var(--White);
	text-transform: uppercase;
	font-size: 1em;
	transition: 0.2s;
		}
	}
</style>