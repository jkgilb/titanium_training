#!/bin/sh
if [ "x$TITANIUM_CLI_XCODEBUILD" == "x" ]; then NO_COLORS="--no-colors"; else NO_COLORS=""; fi
/opt/boxen/nvm/v0.8.8/bin/node "/opt/boxen/nvm/v0.8.8/bin/titanium" build --platform iphone --sdk 3.1.2.GA --no-prompt --no-banner $NO_COLORS --xcode
exit $?
