import React from 'react';
import { WidgetMap } from './WidgetMap';

export default function WidgetConstructor(data : any) {
  if (WidgetMap.has(data.id)) {
    console.log(WidgetMap.get(data.id));
    const WidgetName : any = WidgetMap.get(data.id);
    return (<WidgetName data={data.id} />);
  } return null;
}
