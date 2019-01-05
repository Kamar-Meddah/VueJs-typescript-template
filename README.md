# TypeScript Vue Starter

This quick start guide will teach you how to get TypeScript and [Vue](https://vuejs.org) working together.
This guide is flexible enough that any steps here can be used to integrate TypeScript into an existing Vue project.

# Initialize your project

Let's create a new package.

```shell
mkdir typescript-vue-tutorial
cd typescript-vue-tutorial
```

Next, we'll scaffold our project in the following way:

```txt
typescript-vue-tutorial/
├─ dist/
└─ src/
   └─ components/
```

TypeScript files will start out in your `src` folder, run through the TypeScript compiler, then webpack, and end up in a `bundle.js` file in `dist`.
Any components that we write will go in the `src/components` folder.

Let's scaffold this out:

```shell
mkdir src
cd src
mkdir components
cd ..
```

Webpack will eventually generate the `dist` directory for us.

# Initialize the project

Now we'll turn this folder into an npm package.

```shell
npm init
```

You'll be given a series of prompts.
You can use the defaults except for your entry point.
You can always go back and change these in the `package.json` file that's been generated for you.

# Install our dependencies

We'll be using a custom repository that uses experimental declarations for Vue.
These declarations are currently maintained on a fork of Vue, but may be part of the main repo in the near future.

```shell
run npm install
```

Next, ensure TypeScript, Webpack and the necessary loaders are installed.

Webpack is a tool that will bundle your code and optionally all of its dependencies into a single `.js` file.
While you don't need to use a bundler like Webpack or Browserify, these tools will allow us to use `.vue` files which we'll cover in a bit.

# main.ts

```typscript
import Vue from "vue";
import AppComponent from "./app.component";

let v = new Vue({
    el: "#app",
    components: {AppComponent},
    render(h) => h('AppComponent');
});
```

# app.component.ts
```typescript
import { Vue, Component, Prop } from "vue-property-decorator";
import withRender from './appComponent.html?style=./appComponent.scss';

@withRender
@Component({
})
export default class AppComponent extends Vue {
   mounted(){

   }
}
```

