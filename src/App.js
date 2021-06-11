import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1 className="text-center">Welcome to universe shop!</h1>
            <div className="background">
                
            </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
