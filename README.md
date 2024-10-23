# 🚀 React Routing Application

This is a simple React app demonstrating routing using `react-router-dom`. The app features three main pages: Home, User, and About. It also shows different methods to apply styles to active navigation links using `NavLink`.

## ✨ Features

- **🔗 Navigation**: Navigate between Home, User, and About pages.
- **🧭 Routing**: Utilizes React Router for routing between different components.
- **🎨 Styling for Active Links**: Demonstrates three different methods to apply styles to the active `NavLink`.

## 🛠 Components

### 1. `App.js` 📂
This is the main entry point where `Nav` and `Routing` components are rendered.

```javascript
import Nav from "./components/Nav";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <>
      <Nav />
      <Routing />
    </>
  );
};

export default App;
