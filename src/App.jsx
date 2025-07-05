import Card from "./Components/Card";
import ThemeBtn from "./Components/TheameBtn";
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <h1 className=" text-white text-4xl">HI does Tailwind is working?</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
