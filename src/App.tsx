import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";

function App() {
  return (
    <main className="px-8 md:px-20 lg:px-40">
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
