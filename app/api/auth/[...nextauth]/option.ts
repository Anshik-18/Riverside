import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type:    "password" },
      },
      async authorize(credentials: any): Promise<any> {
        try {
          const user = await db.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            const newUser = await db.user.create({
                data: {
                    email: credentials.email,
                    Password: await bcrypt.hash(credentials.password, 10),
                    provider: "credentials",
                    name: credentials.email.split("@")[0],
                }
            })
            return newUser;
          }
          else{

              const isValid = await bcrypt.compare(
                credentials.password,
                user.Password!
              );
              if (!isValid) throw new Error("Invalid password");
    
              return user;
          }

        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      // ✅ Only for Google Provider
      if (account?.provider === "google") {
        try {
          const existingUser = await db.user.findUnique({
            where: { email: user.email! },
          });

          if (!existingUser) {
            await db.user.create({
              data: {
                email: user.email!,
                name: user.name!,
                provider: "google",
              },
            });
          }
        } catch (error) {
          console.error("Error creating user:", error);
          return false;
        }
      }
      return true; // allow sign-in
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
