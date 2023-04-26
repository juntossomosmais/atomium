export { default as instance } from 'npmlog';
import chalk from 'chalk';

declare const colors: {
    pink: chalk.Chalk;
    purple: chalk.Chalk;
    orange: chalk.Chalk;
    green: chalk.Chalk;
    blue: chalk.Chalk;
    red: chalk.Chalk;
    gray: chalk.Chalk;
};
declare const logger: {
    verbose: (message: string) => void;
    info: (message: string) => void;
    plain: (message: string) => void;
    line: (count?: number) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    trace: ({ message, time }: {
        message: string;
        time: [number, number];
    }) => void;
    setLevel: (level?: string) => void;
};

declare const once: {
    (type: 'verbose' | 'info' | 'warn' | 'error'): (message: string) => void;
    clear(): void;
    verbose: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
};
declare const deprecate: (message: string) => void;

export { colors, deprecate, logger, once };
