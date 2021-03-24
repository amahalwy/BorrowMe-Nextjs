import { NextRouter } from "next/router";
import { ModalPosting, CurrentUser, Posting } from "../redux/types";
export interface PersistConfig {
  key: string;
  storage?: any;
  whitelist?: string[];
  stateReconciler: any;
}
// Generals

export interface PostingCalendarProps {
  isOpen: boolean;
  modalPosting: ModalPosting;
  currentUser: CurrentUser;
  clearModal: () => void;
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
  currentUser?: CurrentUser;
}

export interface CalendarProps {
  modalPosting: ModalPosting;
  currentUser: CurrentUser;
  setShowSelection: (showSelection: string) => void;
  clearModal: () => void;
}
export interface CalendarState {
  startDate: Date;
  endDate: null | Date;
  key: string;
}
export interface PostingsIndexProps {
  modalPosting: ModalPosting;
  filteredList: Posting[];
}
export interface PostingItemProps {
  posting: Posting;
  clickPosting: (_id: string) => void;
}
export interface SearchBarProps {
  input: string;
  setInput: (input: string) => void;
  searchType: string;
  handleChange: () => void;
}

// Navbar section
export interface NavBarProps {
  isAuthenticated: boolean;
  logout: () => void;
}
export interface NavBarMenuProps {
  router: NextRouter;
  isAuthenticated: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  logoutUser: () => void;
}
export interface NavBarLogoProps {
  router: NextRouter;
}

// Portfolio section
export interface ProfileFormProps {
  imageSrc: string | any;
  imageFile: any | {};
  isUpdating: boolean;
  currentUser?: CurrentUser;
  setIsUpdating: (isUpdating: boolean) => void;
  updateUser: (id: string, data: {}) => CurrentUser;
  fetchUser: (id: string) => any;
  fetchCurrentUser: (id: string) => any;
  setIsEditingForm: (isEditingForm: boolean) => void;
}
export interface ImageUploadProps {
  setImageSrc: (image: string | ArrayBuffer) => void;
  setImageFile: (image: string | File) => void;
}
export interface PortfolioFormSectionProps {
  onSubmit: (values: {}) => any;
  initialVals: {} | any;
}
export interface ProfileImageSectionProps {
  state: any;
  imageSrc: string;
  isEditingForm: boolean;
  setImageSrc: (image: string | ArrayBuffer) => any;
  setImageFile: (image: string | File) => any;
}
