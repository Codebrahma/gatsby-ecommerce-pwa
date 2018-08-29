Gatsby-Ecommerce-PWA
====================
 A Ecommerce commerce **Progressive Web App** built with [Gatsby JS](https://www.gatsbyjs.org/  "Gatsby Homepage") and [React JS](https://reactjs.org/  "React Homepage").

Are you **offline**? No worries, You can still view your favourite products, Add them to cart and proceed till checkout.
Pay when you are back **online**.

#### View the [Live App](https://codebrahma-ecommercepwa.netlify.com/ "Codebrahma Gatsby_Ecommerce-PWA")

## Install

Make sure you install all the dependencies, use
```sh
yarn install
```
 **For Development** ,

Add ```.env.development``` file with variables given in ```.env.sample```
```sh
SHOPIFY_STORE_NAME='STORE_NAME'
SHOPIFY_STORE_ACCESS_TOKEN='STORE_ACCESS_TOKEN'
```

 **For Production**,

Add ```.env.production``` with
```sh
SHOPIFY_STORE_NAME='PRODUCTION_STORE_NAME'
SHOPIFY_STORE_ACCESS_TOKEN='PRODUCTION_STORE_ACCESS_TOKEN'
```
```.env.development``` and ```.env.production``` will be ignored by ```git```.

Also make sure you have the gatsby CLI, use
```sh
npm install --global gatsby-cli
```

 **To start the project use**
```
npm run develop
```
 
Want to develop your own gatsby site? Visit [Gatsby Docs](https://www.gatsbyjs.org/docs/ "Gatsby Documentation") for helpful information.

## App Walkthrough

![gatsby](https://user-images.githubusercontent.com/22497932/43355292-9a77b724-9277-11e8-8108-e5f5201bf4c3.gif)

## Inspiration

#### 1. Here are the key benefits of  [Gatsby JS](https://www.gatsbyjs.org/  "Gatsby Homepage")
- **Automatic routing** based on your directory structure. No need to include additional code for configuring the router
- HTML code is **generated 
-side**
- **Pre-configured** Webpack-based build system
- **Easily extensible** by plugin ecosystem
- **Optimized for speed**. Gatsby loads only critical parts so that your site loads as fast as possible. Once loaded, Gatsby prefetches
     resources for other pages so that clicking around the site feels **incredible fast**.
- **Easy data integration** from sources like CMSs, SaaS services, APIs, databases, file system
> Curious to explore about it. Best place is to start with [Gatsby Docs](https://www.gatsbyjs.org/docs/ "Gatsby Documentation")

#### 2.  Progressive Web App ([PWA](https://developers.google.com/web/progressive-web-apps/ "Google developers(PWA)"))
- **Reliable** - Load instantly and never show the downasaur, even in uncertain network conditions.
- **Fast** - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
- **Engaging** - Feel like a natural app on the device, with an immersive user experience.
