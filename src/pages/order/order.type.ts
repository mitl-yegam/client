export type Form = {
  companyName: string;
  name: string;
  phone: string;
  email: string;
  requirement: string;
  files: FileList | null | File[];
};
