const fs = require('fs')

// WebPack.config File
const fileConfig = 'node_modules/react-scripts/config/webpack.config.js'

new Promise((resolve) => {
   fs.readFile(fileConfig, 'utf8', function (err, data) {
      if (err) {
        return console.log(err)
      }
      resolve(data)
   })
}).then((file) => {
    
    //Exclude react from bundle
    const externalsString = `externals: {'react': 'React','react-dom': 'ReactDOM'},`;
    const CodeAsString = `${externalsString}entry: paths.appIndexJs,`;

    const result = file
                        .replace(externalsString, '')
                        .replace(/entry\:\s*paths.appIndexJs,/, CodeAsString);

    fs.writeFile(fileConfig, result, function (err) {
        if (err) return console.log(err)
        console.log('\x1b[36m%s\x1b[0m', `--> The webpack.config file was modifed!`);
    })
})

