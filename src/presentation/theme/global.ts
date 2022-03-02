import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 12px;
}

@media (min-width: 768px) {
    html {
    font-size: 14px;
  }
}
@media (min-width: 1024px) {
    html {
    font-size: 16px;
  }
}
`;
