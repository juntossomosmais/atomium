# Installation
> `npm install --save @types/detect-port`

# Summary
This package contains type definitions for detect-port (https://github.com/node-modules/detect-port).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/detect-port.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/detect-port/index.d.ts)
````ts
// Type definitions for detect-port 1.3
// Project: https://github.com/node-modules/detect-port
// Definitions by: Ivan Medina <https://github.com/ivandevp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DetectPortCallback = (err: Error, _port: number) => void;

interface PortConfig {
    port: number;
    hostname?: string | undefined;
    callback?: DetectPortCallback | undefined;
}

interface DetectPort {
    (port: number | PortConfig, callback: DetectPortCallback): void;
    (port: number | PortConfig): Promise<number>;
}
declare const detectPort: DetectPort;
export = detectPort;

````

### Additional Details
 * Last updated: Thu, 23 Dec 2021 23:34:29 GMT
 * Dependencies: none
 * Global values: none

# Credits
These definitions were written by [Ivan Medina](https://github.com/ivandevp).
