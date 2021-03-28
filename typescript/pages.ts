import { CurrentUser, NewUser, Posting } from "../redux/types";
export interface HomeProps {
  postings?: Posting[];
  isAuthenticated?: boolean;
  currentUser?: CurrentUser;
  pathname?: string;
  clearPostings?: () => void;
}
export interface LoginProps {
  login?: (user: { email: string; password: string }) => void;
  clearErrors?: () => void;
  clearUsers?: () => void;
  clearPostings?: () => void;
}
export interface SignupProps {
  signup: (user: NewUser) => void;
  clearErrors: () => void;
}
export interface ProfileProps {}
export interface PostingProps {
  postings?: Posting[];
}
