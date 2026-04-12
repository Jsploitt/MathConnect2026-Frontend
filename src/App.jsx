import { useEffect, useMemo, useState } from "react";
import HomePage from "./components/home/HomePage";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import AbstractsPage from "./components/pages/AbstractsPage";
import AgendaPage from "./components/pages/AgendaPage";
import CommitteePage from "./components/pages/CommitteePage";
import RegistrationPage from "./components/pages/RegistrationPage";
import SpeakersPage from "./components/pages/SpeakersPage";
import VenuePage from "./components/pages/VenuePage";

const pages = ["home", "speakers", "agenda", "committee", "abstracts", "venue", "registration"];

function getCountdownValues() {
  const target = new Date("2026-12-14T08:00:00").getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: "00", hours: "00", mins: "00", secs: "00" };
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    mins: String(mins).padStart(2, "0"),
    secs: String(secs).padStart(2, "0")
  };
}

function App() {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState(getCountdownValues);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(getCountdownValues());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const showPage = (name) => {
    if (!pages.includes(name)) {
      return;
    }

    setActivePage(name);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageComponent = useMemo(() => {
    switch (activePage) {
      case "home":
        return <HomePage showPage={showPage} countdown={countdown} />;
      case "speakers":
        return <SpeakersPage />;
      case "agenda":
        return <AgendaPage />;
      case "committee":
        return <CommitteePage />;
      case "abstracts":
        return <AbstractsPage />;
      case "venue":
        return <VenuePage />;
      case "registration":
        return <RegistrationPage />;
      default:
        return <HomePage showPage={showPage} countdown={countdown} />;
    }
  }, [activePage, countdown]);

  return (
    <>
      <NavBar
        activePage={activePage}
        showPage={showPage}
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen((open) => !open)}
      />
      {pageComponent}
      <Footer showPage={showPage} />
    </>
  );
}

export default App;
