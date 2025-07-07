import DiaryEntryList from "../components/DiaryEntryList";
import Hero from "../components/Hero";

const HomePage = ({ localEntry }) => {
  return (
    <div>
      <Hero localEntry={localEntry} />
      <DiaryEntryList localEntry={localEntry} />
    </div>
  );
};

export default HomePage;
