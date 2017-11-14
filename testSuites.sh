#!/usr/bin/env bash
wdio --suite smokeTests wdio.conf.js
wdio --suite chatter wdio.conf.js
wdio --suite cases wdio.conf.js
