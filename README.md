# create-svelte

# INK 

In deze Readme is alle informatie te vinden voor de website die wij gaan maken aan de hand van de component library. 




## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->

### Desktop versie 

<img width="534" alt="284287476-99ec8fcb-d9ee-4182-82fd-02c656d593c3" src="https://github.com/JalalToufik/INK-component-library/assets/94745953/d71372cc-ca2e-4788-bd35-0c087f5c1cee">


 ### WIKI 

* [🌺 Analyseren](https://github.com/anoukbruinn/S16-DRY-INK-component-library/wiki/%F0%9F%8C%BA-Analyseren)
* [🌺 Ontwerpen](https://github.com/anoukbruinn/S16-DRY-INK-component-library/wiki/%F0%9F%8C%BA-Analyseren)
* [🌺 Bouwen](https://github.com/anoukbruinn/S16-DRY-INK-component-library/wiki/%F0%9F%8C%BA-Bouwen)
* [🌺 Intergreren](https://github.com/anoukbruinn/S16-DRY-INK-component-library/wiki/%F0%9F%8C%BA-Intergreren)
* [🌺 Testen](https://github.com/anoukbruinn/S16-DRY-INK-component-library/wiki/%F0%9F%8C%BA-Testen)

## Kenmerken

#### TOOLS :

* VSCode
* Miro
* Figma

#### GEBRUIKTE TECHNIEKEN :

* Svelte
* Sveltekit
* Hygragh
* JS
* CSS
  
COMMUNICATIE MIDDELEN :

* Team Canvas
* Microsoft Teams
* Calls


## Creating a project

If you're seeing this, you've probably already done this step. Congrats!
```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
