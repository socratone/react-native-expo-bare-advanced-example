# React Native Expo Bare Advanced Example

React Native Expo Bare 프로젝트를 다양하게 사용하기 위한 예제 코드를 작성합니다.

## Scripts

### `yarn start`

local dev server 실행

https://docs.expo.dev/workflow/expo-cli/

## 초기 설치 과정

### Expo를 이용한 React Native 설치

`expo init react-native-expo-bare-advanced-example`

`minimal` 선택

https://docs.expo.dev/

### 타입스크립트 설정

`touch tsconfig.json`

`expo start`

`mv App.js App.tsx`

https://docs.expo.dev/guides/typescript/

### React Navigation 설치

`yarn add @react-navigation/native`

`yarn add react-native-screens react-native-safe-area-context`

`npx pod-install ios`

`yarn add @react-navigation/native-stack`

https://reactnavigation.org/docs/getting-started
https://reactnavigation.org/docs/hello-react-navigation

## Chrome Developer Tools

### iOS

에뮬레이터의 메뉴 중 Device -> Shake -> Debug With Chrome을 선택하면 `http://localhost:8081/debugger-ui/`에 디버거 웹 앱이 실행되고 크롬의 개발자 도구를 이용해서 편리하게 개발 할 수 있다.

## React Native SVG

### 설치

`expo install react-native-svg`

https://github.com/react-native-svg/react-native-svg
