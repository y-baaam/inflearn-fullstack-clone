import { Section } from './section';
import { Course } from './course';
import { LectureActivity } from './lecture_activity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Lecture {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiPropertyOptional({ type: String })
  description?: string;

  @ApiProperty({ type: Number })
  order: number;

  @ApiProperty({ type: Number })
  duration: number;

  @ApiProperty({ type: Boolean })
  isPreview: boolean;

  @ApiProperty({ type: String })
  sectionId: string;

  @ApiProperty({ type: String })
  courseId: string;

  @ApiPropertyOptional({ type: Object })
  videoStorageInfo?: object;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: () => Section })
  section: Section;

  @ApiProperty({ type: () => Course })
  course: Course;

  @ApiProperty({ isArray: true, type: () => LectureActivity })
  activities: LectureActivity[];
}
