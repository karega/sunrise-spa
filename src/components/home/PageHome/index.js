import "./PageHome.css";
import jeans from "../../../assets/img/jeans1.jpeg";
import sho from "../../../assets/img/sho3.jpeg";
import acc from "../../../assets/img/acc.jpeg";
import s3 from "../../../assets/img/s3.jpeg";
import Banner from "../Banner/index";
import Featured from "../Featured";
import Services from "../Services";

const PageHome = () => {
  return (
    <span>
      <Banner />
      <Featured />
      <Services />
    </span>
  );
};

export default PageHome;
