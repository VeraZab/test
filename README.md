# Plotly Marketing Pages (next.js)

This repo is running a stack of next.js and scss. Most things are contained in their own components in a modular way.

## Components and Ecosystem
One of the main reasons we are using `next.js` and React is to take advantage of the modular nature of the framework. The site should be built up of smaller, reusable modules / components.

We are also moving towards a place where things can be shared within the various projects we have at plotly by staying within the ecosystem of React.

## Development

Clone the repo and run `yarn install` to install all of the dependencies. 

Run `yarn run dev` to enter development mode. This will launch a server for you to actively develop with hot module reloading and live reloading of styles.

## Deployment

Deployment is straightforward. Download and install `now` [from here](https://zeit.co/now). There is a Plotly `now` account that we use, connect with Jack (@jp) or Thomas (@aulneau) for the credentials.

When you are ready to deploy, simply type `now` to deploy and it will give you a url to share and to test, and when you are happy with it, run the command `now alias` for the latest deployment to be aliased to `now.plot.ly`.


## Next.js

For more documentation about next.js, visit the [repo here](https://github.com/zeit/next.js). Learn more about the creators [here](https://zeit.co).