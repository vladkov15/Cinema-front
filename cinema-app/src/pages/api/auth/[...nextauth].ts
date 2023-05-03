import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';


export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        
        const { email, password} = credentials as any;
        

        const res = await fetch('http://localhost:7000/users/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],
   callbacks: {
    session({ session }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '../../login',
    error: '../../login/registration',
  },
};
export default NextAuth(authOptions);
