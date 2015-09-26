# is-path-member

Platform-agnostic check of whether a given path is a member of the PATH environment variable.

## USAGE

```javascript
var isPathMember = require('is-path-member');

// async usage
isPathMember('/foo/bar/baz/', function(err, retVal) {
	// err is non-null if an error occurred
	// retVal is a boolean
});

// sync usage
var retVal = isPathMember.sync('/foo/bar/baz/');
```

## OPTIONS

If you pass in options, then `colon` is relevant.