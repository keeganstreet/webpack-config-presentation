module.exports = (object) => {
	const { module, plugins } = object;
	const loggedObject = {};
	if (module) {
		loggedObject.module = module;
	}
	if (plugins) {
		loggedObject.plugins = plugins;
	}
	console.dir(loggedObject, { depth: null });
}
