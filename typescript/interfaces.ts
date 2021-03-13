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
