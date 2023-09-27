import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from '@infra/config';

@Module({
  imports: [EnvironmentConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
