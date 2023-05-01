import Section from "Components/Section";
import songs from "data/songs";
const Home = () => {
  const items = [];

  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/123" items={songs} />
      <Section title="Shows to try" more="/123" items={songs} />
      <Section title="Made from Atıf Şimşek" more="/123" items={songs} />
    </div>
  );
};

export default Home;
