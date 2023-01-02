
import { Typography, Button } from "antd"

const { Title } = Typography


// Price history etc for the app
// Currently locked. Sign up to use
function PriceHistory (props) {
    return (
        <div id="price">
          <Title level={2}>Price History</Title>
          <Title level={4}>Check how the price has been changing over time, and the related discounts during which times they happened</Title>
          <Title level={5}>We are developing the feature right now. However, you can sign up so that we can let you know once it is completed</Title>
          <Button
            type="primary"
            onClick={props.showModal}
          >Notify Me</Button>
        </div>)
}

export default PriceHistory
