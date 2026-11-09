<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Threads Of Love for Heaven's Sake 
</h1>

![Imgur](https://imgur.com/923usJa)

## 💫Netlify Link

[https://fervent-joliot-0dfa63.netlify.com/](https://fervent-joliot-0dfa63.netlify.com/)

## ❤️ Domain

[https://threadsoflovesatx.org/](https://threadsoflovesatx.org/)

## Images

Images are hosted on [Cloudinary](https://cloudinary.com). The Volunteers page uses
the `volunteer` tag. Without credentials, development and builds use the 34 public
gallery images saved in `src/data/volunteer-images.json` from the published site.

To fetch the current gallery, copy `.env.example` to `.env.development` and set
all three Cloudinary values. For production, configure the same variables in the
hosting provider or `.env.production`. Never commit credentials. Rotate the API
secret previously committed in `gatsby-config.js`; removing it from the current
file does not remove it from Git history.

## Local development

Use Node.js 24 (see `.nvmrc`). With fnm:

```sh
fnm use --install-if-missing
npm ci
npm run develop
```

Open http://localhost:8000/calendar/ to review the calendar cleanup, or
http://localhost:8000/ for the home page.

The project `.npmrc` enables legacy peer resolution because Gatsby's internal
packages and `react-text-loop` retain older React peer declarations. The site
uses React 18, and the lockfile records the tested dependency tree.

```sh
npm test
npm run build
npm audit --audit-level=critical
```

The audit command fails for critical findings and still reports lower-severity
findings. Set the hosting provider to Node.js 24 before deploying this upgrade.

## From Gatsby

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
