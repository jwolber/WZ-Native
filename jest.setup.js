jest.mock(
  '@react-navigation/elements/lib/commonjs/assets/back-icon.png',
  () => null,
);

jest.mock(
  '@react-navigation/elements/lib/commonjs/assets/back-icon-mask.png',
  () => null,
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-config', () => {
  return {
    GAMER_TAG: 'TEST',
    ACT_SSO_COOKIE: 'TEST',
  };
});
