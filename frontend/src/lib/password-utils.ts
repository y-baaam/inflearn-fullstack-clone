import bcrypt from "bcryptjs";

// salt (몇 번 해싱을 진행할건지) + hash password
export function saltAndHashPassword(password: string): string {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

// DB에 있는 비밀번호 vs 입력받은 비밀번호
export function comparePassword(
  password: string,
  hashedPassword: string
): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}
