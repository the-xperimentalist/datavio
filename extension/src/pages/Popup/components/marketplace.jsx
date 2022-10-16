import React from 'react';
import { Card } from 'antd';


const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

const MarketPlace = () => (
  <Card title="Browse MarketPlace">
    <Card.Grid style={gridStyle}>Amazon</Card.Grid>
    <Card.Grid style={gridStyle}>Flipkart</Card.Grid>
    <Card.Grid style={gridStyle}>Meesho</Card.Grid>
    <Card.Grid style={gridStyle}>Myntra</Card.Grid>
    <Card.Grid style={gridStyle}>Nykaa</Card.Grid>
  </Card>
);

export default MarketPlace;
