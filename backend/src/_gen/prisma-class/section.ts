import { Course } from './course';
import { Lecture } from './lecture';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Section {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiPropertyOptional({ type: String })
  description?: string;

  @ApiProperty({ type: Number })
  order: number;

  @ApiProperty({ type: String })
  courseId: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: () => Course })
  course: Course;

  @ApiProperty({ isArray: true, type: () => Lecture })
  lectures: Lecture[];
}
