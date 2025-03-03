import { Controller, BadRequestException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryEntity } from './entity/inventory.entity';
import { Repository } from 'typeorm';

@Controller('inventory')
export class InventoryController {
    constructor(
        @InjectRepository(InventoryEntity)
        private inventoryRepository: Repository<InventoryEntity>,
    ) { }

    async create(inventoryDto: CreateInventoryDto) {
        const inventory = this.inventoryRepository.create(inventoryDto);
        return this.inventoryRepository.save(inventory);
    }

    async getInventoryById(id: number) {
        if (!id || isNaN(id)) {
            throw new BadRequestException('Invalid inventory ID');
        }
        const inventory = await this.inventoryRepository.findOne({ where: { id } });

        if (!inventory) {
            throw new BadRequestException(`Product with id ${id}not found`);
        }
        return { ...inventory, price: Number(inventory.price) };
    }

    async getAllInventory() {
        return this.inventoryRepository.find();
    }

    async updateStock(id: number, quantity: number) {
        try {
            const inventory = await this.inventoryRepository.findOne({ where: { id } });
            inventory.quantity -= quantity;
            await this.inventoryRepository.save(inventory);
        } catch (error) {
            throw new BadRequestException(
                `Error updating stock for Product ID ${id}: ${error.message}`,
            );
        }
    }

    async validateStock(
        id: number,
        quantity: number,
    ): Promise<{ available: boolean }> {
        const inventory = await this.inventoryRepository.findOne({ where: { id } });
        return { available: inventory ? inventory.quantity >= quantity : false };
    }
}