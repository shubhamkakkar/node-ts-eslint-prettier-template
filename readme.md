# Typescript Server Template

To setup your .env files
1. For development mode
`yarn env:dev`

2. For staging mode
`yarn env:staging`

3. For production mode
`yarn env:production`

<b>Remember: </b>It is must for you to run these commands you have some value in your .env.example file like give in the repo else you may endup with empty .evn file with just the value of CURRENT_ENV


```
CURRENT_ENV is determined by the type of env:_type_ you execute ie
1. for `env:dev` > you will get "CURRENT_ENV" as development
2. for `env:staging` > you will get "CURRENT_ENV" as staging
3. for `env:production` > you will get "CURRENT_ENV" as production
```

Run compiled JS server with (in development mode)

`yarn back:dev`

In production, build with

`yarn back:build`

Run the server without watching changes with

`yarn start`


PS: <b>It comes with husky</b> Happy coding!

## Using the template

You can base a new Github repo on this template with the Github cli:


```sh
git clone git@github.com:shubhamkakkar/node-ts-eslint-prettier-template.git my-repo
cd my-repo
rm -rf .git
yarn
```