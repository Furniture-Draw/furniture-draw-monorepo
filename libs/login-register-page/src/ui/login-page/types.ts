export type LoginFormInput = {
  email: string;
  password: string;
};

export type LoginPageProps = {
  logo: string;
  onHandleSubmit: (prop: LoginFormInput) => void;
  onGoogleClick?: () => void;
  onFacebookClick?: () => void;
  onGithubClick?: () => void;
};
