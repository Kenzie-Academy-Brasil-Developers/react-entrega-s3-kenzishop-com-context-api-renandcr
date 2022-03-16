import Card from "../../components/Card/index";
import DisplayCardSectionStyles from "./styled";
import dbProducts from "../../providers/db-products";

const Dashboard = () => {
  return (
    <DisplayCardSectionStyles>
      <ul>
        {dbProducts.map((current, index) => (
          <Card key={index} current={current} />
        ))}
      </ul>
    </DisplayCardSectionStyles>
  );
};

export default Dashboard;
