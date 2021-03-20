import { CurrentUser } from "./components";
export interface HomeProps {
  postings?: {};
  isAuthenticated?: boolean;
  currentUser?: CurrentUser;
  pathname?: string;
  dispatch?: (r) => void;
}
