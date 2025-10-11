import { Section } from './section';
import { Lecture } from './lecture';
import { User } from './user';
import { CourseCategory } from './course_category';
import { CourseEnrollment } from './course_enrollment';
import { CourseReview } from './course_review';
import { CourseQuestion } from './course_question';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Course {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiPropertyOptional({ type: String })
  shortDescription?: string;

  @ApiPropertyOptional({ type: String })
  description?: string;

  @ApiPropertyOptional({ type: String })
  thumbnailUrl?: string;

  @ApiPropertyOptional({ type: Number })
  price?: number;

  @ApiPropertyOptional({ type: Number })
  discountPrice?: number;

  @ApiProperty({ type: String })
  level: string = 'BEGINNER';

  @ApiProperty({ type: String })
  status: string = 'DRAFT';

  @ApiProperty({ type: String })
  instructorId: string;

  @ApiProperty({ type: Boolean })
  isPublished: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ isArray: true, type: () => Section })
  sections: Section[];

  @ApiProperty({ isArray: true, type: () => Lecture })
  lectures: Lecture[];

  @ApiProperty({ type: () => User })
  instructor: User;

  @ApiProperty({ isArray: true, type: () => CourseCategory })
  categories: CourseCategory[];

  @ApiProperty({ isArray: true, type: () => CourseEnrollment })
  enrollments: CourseEnrollment[];

  @ApiProperty({ isArray: true, type: () => CourseReview })
  reviews: CourseReview[];

  @ApiProperty({ isArray: true, type: () => CourseQuestion })
  questions: CourseQuestion[];
}
