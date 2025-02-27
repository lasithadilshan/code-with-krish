import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InventoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    price: number;
}