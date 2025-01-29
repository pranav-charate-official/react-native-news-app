import {StyleSheet} from 'react-native';

export const appStyle = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    gap: 15,
    backgroundColor: '#fbfff4',
  },
  pageTitle: {
    marginHorizontal: 16,
    fontSize: 32,
    fontWeight: 700,
    color: '#1e290b',
  },
  pageSubTitle: {
    marginHorizontal: 16,
    fontSize: 18,
    color: '#a5aa97',
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
  buttonIcon: {
    width: 20,
    height: '100%',
    resizeMode: 'contain',
  },
  newsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
