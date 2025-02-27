import { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}

    @Post()
    createInventory(@Body() createInventoryDto: CreateInventoryDto) {
        return this.inventoryService.addInventory(createInventoryDto);
    }

    @Get(':id')
    getInventory(@Param('id') id: number) {
        return this.inventoryService.findInventory(id);
    }

    @Patch(':id/reduce-stock')
    reduceStock(@Param('id') id: number, @Body('quantity') quantity: number) {
        return this.inventoryService.updateStock(id, quantity);
    }
}