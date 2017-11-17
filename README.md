# cordova-svn-revision-build-number

Retrieve the build number from SVN revision


## Install
Install the following package below inside of your cordova app's root folder.
```bash
$ npm install cordova-svn-revision-build-number
```
A scripts/ folder will be created with the 'UpdateBuildNumber.js' file in it.

Then add the following to your app's config.xml file:
```xml
<hook src="scripts/UpdateBuildNumber.js" type="after_build"/>
```

Script is designed to set the `android-versionCode`, `ios-CFBundleVersion`, `osx-CFBundleVersion` and `windows-packageVersion` fields in the config.xml file to the revision number of the SVN repository.

## References
This library was inspired and influenced by the [cordova-build-increment](https://github.com/cnring18/cordova-build-increment) library.
