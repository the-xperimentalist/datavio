
import { Typography, Button } from "antd"

const { Title } = Typography

// Compare similar products across brands. Title, FB, No. Of sellers, Rating, Review Count, Images, Category, Dimensions, Weight, Size
// Unique apis for this. Task and otherwise
function ProductSpy (props) {
    return (
        <div id="spy">
          <Title level={2}>Product Spy</Title>
          <Title level={4}>Find the top competitors in your category, and how they are performing in the market</Title>
          <Title level={5}>We are developing the feature right now. However, you can sign up so that we can let you know once it is completed</Title>
          <Button
            type="primary"
            onClick={props.showModal}
          >Notify Me</Button>
        </div>)
}

export default ProductSpy
