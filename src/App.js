import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import IntroContainer from "./components/IntroContainer/IntroContainer";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroContainer />
      <ContactForm />
    </div>
  );
}

export default App;
