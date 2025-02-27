import { createOrderDto } from './dto/create-order.dto';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './entity/order.entity';
import { UpdateOrderStatus } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {

    constructor(private ordersService: OrdersService) {}

    @Post()
    async create(@Body() createOrderDto:createOrderDto): Promise<Order> {
        return await this.ordersService.create(createOrderDto);
    }

    @Get(':id')
    async fetch(@Param('id') id: number) {
        return await this.ordersService.fetch(id);
    }

    @Get()
    async fetchAll() {
        return await this.ordersService.fetchAll();
    }

    @Patch(':id/status')
    async updateOrderStatus(
      @Param('id') id: number,
      @Body() updateOrderStatus: UpdateOrderStatus,
    ) {
      return await this.ordersService.updateOrderStatus(id, updateOrderStatus);
    }
}
