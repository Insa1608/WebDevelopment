#!/bin/sh
set -e -u

npm install

exec "$@"

