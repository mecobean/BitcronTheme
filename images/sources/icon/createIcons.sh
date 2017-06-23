#!/bin/sh

echo

if [ -e Icons ]
then
    rm -rf Icons
fi

mkdir Icons

cp icon.png Icons/android-chrome-36x36.png > /dev/null
cp icon.png Icons/android-chrome-48x48.png > /dev/null
cp icon.png Icons/android-chrome-72x72.png > /dev/null
cp icon.png Icons/android-chrome-96x96.png > /dev/null
cp icon.png Icons/android-chrome-144x144.png > /dev/null
cp icon.png Icons/android-chrome-192x192.png > /dev/null
cp icon.png Icons/apple-touch-icon-57x57.png > /dev/null
cp icon.png Icons/apple-touch-icon-60x60.png > /dev/null
cp icon.png Icons/apple-touch-icon-72x72.png > /dev/null
cp icon.png Icons/apple-touch-icon-76x76.png > /dev/null
cp icon.png Icons/apple-touch-icon-114x114.png > /dev/null
cp icon.png Icons/apple-touch-icon-120x120.png > /dev/null
cp icon.png Icons/apple-touch-icon-144x144.png > /dev/null
cp icon.png Icons/apple-touch-icon-152x152.png > /dev/null
cp icon.png Icons/apple-touch-icon-180x180.png > /dev/null
cp icon.png Icons/apple-touch-icon-precomposed.png > /dev/null
cp icon.png Icons/apple-touch-icon.png > /dev/null
cp icon.png Icons/favicon-16x16.png > /dev/null
cp icon.png Icons/favicon-32x32.png > /dev/null
cp icon.png Icons/favicon-96x96.png > /dev/null
cp icon.png Icons/favicon-194x194.png > /dev/null
cp icon.png Icons/favicon.ico > /dev/null
cp icon.png Icons/mstile-70x70.png > /dev/null
cp icon.png Icons/mstile-144x144.png > /dev/null
cp icon.png Icons/mstile-150x150.png > /dev/null
cp icon.png Icons/mstile-310x150.png > /dev/null
cp icon.png Icons/mstile-310x310.png > /dev/null


sips -z 36 36 Icons/android-chrome-36x36.png > /dev/null
sips -z 48 48 Icons/android-chrome-48x48.png > /dev/null
sips -z 72 72 Icons/android-chrome-72x72.png > /dev/null
sips -z 96 96 Icons/android-chrome-96x96.png > /dev/null
sips -z 144 144 Icons/android-chrome-144x144.png > /dev/null
sips -z 192 192 Icons/android-chrome-192x192.png > /dev/null
sips -z 57 57 Icons/apple-touch-icon-57x57.png > /dev/null
sips -z 60 60 Icons/apple-touch-icon-60x60.png > /dev/null
sips -z 72 72 Icons/apple-touch-icon-72x72.png > /dev/null
sips -z 76 76 Icons/apple-touch-icon-76x76.png > /dev/null
sips -z 114 114 Icons/apple-touch-icon-114x114.png > /dev/null
sips -z 120 120 Icons/apple-touch-icon-120x120.png > /dev/null
sips -z 144 144 Icons/apple-touch-icon-144x144.png > /dev/null
sips -z 152 152 Icons/apple-touch-icon-152x152.png > /dev/null
sips -z 180 180 Icons/apple-touch-icon-180x180.png > /dev/null
sips -z 180 180 Icons/apple-touch-icon-precomposed.png > /dev/null
sips -z 180 180 Icons/apple-touch-icon.png > /dev/null
sips -z 16 16 Icons/favicon-16x16.png > /dev/null
sips -z 32 32 Icons/favicon-32x32.png > /dev/null
sips -z 96 96 Icons/favicon-96x96.png > /dev/null
sips -z 194 194 Icons/favicon-194x194.png > /dev/null
sips -z 48 48 Icons/favicon.ico > /dev/null
sips -z 128 128 Icons/mstile-70x70.png > /dev/null
sips -z 144 144 Icons/mstile-144x144.png > /dev/null
sips -z 270 270 Icons/mstile-150x150.png > /dev/null
sips -z 558 270 Icons/mstile-310x150.png > /dev/null
sips -z 558 558 Icons/mstile-310x310.png > /dev/null

echo "Success!"
