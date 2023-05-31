// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: "http://localhost:3000/pokemon",
  firebaseConfig: {
    apiKey: "AIzaSyA_JVy9dyhCxhsgpnqDXVGraErOzvSKPlQ",
    authDomain: "mobile-b4326.firebaseapp.com",
    databaseURL: "https://mobile-b4326-default-rtdb.firebaseio.com",
    projectId: "mobile-b4326",
    storageBucket: "mobile-b4326.appspot.com",
    messagingSenderId: "434161009347",
    appId: "1:434161009347:web:031bcf6634f78bd79c9876"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
