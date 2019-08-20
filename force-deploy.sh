#!/bin/bash
npm run prod
scp -oStrictHostKeyChecking=no -r ./dist/* root@sleepy.fish:/var/www/sleepy.fish