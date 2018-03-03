import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import historyApi from 'connect-history-api-fallback'
import { compose } from 'compose-middleware'
import webpack from 'webpack'
import app from '../server/server'
import config from '../server/config'
import wpConfig from './webpack.config'

const compiler = webpack(wpConfig)
const wp = compose([webpackDevMiddleware(compiler), webpackHotMiddleware(compiler)])

// wp serves from a webpack temporary filesystem
// using the history fallback to simulate the catch all
// see https://github.com/webpack/webpack-dev-middleware/issues/88
app.use(wp)
app.use(historyApi())
app.use(wp)
app.listen(config.server.port, () => console.log(`Listening on ${config.server.port}`))
