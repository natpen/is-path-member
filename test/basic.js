var t            = require('tap');
var isPathMember = require('../is-path-member.js');
var path         = require('path');

// var isWindows = process.platform === 'win32' ||
// 		process.env.OSTYPE === 'cygwin' ||
// 		process.env.OSTYPE === 'msys';

// var skip = { skip: isWindows ? 'not relevant on windows' : false };

t.test('does not find when not in path', function (t) {
	t.plan(2);

	t.test('absolute', function (t) {
		t.plan(2);

		isPathMember('/foo', function (err, retVal) {
			t.equal(retVal, false)
		});

		t.equal(isPathMember.sync('/foo'), false);
	});

	t.test('absolute with trailing slash', function (t) {
		t.plan(2);

		isPathMember('/foo/', function (err, retVal) {
			t.equal(retVal, false)
		});

		t.equal(isPathMember.sync('/foo/'), false);
	});
})

t.test('finds when in path', function (t) {
	t.plan(2);

	t.test('absolute', function (t) {
		t.plan(2);

		isPathMember('/bin', function (err, retVal) {
			t.equal(retVal, true)
		});

		t.equal(isPathMember.sync('/bin'), true);
	});

	t.test('absolute with trailing slash', function (t) {
		t.plan(2);

		isPathMember('/bin/', function (err, retVal) {
			t.equal(retVal, true)
		});

		t.equal(isPathMember.sync('/bin/'), true);
	});
});