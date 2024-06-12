import Loading from "@/components/loading/Loading";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="title">
        <h1>Welcome</h1>
      </section>
      <section className="Hero-section">
        {/* !Hero component slider */}

      </section>
      <section className="secondary-section">
        {/* !Secondary component list */}<Loading/>

      </section>

    </main>
  );
}
