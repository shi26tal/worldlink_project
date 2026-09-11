

export type UserAttributes = {
  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  avatarUrl?: string;
};

export type registerType = {
  email:string,
  userName:string,
  password:string,
  name:string
}