import { ThemeProvider } from "styled-components";
import { theme } from "../../presentation/theme/theme";
import { Button } from "../../presentation/components/Button";
import { render } from "@testing-library/react";

describe("Button Component", () => {
  it("should render text", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button text="Hello Jest" />
      </ThemeProvider>
    );
    expect(getByText("Hello Jest")).toBeInTheDocument();
  });

  it("should render loading", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button text="Hello Jest" isLoading />
      </ThemeProvider>
    );
    expect(getByTestId("loading")).toBeInTheDocument();
  });
});
