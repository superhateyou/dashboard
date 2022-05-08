import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWidgets } from '../../../../api/api';
import AddMenuItem from './AddMenuItem';

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
`;

function AddMenu({ active, data, setVidget } : any) {
  const got = false;
  const [activeItems, setActiveItems] = useState<any[] | undefined>();
  const [items, setItems] = useState<any[] | undefined>();
  const [received, setReceived] = useState(false);
  if (active === true && received !== active) {
    setReceived(true);
  }

  useEffect(() => {
    if (received && data) {
      getWidgets('/widgets.json', setItems);
      setActiveItems(data);
    }
  }, [received]);

  const onClick = (e: any) => {
    const activeFlag = e.target.attributes.getNamedItem('active').value;
    const name = e.target.attributes.getNamedItem('name').value;
    if (activeFlag === 'inactive') {
      console.log("it's inactive");
      if (items) {
        console.log("it's inactive");
        setVidget(data.push(items.filter((el) => el.name === name)[0]));
      }
    } else if (activeFlag === 'active') {
      console.log("it's active");
    }
    console.log(activeFlag, name);
  };

  return (
    <Wrapper>
      {items ? items.filter((({ name }) => activeItems.map((el) => el.name).includes(name)))
        .map((el) => (
          <div
            name={el.name}
            onClick={(e) => onClick(e)}
            active="incative"
            key={`${el.id}addable`}
          >
            <AddMenuItem>
              <div>{el.name}</div>
            </AddMenuItem>
          </div>
        )) : null}
      {data
        ? activeItems?.map((el) => (
          <div
            name={el.name}
            active="active"
            onClick={onClick}
            key={`${el.id}addable`}
            color="green"
          >
            <AddMenuItem color="green">
              <div>{el.name}</div>
            </AddMenuItem>
          </div>
        ))
        : null}
    </Wrapper>
  );
}

export default AddMenu;
