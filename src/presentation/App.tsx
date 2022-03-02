import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "./theme/global";
import { theme } from "./theme/theme";
import { Button } from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <Button text="Hello" isLoading />
    </ThemeProvider>
  );
}

export default App;
