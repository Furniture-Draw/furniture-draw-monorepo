import { SubmitHandler } from "react-hook-form";

export type LoginFormInput = {
  email: string;
  password: string;
};

export type LoginPageProps = {
  logo: string;
  onHandleSubmit: SubmitHandler<LoginFormInput>;
  onGoogleClick?: () => void;
  onFacebookClick?: () => void;
  onGithubClick?: () => void;
};
