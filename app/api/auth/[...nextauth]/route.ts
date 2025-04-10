import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth"

// Define the NextAuth handler
const handler = NextAuth(authOptions)

// Export the handler methods for Next.js to recognize
export { handler as GET, handler as POST }
