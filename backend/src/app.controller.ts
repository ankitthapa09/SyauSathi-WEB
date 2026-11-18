import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health(): {
    status: 'ok';
    service: 'syau-sathi-api';
    timestamp: string;
  } {
    return {
      status: 'ok',
      service: 'syau-sathi-api',
      timestamp: new Date().toISOString(),
    };
  }
}
