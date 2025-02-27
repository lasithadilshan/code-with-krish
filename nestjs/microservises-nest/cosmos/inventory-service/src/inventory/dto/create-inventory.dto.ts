import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateInventoryDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    @IsInt()
    @Min(0)
    readonly quantity: number;

    @IsInt()
    @Min(0)
    readonly price: number;
}