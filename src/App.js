// import logo from './logo.svg';
import './App.css';
import MyForm from "./MyForm";

function App() {
  return (
    <div className="App">
    <MyForm formId="formOne"></MyForm>
      <MyForm formId="formTwo"></MyForm>
      <button onClick={
         () => {
            // Here, when the user clicks the button,
            // I want to get values of both the textboxes,
            // from both the component instances
         }
      }>Submit</button>
      <iframe id="insent-iframe" title="insent-widget" frameBorder="0" src='https://taupe-daifuku-644900.netlify.app/' allowfullscreen allow="autoplay"></iframe>
    </div>
  );
}

export default App;
