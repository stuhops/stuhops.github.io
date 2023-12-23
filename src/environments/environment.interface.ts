export interface EnvironmentInterface {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  version: string;
  assetPrefix: 'assets/local/' | 'https://stu-resume-website.s3.us-west-1.amazonaws.com/';
  resume: {
    download: string;
    email: string;
    github: string;
  };
}
