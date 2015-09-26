module.exports = isPathMember;
isPathMember.sync = isPathMemberSync;

var path = require('path');

function isPathMember(potentialPathMember, opt, cb) {

	if (typeof opt === 'function') {
		cb = opt;
		opt = {};
	}

	var colon = opt.colon || path.delimiter;
	var pathEnv = process.env.PATH || '';
	var pathMembers = pathEnv.split(colon);

	var absolutePath = path.resolve(potentialPathMember);

	return cb(null, pathMembers.indexOf(absolutePath) >= 0);
}

function isPathMemberSync(potentialPathMember, opt) {

	opt = opt || {};

	var colon = opt.colon || path.delimiter;
	var pathEnv = process.env.PATH || '';
	var pathMembers = pathEnv.split(colon);

	var absolutePath = path.resolve(potentialPathMember);

	return pathMembers.indexOf(absolutePath) >= 0;
}