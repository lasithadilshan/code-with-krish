import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  vehicle_number: string;

  @IsEmail()
  city: string;
  
}
