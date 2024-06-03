import { Controller, Get } from '@nestjs/common';

@Controller('plan')
export class PlanController {
  @Get()
  getHello(): string {
    return 'plan';
  }
}
