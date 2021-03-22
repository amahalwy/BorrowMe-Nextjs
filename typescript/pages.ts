import { CurrentUser, NewUser, Posting } from "../redux/types";
export interface HomeProps {
  postings?: Posting[];
  isAuthenticated?: boolean;
  currentUser?: CurrentUser;
  pathname?: string;
  dispatch?: (r) => void;
}
export interface LoginProps {
  login: (user: { email: string; password: string }) => void;
  clearErrors: () => void;
}
export interface SignupProps {
  signup: (user: NewUser) => void;
  clearErrors: () => void;
}
export interface ProfileProps {
  isAuthenticated?: boolean;
  currentUser?: CurrentUser;
  updateUser: (id: string, data: {}) => Promise<any>;
}
