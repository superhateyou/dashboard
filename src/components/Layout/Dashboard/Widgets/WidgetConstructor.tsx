import React from 'react';
import { WidgetMap } from './WidgetMap';

export default function WidgetConstructor(data : any) {
  if (WidgetMap.has(data.data.type)) {
    const WidgetName : any = WidgetMap.get(data.data.type);
    return (<WidgetName data={data.data} />);
  } return null;
}
