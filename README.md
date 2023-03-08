# Fullstack CRA(create-react-app) Application Template


A CRA-based template that can customize webpack configuration and node.js scripts.


This is a React application created using [create-react-app 5+](https://create-react-app.dev/), which can configure webpack independently and use Node.js scripts to export a `.zip` package.

This template enhances the scripts from `package.json`, without breaking the structure of CRA itself. It is used to remove the external React and ReactDOM libraries so that the bundles are completely separated from the React vendor.


---


* * *

## File Structures


```sh
fullstack-cra-app-template/
├── README.md
├── LICENSE
├── tsconfig.json
├── custom.webpack.config.js
├── package-lock.json
├── package.json
├── my-package/<your_package_name>.zip
├── scripts/
├── public/
├── src/
│   ├── index.tsx
│   └── ...
└──
```



## Getting Started

Make sure if NODEJS is installed on your computer.

### Install  Dependencies:

```sh
$ npm install
```
It will create `node_module` folder in this all dependency files will be install with this command.


### Development And Debugging:

```sh
$ npm run start
```


### Production Build :

```sh
$ npm run build 
```


### Export to zip file

♥️ It will automatically generate a compressed package `<your_package_name>.zip` with the same name as your current repository, and put it in the `my-package` folder, you can modify` The `name` property in package.json` configures this name

```sh
$ npm run export
```

### Even More


For related operation commands, please refer to [create-react-app](https://create-react-app.dev/)


## ⚙️ Custom Configuration of Build

Excluding dependencies from the output bundles, you could change the `package.json` like this:

The `buildConfig` property will be linked to the Webpack configuration.

```json
{
    ...
    "buildConfig": {
        "externals": {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    },
    ...
}
```

If you want to cancel the external files setting, please change it to:

```json
{
    ...
    "buildConfig": {
        "externals": ""
    },
    ...
}
```


## Supported development environment

- create-react-app 5.x.x+


## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).


