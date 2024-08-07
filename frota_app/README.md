This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli) and [without Expo](https://reactnative.dev/docs/getting-started-without-a-framework).

- Dependencies:
  - `react-native-vector-icons`
  - `react-native-screens`
  - `react-native-safe-area-context`
  - `react-native-gesture-handler`
  - `@react-navigation/native`
  - `@react-navigation/stack`
  - `@types/react-native-vector-icons`

Dependencies were installed with `yarn add`.

After installing the dependencies, add into android config folder (`android/app/build.gradle`) this line for use icons library:

- `apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")`

Now clean and rebuild the project:

```bash
cd android
./gradlew clean
cd ..
yarn android
```

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/set-up-your-environment) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

---

# Update Assets:

`npx react-native-asset`

---

# List AVDs:

`emulator -list-avds`

# Starting the AVD:

`emulator -avd AVD_NAME`
`emulator -avd Pixel_3_API_30`

# Additional Options:

`emulator -avd AVD_NAME -wipe-data`
`emulator -avd AVD_NAME -skin 1080x1920`
`emulator -avd AVD_NAME -debug`

---