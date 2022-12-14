import { useLocation } from 'react-router-dom'; 
import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation(); // returns the current location object
  const navigate = useNavigate();
  console.log(location)

  const { Text } = Typography;

  const handleClick = () => {
    navigate('/', { replace: true });
  }

  return (
    <div style={{ padding: "10rem", height: "30rem" }}>
      <Text strong
        style={{ display: "flex", justifyContent: "space-around", fontSize: "2rem", backgroundColor: "lightblue", padding: 10, height: "10rem", alignItems: "center" }}>
        Welcome !!!  &nbsp; &nbsp;

        <Text italic style={{ color: "#CD5C5C" }}>
          {location.state}
        </Text>
        
      </Text>

      <Button style={{ marginTop: 10 }} type="primary" htmlType="submit"
        onClick={handleClick}>
        Log Out
      </Button>

    </div>
  );
};
export default Dashboard;