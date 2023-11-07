import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from './assets/typeorm.config';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b5kdobbreoetizdfcokq-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uhcjilopweft7so7',
      password: 'UY1IDt02strcTKOMq04r',
      database: 'b5kdobbreoetizdfcokq',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
