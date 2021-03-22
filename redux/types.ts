// Generals
export interface NewUser {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface Posting {
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
  lastName: string;
  postings: [];
  profilePhoto: string;
  state: string;
  zipCode: string;
  id?: string;
  _id?: string;
}
