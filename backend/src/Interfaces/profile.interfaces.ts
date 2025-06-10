export interface CreateProfileParams {
  userId: string;
  userImage: string;
  gender: 'male' | 'female' | 'other'; 
  dateOfBirth: string; 
  about: string;
  theme: string;
}
export interface updateProfileInterface{
  userId:string,
  data:{
  userImage?: string;
  gender?: 'male' | 'female' | 'other'; 
  dateOfBirth?: string; 
  about?: string;
  theme?: string;
  }
}