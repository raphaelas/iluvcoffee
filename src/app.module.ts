import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesModule } from './coffees/coffees.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateCoffeeModule } from './create-coffee/create-coffee.module';

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
    CreateCoffeeModule,
  ],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule {}
