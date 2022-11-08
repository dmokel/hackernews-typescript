import * as jwt from "jsonwebtoken";

export const APP_SECRET = "GraphQL-is-aw3some"

export interface AuthTokenPayload {
  userId: string;
}

export function decodeAuthHeader(authHeader: string) {
  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    throw new Error("No token found");
  }

  return jwt.verify(token, APP_SECRET) as AuthTokenPayload;
}
