#!/usr/bin/env sh

# android
sed -i '' "s|<string moduleConfig=\"true\" name=\"CodePushDeploymentKey\">.*</string>|<string moduleConfig=\"true\" name=\"CodePushDeploymentKey\">hidden</string>|g" ../android/app/src/main/res/values/strings.xml

# ios
plutil -replace CodePushDeploymentKey -string "hidden" ../ios/ScrollingTherapy/Info.plist