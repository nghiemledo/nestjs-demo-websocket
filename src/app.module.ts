import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule { }