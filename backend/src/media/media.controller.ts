import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import type { Request } from 'express';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        // ~ 300MB
        fileSize: 300 * 1024 * 1024,
      },
    }),
  )
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '미디어 업로드 성공',
    required: true,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: '이미지(jpg, png)등 또는 비디오 (mp4 등)',
        },
      },
    },
  })
  async uploadMedia(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    if (!file) {
      throw new BadRequestException('파일이 없습니다.');
    }
    return this.mediaService.uploadMedia(file, req.user!.sub);
  }
}
