import ReactDOM from "react-dom/client";
import Main from "./Main";

// const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<Main />);
