process.env.NODE_ENV = 'development';

const webpack = require('webpack');

const config = require('./webpack.dev');

const ora = require('ora');

let loaderMsg = '';

process.env.NODE_ENV === 'production' ? loaderMsg = 'Building production...' : loaderMsg = 'Building development...';

const spinner = ora(loaderMsg).start();

const chalk = require('chalk');

spinner.color = 'blue';

const log = console.log;

webpack(config, (err, stats) => {

    spinner.stop();

    if (err) {
        log(chalk.red('Looks like this build contains error.'));
        throw err;
    }
    let message = '';

    process.env.NODE_ENV === 'production' ? message = 'Production build complete' : message = 'Development build complete';

    log(chalk.green(message));

    process.exit();
})