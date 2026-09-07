import { compare, hash } from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await hash(password, saltRounds);
}

export async function verifyPassword(
  candidate: string,
  hash: string
): Promise<boolean> {
  return await compare(candidate, hash);
}