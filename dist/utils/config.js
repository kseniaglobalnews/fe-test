'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.workflowName = exports.workflow = exports.tasks = exports.isTest = exports.isProd = exports.isDev = exports.env = exports.cwd = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Config = require('../classes/Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configFile = _path2.default.resolve('./package.json');
var configJSON = void 0,
    config = void 0;

if (!_fs2.default.existsSync(configFile)) {
	_gulpUtil2.default.log(_gulpUtil2.default.colors.red('Config file not found. Aborting...'));
	process.exit(1); // eslint-disable-line no-magic-numbers
}

configJSON = JSON.parse(_fs2.default.readFileSync(configFile));
config = new _Config2.default(configJSON.workflows, _yargs2.default.argv);

var _config = config,
    cwd = _config.cwd,
    env = _config.env,
    isDev = _config.isDev,
    isProd = _config.isProd,
    isTest = _config.isTest,
    tasks = _config.tasks,
    workflow = _config.workflow,
    workflowName = _config.workflowName;
exports.cwd = cwd;
exports.env = env;
exports.isDev = isDev;
exports.isProd = isProd;
exports.isTest = isTest;
exports.tasks = tasks;
exports.workflow = workflow;
exports.workflowName = workflowName;