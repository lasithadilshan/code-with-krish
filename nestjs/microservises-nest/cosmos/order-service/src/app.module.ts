import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders/entity/order.entity';
import { OrderItem } from './orders/entity/order.item.entity';

@Module({
  imports: [OrdersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3307,
      username: 'root',
      password: '1234',
      database: 'cosmos',
      entities: [Order,OrderItem],
      synchronize: true, //only on dev
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
