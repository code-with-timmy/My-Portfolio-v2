import AppLayout from "./AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <AppLayout />
    </DarkModeProvider>
  );
}

export default App;
