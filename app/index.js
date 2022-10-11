#!/usr/bin/env node

var StatsD = require('hot-shots');
var dogstatsd = new StatsD("localhost", 8125);

// Increment a counter.
dogstatsd.increment('dcnd.dummymetric')

// Create a custom event
dogstatsd.event(`Docker Compose NodeJS Datadog Example ${Date.now()}`,`Hey look, custom events are working!`)

console.log( "NodeJS CLI app has finished");