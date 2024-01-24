import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
            Hello, Brandon.
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;
