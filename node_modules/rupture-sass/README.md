# Rupture-sass
Simple media queries for SASS (Rupture mixins for SASS)



Write ```scss``` code as follows:
```scss
.some-class {
  color: red;
  @include above(32em) {
    color: green;
  }
  @include tablet() {
    color: yellow;
  }
}
```

Which compiles to:
```css
.some-class {
  color: red;
}
@media only screen and (min-width: 32em) {
  .some-class {
    color: green;
  }
}
@media only screen and (min-width: 400px) and (max-width: 1050px) {
  .some-class {
    color: yellow;
  }
}
```

## Installation

`npm install rupture-sass`

## Use

- Import package via ```@import``` directive
  ```scss
  @import 'node_modules/rupture-sass/rupture';
  // ...
  ```
- If using Webpack as a bundler, with ```node-sass``` packge
  ```scss
  @import '~rupture-sass/rupture';
  // ...
  ```
- Download package, and directly include file to project

## API Documentation

### Customization

#### Default values

```scss
$rupture: (
  mobile-cutoff: 400px,
  desktop-cutoff: 1050px,
  hd-cutoff: 1800px,
  enable-em-breakpoints: false, 
  anti-overlap: false,
  density-queries: 'dppx' 'webkit' 'moz' 'dpi',
  retina-density: 1.5,
  use-device-width: false
);
```

In order to override any value use ```$rupture: map-merge($rupture, (key: value, ..., keyN: valueN)```

```scss
$rupture: map-merge($rupture, (
  mobile-cutoff: 768px,
  desktop-cutoff: 1366px
));
```

#### mobile-cutoff (value)
Upper bound where `mobile()` mixin has an effect and lower bound of the `tablet()` mixin.

#### desktop-cutoff (value)
Lower bound where `desktop()` mixin has an effect and upper bound of the `tablet()` mixins.

#### hd-cutoff (value)
Lower bound where `hd()` mixin starts to have an affect

#### enable-em-breakpoints (boolean)
Convert pixel values into EM's values:
```scss
$rupture: map-merge($rupture, (
  enable-em-breakpoints: true
));
@include below(768px) {/*...*/};
// Compiles to:
// @media only screen and (max-width: 48em) {...}
```

#### anti-overlap (boolean | value | list)
Fixes overlaped boundaries of two or more media queries, for example we might have
```css
@media only screen and (max-width: 48em) {/*...*/}
@media only screen and (min-width: 48em) {/*...*/}
```
in this case, when screen size is exactly ```48em's``` or ```768px``` two media queries will be
applied in one time. In order to prevent this, override the ```anti-overlap``` value
```scss
$rupture: map-merge($rupture, (
  anti-overlap: true
));
// Resolves to:
// @media only screen and (max-width: 48em) {/*...*/}
// @media only screen and (min-width: 48.0625em) {/*...*/}
```
By default adjustement happens with ```+1px``` value or ```+0.0625em if``` ```enable-em-breakpoints``` is ```true``` but also specific values, like ```1px``` or ```0.5rem``` might be assigned
```scss
anti-overlap: false // default value
anti-overlap: true // enables 1px (or em equivalent) overlap correction globally
anti-overlap: 0px // same as anti-overlap = false
anti-overlap: 1px // same as anti-overlap = true
anti-overlap: -1px // negative offsets decrease the `max-width` arguments
anti-overlap: 0.001em // positive offsets increase the `min-width` arguments
anti-overlap: 1px 0.0625em 0.0625rem // explicit relative values will be used if they are provided instead of calculating them from the font size
```

#### density-queries (list)

Set of vendor prefixes for generating vendor specific density media queries. Valid values are 'webkit', 'moz', 'o', 'ratio', 'dpi', and 'dppx'
Used in ```density()``` and ```retina()``` mixins as well as when ```$density``` or ```$retina``` specified as parameter
```scss
$rupture: map-merge($rupture, (
  density-queries: 'dppx' 'webkit' 'moz' 'dpi',
));
div {
  @include density(2) {/*...*/}
}
```
Compiles to:
```css
@media only screen and (min-resolution: 2dppx), /* dppx */
only screen and (-webkit_min-device-pixel-ratio: 2), /* webkit */
only screen and (min--moz-device-pixel-ratio: 2), /* moz */
only screen and (min-resolution: 192dpi) { /* dpi */
    div {/*...*/}
}
```

#### retina-density (value)

Density value for retina density mixins, by default ```1.5```

#### use-device-width (boolean)

Toggles ```min-width``` and ```max-width``` media queries to ```min-device-width``` and ```max-device-width```

#### rasterise-media-queries (boolean)

Supresses all adjustements like ```density``` or ```retina``` from all media queries.
Mostly used to generate fallback styles for legasy browsers

##### scale (list)
A list of breakpoint bounds for referencing breakpoint span as an index.
The idea is taken from [breakpoint-slicer](https://github.com/lolmaus/breakpoint-slicer).
```scss
$rupture: map-merge($rupture, (
  scale: 0 400px 600px 800px 1050px 1800px
));
```
In this case, ```0 to 400px``` will have index ```1```, ```400px to 600px``` index ```2```, an so on...
Then you can reference index in mixins, like:
```scss
@include at(2) {/*...*/}
// Compiles to:
// @media only screen and (min-width: 400px) and (max-width: 600px) {}
```

#### scale-names (list)
A list of string reppresentation for indexes in ```scale``` property
```scss
$rupture: map-merge($rupture, (
  scale: 0 400px 600px 800px 1050px 1800px,
  scale-names: 'xs' 's' 'm' 'l' 'xl' 'hd'
));
```
```
scale:                 0        400px       600px       800px       1050px      1800px
//                     └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────
//                          1           2           3           4           5           6
scale-names:               'xs'        's'         'm'         'l'         'xl'        'hd'
```
```scss
@include at(s) {/*...*/}
// Compiles to:
// @media only screen and (min-width: 400px) and (max-width: 600px) {}
```

### Mixins

#### above(value)

Media query kicks in above the specified value, index or scale name

#### from-width(value)

Alias to ```above()```

#### from(value)

Alias to ```above()``` using breakpoint-slicer syntax

#### below(value)

Media query kicks in below the specified value, index or scale name

#### to-width(value) 

Alias to ```below()```

#### to(value) 

Alias to ```below()``` using breakpoint-slicer syntax

#### between(minVal, maxVal)

Media query takes an affect between ```minVal``` and ```maxVal``` value, index or scale name

#### at(value)

Used for specifying media query only at exact index or scale-name
```scss
@include at(s) {/*...*/}
// Compiles to:
// @media only screen and (min-width: 400px) and (max-width: 600px) {}
```
Has no reason with ```px```, ```em``` or ```rem``` values

#### mobile()
Media query for screens width like mobile, by default from ```0``` till ```400px```, upper bound could be changed with ```mobile-cutoff```

#### tablet()
Media query for screens width like tablet, by default from ```400px``` till ```1050px```, lower bound could be changed with ```mobile-cutoff``` and upper bound with ```desktop-cutoff```

#### desktop()
Media query for desktop like screens, by default from ```1050px``` and above, lower bound could be changed with ```desktop-cutoff```

#### hd()
Media query for large screens, by default from ```1800px``` and above, lower bound could be changed with ```hd-cutoff```

#### density(number)
Media query for specific device pixel density, possible values ```1.5```, ```2```
```scss
div {
  @include density(2) {/*...*/}
}
```
Compiles to:
```css
@media only screen and (min-resolution: 2dppx), /* dppx */
only screen and (-webkit_min-device-pixel-ratio: 2), /* webkit */
only screen and (min--moz-device-pixel-ratio: 2), /* moz */
only screen and (min-resolution: 192dpi) { /* dpi */
    div {/*...*/}
}
```

#### retina()

Add ```density``` media queries with ```retina-density```, default retina density is ```1.5``` but migth be changed with ```retina-density```

#### landscape()

Add a media query for screen when the viewport is wider than it is tall or in landscape mode

#### portrait()

Add a media query for screen when the viewport is taller than it is wide or in portrait mode

#### hover()

Add media queries for devices with hover over element's ability

#### touch()

Add media queries for devices with touch only ability

#### Mixins Arguments

Almost all mixins receive parameters to make media query more specific.
Following parameters are: ```$scale-point```, ```$anti-overlap```, ```$density```, ```$orientation```, ```$use-device-width```, ```$fallback-class``` and can be added to mixin separately.
```scss
div {
  @include above(32em, $orientation: portrait, $fallback-class: '.tablet-portrait') {
    color: red;
  }
}
```
Compiles to:
```css
@media only screen and (min-width: 32em) and (orientation: portrait) {
  div {
    color: red;
  }
}

.tablet-portrait div {
  color: red;
}
```

### Miscellaneous

Inspired by [Rupture](http://jescalan.github.io/rupture/) mixins lib for Stylus

### Thanks

[elgandoz](https://github.com/elgandoz)
[Honza](https://github.com/crs1138)

