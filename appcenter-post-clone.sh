#!/usr/bin/env bash

if [ "$IS_ANDROID" == "true" ]; then
  # this removes the line for signing on android, to avoid conflicts with appcenter
  sed -i -e $'s/signingConfig signingConfigs.release//' ./android/app/build.gradle
  # this replaces the codepush token with the one from appcenter
  sed -i '' "s|<string moduleConfig=\"true\" name=\"CodePushDeploymentKey\">.*</string>|<string moduleConfig=\"true\" name=\"CodePushDeploymentKey\">$ANDROID_CODE_PUSH_TOKEN</string>|g" ./android/app/src/main/res/values/strings.xml

  else
  # this replaces the codepush token with the one from appcenter on IOS
  plutil -replace CodePushDeploymentKey -string "$IOS_CODE_PUSH_TOKEN" ./ios/ScrollingTherapy/Info.plist
fi