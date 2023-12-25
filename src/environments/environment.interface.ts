export interface EnvironmentInterface {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  version: string;
  assetPrefix: 'assets/local/' | 'https://stu-resume-website.s3.us-west-1.amazonaws.com/';
  breakpoints: {
    xs: 360 | number;
    small: 440 | number;
    medium: 760 | number;
    large: 1024 | number;
    xl: 1440 | number;
  };
  resume: {
    download: string;
    email: string;
    github: string;
  };
}
