const util = require('util');

module.exports = (object) => {
	const { module, plugins } = object;
	const loggedObject = {};
	if (module) {
		loggedObject.module = module;
	}
	if (plugins) {
		loggedObject.plugins = plugins;
	}
	console.log(util.inspect(loggedObject, { depth: null, colors: true, compact: false }));
}
