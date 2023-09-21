// CommonJS Modules
// const { CommonJSModulesExample } = require('./modules/commonjs');
// const CommonJSModules = require('./modules/commonjs');

// CommonJSModulesExample();
// CommonJSModules.CommonJSModulesExample();

// ESModules
import { ESModulesExample } from "./modules/esmodules.js";
import constantExpression from "./modules/esmodules.js";
import * as ESModules from "./modules/esmodules.js";

ESModulesExample();
console.log(constantExpression);
ESModules.ESModulesExample();