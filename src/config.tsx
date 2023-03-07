/** 
 * When you do not modify the configuration of `node_modules/react-scripts/config/webpack.config.js`, 
 * use this method to remove the packaging of external libraries 
 * Usage:
 * import { React, ReactDOM } from './config';
 * // to do
 * */

const React: any = window.React;
const ReactDOM: any = window.ReactDOM;

export { React, ReactDOM };