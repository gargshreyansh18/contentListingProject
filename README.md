# Content Listing App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Content Listing App is a React Native application that displays a list of content items in a grid format. It supports features like lazy loading of content, client-side search, and responsive design to ensure a smooth user experience on mobile devices.

## Features

- Infinite scrolling with lazy loading
- Client-side search functionality
- Responsive grid layout with 3 columns
- Custom fonts and styling
- Seamless user experience with no visible scroll bars

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)

## Installation

1. *Clone the repository:*

    bash
    git clone https://github.com/gargshreyansh18/contentListingProject.git
    cd content-listing-app
    

2. *Install dependencies:*

    bash
    npm install
    

3. *Link vector icons (if not automatically linked):*

    bash
    npx react-native link react-native-vector-icons
    

4. *Install and link custom fonts:*

    Place the TitilliumWeb-Regular.ttf font file in the assets/fonts directory, and then run:

    bash
    npx react-native link
    

## Running the App

### Android

1. *Start the Android emulator:*

    Open Android Studio, go to the AVD Manager, and start an emulator.

2. *Run the app:*

    bash
    npx react-native run-android
    

### iOS

1. *Start the iOS simulator:*

    Open Xcode, go to the Simulator, and start an iOS device.

2. *Run the app:*

    bash
    npx react-native run-ios
    

## Folder Structure