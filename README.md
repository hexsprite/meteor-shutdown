Register a shutdown callback that is called properly in development and production.


Thanks to some hackery from this issue I threw this into a package which is only a temporary fix.

https://github.com/meteor/meteor/issues/2167

Usage:

```
import { onShutdown } from 'meteor/hexsprite:shutdown'

onShutdown(callback)
```

In production mode this will be registered using SIGTERM and in development mode this hooks into Meteor's existing exit callback.

Install:

`meteor add hexsprite:shutdown`
