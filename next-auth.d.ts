import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}
