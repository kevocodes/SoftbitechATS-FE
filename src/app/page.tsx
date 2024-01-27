import { auth } from "@/auth"

async function Home() {
  const session = await auth()
  
  return (
    <div>
      <h1>{JSON.stringify(session?.user)}</h1>
    </div>
  )
}

export default Home