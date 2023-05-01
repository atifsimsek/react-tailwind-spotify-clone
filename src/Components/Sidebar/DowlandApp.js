import { Icon } from "Icons";

const DowlandApp = () => {
  return (
    <a
      href="/"
      className="h-10 flex flex-shrink-0 text-sm fonst font-semibold text-link hover:text-white items-center px-6 gap-x-4"
    >
      <Icon name="dowland" size={20} />
      Uygulamayı Yükle
    </a>
  );
};

export default DowlandApp;
