import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
    </Routes>
  );
}
