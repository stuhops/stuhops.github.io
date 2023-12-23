import { EnvironmentInterface } from './environment.interface';

export const environment: EnvironmentInterface = {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  version: `${require('../../package.json').version}`,
  assetPrefix: 'https://stu-resume-website.s3.us-west-1.amazonaws.com/',
  resume: {
    download: 'resume.pdf',
    email: 'stuart.hops@gmail.com',
    github: 'https://github.com/stuhops',
  },
};
