# Google fonts

## About Project 

LIVE VERSION: http://frontendowiec.com/gf/index.html


![myimage-alt-tag](http://frontendowiec.com/gf/googlefonts.jpg)

The main idea of this project is to 'copy' as much functionalities as possible from website: https://fonts.google.com/

I used Developer API from Google Fonts from https://developers.google.com/fonts/docs/developer_api

The single font looks like this:
```
 {
   "kind": "webfonts#webfont",
   "family": "Antic",
   "variants": [
    "regular"
   ],
   "subsets": [
    "latin"
   ],
   "version": "v4",
   "lastModified": "2012-07-25",
   "files": {
    "regular": "http://themes.googleusercontent.com/static/fonts/antic/v4/hEa8XCNM7tXGzD0Uk0AipA.ttf"
   }
  },
```

## TECHNOLOGIES
 - Angular CLI 6
 - ngrx - for better state management, however I still think that my store could look better. I will try to polish it soon.
 - Bootstrap 4 / Bootstrap widgets (https://ng-bootstrap.github.io/#/home)
 - ngx-masonry



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
