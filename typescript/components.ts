export interface ModalPosting {
  _id: string;
  address: string;
  city: string;
  createdAt: string;
  description: string;
  image: string;
  ownerId: string;
  price: string;
  state: string;
  tags: string[];
  title: string;
  updatedAt: string;
  zipCode: string;
}
export interface CurrentUser {
  address: string;
  city: string;
  email: string;
  exp: number;
  firstName: string;
  iat: number;
  id: string;
  lastName: string;
  postings: [];
  profilePhoto: string;
  state: string;
  zipCode: string;
}
export interface PostingCalendarProps {
  isOpen: boolean;
  modalPosting: ModalPosting;
  currentUser: CurrentUser;
}
export interface Field {
  type?: string;
  value?: string;
  id: string;
  placeholder: string;
  inputStyles: {};
}
export interface InputFieldsProps {
  inputField: Field;
}
export interface PersistConfig {
  key: string;
  storage?: any;
}
