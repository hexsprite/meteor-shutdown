// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by shutdown.js.
import { name as packageName } from "meteor/hexsprite:shutdown";

// Write your tests here!
// Here is an example.
Tinytest.add('shutdown - example', function (test) {
  test.equal(packageName, "shutdown");
});
