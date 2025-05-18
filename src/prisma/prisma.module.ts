import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  global: true,
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
