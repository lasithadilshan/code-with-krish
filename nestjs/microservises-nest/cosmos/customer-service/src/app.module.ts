import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entity/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOSTNAME || 'localhost',
      port: 3307,
      username: 'root',
      password: '1234',
      database: 'cosmos',
      entities: [Customer],
      synchronize: true, // dont use this in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
