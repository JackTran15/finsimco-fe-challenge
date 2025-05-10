import { createRoot } from "react-dom/client";

import App from "./app/app.tsx";

const render = () => {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
};

const bootstrap = () => {
  render();
};

bootstrap();
