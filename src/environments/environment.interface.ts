export interface EnvironmentInterface {
  assetPrefix: 'assets/local/' | 'https://stu-resume-website.s3.us-west-1.amazonaws.com/';
  resume: {
    download: string;
    email: string;
    github: string;
  };
}
