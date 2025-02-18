const fs = require('fs')
const path = require('path');


// WebPack.config File
const fileConfig = 'node_modules/react-scripts/config/webpack.config.js'

if (fs.existsSync(fileConfig)) {
    
    const configPath = path.resolve(__dirname, './package.json');
    const json = JSON.parse(fs.readFileSync(configPath));

    new Promise((resolve) => {
        fs.readFile(fileConfig, 'utf8', function (err, data) {
            if (err) {
                return console.log(err)
            }
            resolve(data)
        })
        }).then((file) => {
            
            //Exclude react from bundle
            if (typeof json.buildConfig !== 'undefined' ) {
                const externalsString = `externals: ${JSON.stringify(json.buildConfig.externals)},`;
                const CodeAsString = `${externalsString}entry: paths.appIndexJs,`;
    
                const result = file
                                .replace('static/js/[name].[contenthash:8].js', 'static/js/[name].js')
                                .replace('static/css/[name].[contenthash:8].css', 'static/css/[name].css')
                                .replace(/externals\:.*?entry\:\s*paths.appIndexJs,/, 'entry: paths.appIndexJs,')

                                // Do not package third-party frameworks into trunks
                                .replace(/minimize\:\s*[\s\S]*?minimizer\:/, `minimize: isEnvProduction, splitChunks:{chunks:"all",cacheGroups:{default:false,vendors:false,defaultVendors:{name:'main',chunks:'all',test:/.*/,priority:10,reuseExistingChunk:false}}},runtimeChunk:false, minimizer:`)

                                // alias
                                .replace(/alias:\s*{[\s\S]*?'react-native': 'react-native-web',/, `alias: {
                                    '@': path.resolve(__dirname, paths.appSrc),
                                    'react-native': 'react-native-web',`)
                                .replace(/entry\:\s*paths.appIndexJs,/, CodeAsString);

                                    

    
                fs.writeFile(fileConfig, result, function (err) {
                    if (err) return console.log(err)
                    console.log('\x1b[36m%s\x1b[0m', `--> The webpack.config file was modifed!`);
                })
            }
    
        })
    
}



