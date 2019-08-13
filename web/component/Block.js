import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const Block = ({ item }) => {
  return (
    <Card>
      <CardBody>
        <CardHeader>{ item.title }</CardHeader>
      </CardBody>
    </Card>
  );
};

export default Block;
