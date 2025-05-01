import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VideoService } from './video.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('video')
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @ApiOperation({ summary: 'Create a new peer connection' })
  @ApiBody({ schema: { type: 'object', properties: { createPeerConnectionDto: { type: 'object' } } } })
  @ApiResponse({ status: 201, description: 'Peer connection created successfully.' })
  @Post('peer-connection')
  async createPeerConnection(@Body() createPeerConnectionDto: any) {
    return this.videoService.createPeerConnection(createPeerConnectionDto);
  }

  @ApiOperation({ summary: 'Get an existing peer connection by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the peer connection' })
  @ApiResponse({ status: 200, description: 'Peer connection retrieved successfully.' })
  @Get('peer-connection/:id')
  async getPeerConnection(@Param('id') id: string) {
    return this.videoService.getPeerConnection(id);
  }
}
