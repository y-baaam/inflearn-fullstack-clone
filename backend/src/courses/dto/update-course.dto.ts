import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  IsUUID,
  IsOptional,
} from 'class-validator';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @ApiProperty({ description: '코스 1~2줄 짧은 설명', required: false })
  @IsString()
  @IsOptional()
  shortDescription?: string;

  @ApiProperty({ description: '코스 상세페이지 설명', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: '썸네일 이미지 URL', required: false })
  @IsString()
  @IsOptional()
  thumbnailUrl?: string;

  @ApiProperty({ description: '코스 가격', required: false })
  @IsNumber()
  price: number;

  @ApiProperty({ description: '코스 할인 가격' })
  @IsNumber()
  @IsOptional()
  discountPrice?: number;

  @ApiProperty({ description: '코스 난이도', required: false })
  @IsString()
  @IsOptional()
  level?: string;

  @ApiProperty({ description: '코스 공개 여부', required: false })
  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @ApiProperty({ description: '코스 카테고리 ID 배열', required: false })
  @IsArray()
  @IsUUID(undefined, { each: true })
  categoryIds?: string[];
}
