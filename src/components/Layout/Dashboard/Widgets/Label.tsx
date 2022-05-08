import React from 'react';

export function Label({ data } : any) {
  return (
    <div>
      {data.params.title}
      <br />
      <a href={data.params.link}>link</a>
      <br />
      <div>
        Notifications:
        {' '}
        {data.params.notifications}
      </div>
    </div>
  );
}
