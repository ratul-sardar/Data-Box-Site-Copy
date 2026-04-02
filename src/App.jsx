import Hero from "./components/sections/Hero/Hero";
import NavBar from "./components/ui/NavBar/NavBar";

export default function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Hero></Hero>
      </main>
      <footer></footer>
    </>
  );
}
