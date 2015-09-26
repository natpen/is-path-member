var t            = require('tap');
var isPathMember = require('../is-path-member.js');
var path         = require('path');

t.test('setup', function (t) {

	process.env.PATH = '/bar:/bin:/usr/sbin';
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