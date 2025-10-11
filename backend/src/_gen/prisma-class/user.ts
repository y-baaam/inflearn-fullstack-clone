import { Account } from './account';
import { Session } from './session';
import { Course } from './course';
import { CourseEnrollment } from './course_enrollment';
import { CourseReview } from './course_review';
import { CourseQuestion } from './course_question';
import { CourseComment } from './course_comment';
import { LectureActivity } from './lecture_activity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: String })
  id: string;

  @ApiPropertyOptional({ type: String })
  name?: string;

  @ApiPropertyOptional({ type: String })
  email?: string;

  @ApiPropertyOptional({ type: Date })
  emailVerified?: Date;

  @ApiPropertyOptional({ type: String })
  hashedPassword?: string;

  @ApiPropertyOptional({ type: String })
  image?: string;

  @ApiPropertyOptional({ type: String })
  bio?: string;

  @ApiProperty({ isArray: true, type: () => Account })
  accounts: Account[];

  @ApiProperty({ isArray: true, type: () => Session })
  sessions: Session[];

  @ApiProperty({ isArray: true, type: () => Course })
  courses: Course[];

  @ApiProperty({ isArray: true, type: () => CourseEnrollment })
  courseEnrollments: CourseEnrollment[];

  @ApiProperty({ isArray: true, type: () => CourseReview })
  courseReviews: CourseReview[];

  @ApiProperty({ isArray: true, type: () => CourseQuestion })
  courseQuestions: CourseQuestion[];

  @ApiProperty({ isArray: true, type: () => CourseComment })
  courseComments: CourseComment[];

  @ApiProperty({ isArray: true, type: () => LectureActivity })
  lectureActivities: LectureActivity[];
}
