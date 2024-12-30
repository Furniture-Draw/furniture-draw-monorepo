export type RegisterFormInput ={
    username: string;
    email: string;
  password: string;
  isPrivacyPolicyAccepted: boolean;
};
export type RegisterPageProps= {
    onHandleSubmit: (prop: RegisterFormInput) => void;
      onGoogleClick?: () => void;
      onFacebookClick?: () => void;
      onGithubClick?: () => void;
};