
import { Typography, Table } from 'antd'

const { Title } = Typography
const { Column } = Table


// Price, Health Listing Score, Reviews, BSR, Brand, Rating, Country Of Origin
// Unique apis for this. Task and otherwise
function Summary (props) {
  console.log(props)

  const data = [{
    key: '1',
    key1: 'Brand Name',
    value1: props.summary.product_brand_name,
    key2: 'Description',
    value2: props.summary.description,
  }, {
    key: '2',
    key1: 'Flipkart assured',
    value1: props.summary.fk_assured,
    key2: 'Rating',
    value2: props.summary.rating
  }, {
    key: '3',
    key1: 'No of ratings',
    value1: props.summary.no_of_ratings,
    key2: 'No of reviews',
    value2: props.summary.no_of_reviews
  }, {
    key: '4',
    key1: 'Category',
    value1: props.summary.category,
    key2: 'Sub-category',
    value2: props.summary.sub_category
  }, {
    key: '5',
    key1: 'Top seller',
    value1: props.summary.top_seller_name,
    key2: 'Top seller stars',
    value2: props.summary.top_seller_stars
  }, {
    key: '6',
    key1: 'No of images',
    value1: props.summary.no_of_images,
    key2: 'Discount',
    value2: props.summary.discount
  }, {
    key: '7',
    key1: 'Final price',
    value1: props.summary.final_price,
    key2: 'MRP',
    value2: props.summary.mrp
  }]

  return (
    <div id="summary">
      <Title>Flipkart listing</Title>
      <Title level={3}>{props.summary.product_title}</Title>
      <Table dataSource={data} showHeader={false}>
        <Column title="Key 1" dataIndex="key1" key="key1" />
        <Column title="Value 1" dataIndex="value1" key="value1" />
        <Column title="Key 2" dataIndex="key2" key="key2" />
        <Column title="Value 2" dataIndex="value2" key="value2" />
      </Table>
    </div>)
}

export default Summary
