import { test as base } from './fixtures';

export type EnvOptions = {
    uiBaseUrl: string;
    apiBaseUrl: string;
};

export const test = base.extend<EnvOptions>({
    uiBaseUrl: ['', { option: true }],
    apiBaseUrl: ['', { option: true }],

});
