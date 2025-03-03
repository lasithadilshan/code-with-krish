import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { InventoryEntity } from './inventory/entity/inventory.entity';

@Module({
  imports: [InventoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3307,
      username: 'root',
      password: '1234',
      database: 'cosmos',
      entities: [InventoryEntity],
      synchronize: true, // don't use this in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
