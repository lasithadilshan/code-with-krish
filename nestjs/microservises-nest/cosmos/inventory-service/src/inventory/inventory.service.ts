import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { InventoryEntity } from './entity/inventory.entity';

@Injectable()
export class InventoryService {
    private inventory: InventoryEntity[] = [];
    private idCounter = 1;

    addInventory(createInventoryDto: CreateInventoryDto): InventoryEntity {
        const newInventoryItem = {
            id: this.idCounter++,
            ...createInventoryDto,
        };
        this.inventory.push(newInventoryItem);
        return newInventoryItem;
    }

    findInventory(id: number): InventoryEntity {
        const item = this.inventory.find(inv => inv.id === id);
        if (!item) {
            throw new NotFoundException(`Inventory item with ID ${id} not found`);
        }
        return item;
    }

    updateStock(id: number, quantity: number): InventoryEntity {
        const item = this.findInventory(id);
        if (item.quantity < quantity) {
            throw new NotFoundException(`Not enough stock for item with ID ${id}`);
        }
        item.quantity -= quantity;
        return item;
    }

    getAllInventory(): InventoryEntity[] {
        return this.inventory;
    }
}