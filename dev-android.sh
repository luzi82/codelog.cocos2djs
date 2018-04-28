#!/bin/bash

set -e
source env.sh

cocos compile -p android
adb install -r frameworks/runtime-src/proj.android/bin/codelog.cocos2djs-debug.apk
adb logcat -c
adb shell am start -n com.luzi82.codelog.cocos2djs/org.cocos2dx.javascript.AppActivity
adb logcat
