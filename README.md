# is-inside
Check whether a point is inside a geometric shape
# @codewell/is-inside

## Installation
```
npm install @codewell/is-inside
```

## Basic Usage
```JavaScript
import <nameOfModule> from '@codewell/is-inside';

// Write examples here
```

## Testing
**Functions**  
Write tests in the `tests/` folder

**Package**
1. Make a dry reslease with `npm run dry-release`. This will generate a file `packagename-x.x.x.tgz`.
2. Install the package in your other application/package by running `npm install path/to/packagename-x.x.x.tgz`.
3. Import and use as usual in you application/package.

## Releasing
1. Run `npm run release`
2. Push the code to github
3. Update package version 
    - `npm version patch` updates `x.x.1` -> `x.x.2`
    - `npm version minor` updates `x.1.x` -> `x.2.x`
    - `npm version major` updates `1.x.x` -> `2.x.x`
4. Run `npm publish --access public`

## Issues
Please help by posting issues here on github
