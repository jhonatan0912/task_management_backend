import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const options: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'b5kdobbreoetizdfcokq-mysql.services.clever-cloud.com',
  port: 3306,
  username: 'uhcjilopweft7so7',
  password: 'UY1IDt02strcTKOMq04r',
  database: 'b5kdobbreoetizdfcokq',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
};