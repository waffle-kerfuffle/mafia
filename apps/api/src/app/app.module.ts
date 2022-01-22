import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UtilityModule } from './utility/utility.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: +process.env.POSTGRES_PORT,
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DATABASE,
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    // UtilityModule,
    // UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('ENVIRONMENT: ', process.env.CONFIG);
  }
}
