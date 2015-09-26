var t            = require('tap');
var isPathMember = require('../is-path-member.js');
var path         = require('path');

var isWindows = process.platform === 'win32' ||
	process.env.OSTYPE === 'cygwin' ||
	process.env.OSTYPE === 'msys';

t.test('setup', function (t) {

	if (isWindows) {
		process.env.PATH = 'C:\\bar' + path.delimiter + 'C:\\bin' + path.delimiter + 'C:\\usr\\sbin';
	} else {
		process.env.PATH = '/bar' + path.delimiter + '/bin' + path.delimiter + '/usr/sbin';
	}
	t.end();
});

t.test('does not find when not in path', function (t) {
	t.plan(1);

	t.test('absolute', function (t) {
		t.plan(2);

		t.test('without trailing slash', function (t) {
			t.plan(2);

			isPathMember('/foo', function (err, retVal) {
				t.equal(retVal, false)
			});

			t.equal(isPathMember.sync('/foo'), false);
		});

		t.test('with trailing slash', function (t) {
			t.plan(2);

			isPathMember('/foo/', function (err, retVal) {
				t.equal(retVal, false)
			});

			t.equal(isPathMember.sync('/foo/'), false);
		});
	});
})

t.test('does find when in path', function (t) {
	t.plan(1);

	t.test('absolute', function (t) {
		t.plan(2);

		t.test('without trailing slash', function (t) {
			t.plan(2);

			isPathMember('/bin', function (err, retVal) {
				t.equal(retVal, true)
			});

			t.equal(isPathMember.sync('/bin'), true);
		});

		t.test('with trailing slash', function (t) {
			t.plan(2);

			isPathMember('/bin/', function (err, retVal) {
				t.equal(retVal, true)
			});

			t.equal(isPathMember.sync('/bin/'), true);
		});
	});
});