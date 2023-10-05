#!/usr/bin/env sh

if [[ $# -eq 0 ]] ; then
    echo 'You need to call this script with an .env file'
    echo 'ex: sh copyEnvVars.sh path/to/.env'
    exit 1
fi

# usage - sh copyEnvVars.sh path/to/.env

# you need to have an .env file in the project
# source ../.env
source $1

# android
sed -i '' "s|<string moduleConfig=\"true\" name=\"CodePushDeploymentKey\">.*</string>|<string moduleConfig=\"true\" name=\"CodePushDeploymentKey\">$ANDROID_CODE_PUSH_TOKEN</string>|g" ../android/app/src/main/res/values/strings.xml

# ios
plutil -replace CodePushDeploymentKey -string "$IOS_CODE_PUSH_TOKEN" ../ios/ScrollingTherapy/Info.plist