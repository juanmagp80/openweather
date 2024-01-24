import AsideMenu from "./components/AsideMenu";
import "./App.css";

function App() {
  return (
    <>
      <AsideMenu />
      <main>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"></h1>
        </section>
      </main>
    </>
  );
}

export default App;
