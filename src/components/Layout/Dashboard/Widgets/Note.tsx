import React from 'react';

export function Note({ data } : any) {
  return (
    <div>
      Note
      {data.id}
      {data.type}
    </div>
  );
}
