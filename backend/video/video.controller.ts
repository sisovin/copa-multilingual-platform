import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('peer-connection')
  async createPeerConnection(@Body() createPeerConnectionDto: any) {
    return this.videoService.createPeerConnection(createPeerConnectionDto);
  }

  @Get('peer-connection/:id')
  async getPeerConnection(@Param('id') id: string) {
    return this.videoService.getPeerConnection(id);
  }
}
