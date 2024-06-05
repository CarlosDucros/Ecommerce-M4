export class UserRegisterDto {
  name: string;
  email: string;
  address: string;
  phone: number;
  password: string;
}

export class UserLoginDto {
  email: string;
  password: string;
}
