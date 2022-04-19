import React from 'react';
import { Card } from '../styles/Card';
import { Cross } from '../styles/Cross';
import WidgetConstructor from '../Widgets/WidgetConstructor';

interface IProps {
  item: string;
  deleteItem: any;
  crossStyle: any;
}

export default function GridCell({
  item, deleteItem, crossStyle,
} : IProps) {
  return (
    <Card
      style={{ width: '93%', height: '90%' }}
    >
      <Cross onClick={deleteItem}>
        <img
          id={item}
          style={crossStyle}
          src="https://img.icons8.com/ios-glyphs/20/000000/delete-sign.png"
          alt="cross"
        />
      </Cross>
      <WidgetConstructor id={item} />
    </Card>
  );
}
