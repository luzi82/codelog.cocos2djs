#!/bin/bash

# force quit when error
set -e

source env.sh

cocos compile -p linux
cocos compile -p android
