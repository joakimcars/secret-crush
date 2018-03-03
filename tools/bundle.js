import webpack from 'webpack'
import webpackConfig from './webpack.config'

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.err(err)
        process.exit(1)
        return
    }

    console.info(stats.toString(webpackConfig.stats))
})
