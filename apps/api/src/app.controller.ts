import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('crm/stats')
  getStats() {
    return this.appService.getStats();
  }

  @Get('crm/deals')
  getDeals() {
    return this.appService.getDeals();
  }
}
