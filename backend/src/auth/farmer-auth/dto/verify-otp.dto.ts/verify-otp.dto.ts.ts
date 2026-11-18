import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class VerifyOtpDto {
  @IsNotEmpty()
  @IsPhoneNumber('NP')
  phone!: string;

  @IsNotEmpty()
  @IsString()
  otp!: string;
}