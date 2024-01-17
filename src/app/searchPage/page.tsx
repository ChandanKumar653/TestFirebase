import HomePage from "@/components/header/searchBar";
import variables from "./variables.module.scss";
export default function Home() {
  return (
    <main className={variables.wrapClass}>
      <div style={{ backgroundColor: "white", minHeight: "80vh" }}>
        <HomePage />
      </div>
    </main>
  );
}
