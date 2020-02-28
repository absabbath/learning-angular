// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyARGrGBz11rCTkH4GQjaeaKugADtja0-fg',
    authDomain: 'platzi-store-8b094.firebaseapp.com',
    databaseURL: 'https://platzi-store-8b094.firebaseio.com',
    projectId: 'platzi-store-8b094',
    storageBucket: 'platzi-store-8b094.appspot.com',
    messagingSenderId: '88877914041',
    appId: '1:88877914041:web:651c171d137d0fb0554868'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
