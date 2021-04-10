// NavigationService.js

import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  if (navigatorRef) _navigator = navigatorRef;
}

function navigate(routeName, params) {
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  } else {
    //todo - reports to firebase user is unable to navigate
  }
}
// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};
