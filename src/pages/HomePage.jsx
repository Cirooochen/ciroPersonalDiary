import DiaryEntryList from "../components/DiaryEntryList";
import Hero from "../components/Hero";

const HomePage = ({ localEntry }) => {
  return (
    <div>
      <Hero />
      <DiaryEntryList localEntry={localEntry} />
    </div>
  );
};

export default HomePage;
