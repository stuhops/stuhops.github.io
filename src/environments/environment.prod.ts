import { defaultEnvironment } from './environment.default';
import { EnvironmentInterface } from './environment.interface';

const overrides: Partial<EnvironmentInterface> = {};

export const environment: EnvironmentInterface = Object.assign(defaultEnvironment, overrides);
