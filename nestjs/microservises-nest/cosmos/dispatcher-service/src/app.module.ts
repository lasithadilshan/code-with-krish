import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispatcherModule } from './dispatcher/dispatcher.module';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleController } from './vehicle/vehicle.controller';

@Module({
  imports: [DispatcherModule],
  controllers: [AppController, VehicleController],
  providers: [AppService, VehicleService],
})
export class AppModule {}
