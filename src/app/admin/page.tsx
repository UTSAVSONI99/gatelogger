// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

// export default async function AdminPage() {
//   const session = await getServerSession({
//     ...authOptions,
//     session: { strategy: "jwt" },
//   });

//   if (!session) {
//     return redirect("/login");
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">
//         Welcome Admin: {session.user?.name}
//       </h1>
//       {/* Your Admin Page Code Here */}
//     </div>
//   );
// }

import { getUser } from "@/lib/session";

export default async function AdminPage() {
  const user = await getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.username}</h1>
      {/* Admin dashboard content */}
    </main>
  );
}
