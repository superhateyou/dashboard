import React from 'react';

export function Gallery({ data } : any) {
  return (
    <div>
      Gallery
      {data.id}
      {data.type}
    </div>
  );
}
