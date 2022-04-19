import React, { useEffect, useState } from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from 'react-grid-dnd';
import { AppWrapper } from './styles/AppWrapper';
import MenuBar from './MenuBar';
import Modal from './Modal/Modal';
import { UseWindowSize } from '../../../hooks/useWindowSize';
import { getWidgets } from '../../../api/api';
import GridCell from './GridCell/GridCell';

export default function Dashboard() {
  const [rowCount, setRowCount] = useState(3);
  const [rowHeight, setRowHeight] = useState(0);
  const [blockHeight, setBlockHeight] = useState(0);

  const [windowWidth, windowHeight] = UseWindowSize();

  const [modalActive, setModalActive] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);

  const [cursorStyle, setCursorStyle] = useState({ cursor: 'default' });
  const [crossStyle, setCrossStyle] = useState({ display: 'none' });

  const [items, setItems] = useState<string[] | undefined>();

  const rowHeightCalc = (width : number, row : number) => width / 1.21 / row / 1.4;
  const blockHeightCalc = (arr : string[], width : number, row : number) => {
    const rowHeightCalced = rowHeightCalc(width, row);
    return Math.ceil(arr.length / row) * rowHeightCalced;
  };

  useEffect(() => {
    getWidgets('/widgets.json', setItems);
  }, []);

  useEffect(() => {
    if (windowWidth < 1366 && items) {
      setRowCount(2);
      setRowHeight(rowHeightCalc(windowWidth, 2));
      setBlockHeight(blockHeightCalc(items, windowWidth, 2));
    }
    if (windowWidth >= 1366 && items) {
      setRowCount(3);
      setRowHeight(rowHeightCalc(windowWidth, 3));
      setBlockHeight(blockHeightCalc(items, windowWidth, 3));
    }
  }, [windowWidth, items]);

  const onChange = (sourceId: any, sourceIndex: number, targetIndex: number, targetId: any) => {
    if (items) {
      const nextState = swap(items, sourceIndex, targetIndex);
      setItems(nextState);
    }
  };

  const deleteItem = (
    e: React.DragEvent<HTMLDivElement>,
  ) => {
    if (items) {
      setItems(items.filter((el) => el !== e.target.id));
    }
  };

  const editFields = () => {
    if (enableEdit === false) {
      setEnableEdit(true);
      setCrossStyle({ display: 'block' });
      setCursorStyle({ cursor: 'grab' });
    }
    if (enableEdit === true) {
      setEnableEdit(false);
      setCrossStyle({ display: 'none' });
      setCursorStyle({ cursor: 'default' });
    }
  };

  return (
    <AppWrapper>
      <MenuBar
        enable={enableEdit}
        setModalActive={setModalActive}
        editFields={editFields}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <div>hi</div>
      </Modal>
      {console.log('main render')}
      {items ? (
        <GridContextProvider onChange={onChange}>
          <GridDropZone
            id="items"
            disableDrag={!enableEdit}
            boxesPerRow={rowCount}
            rowHeight={rowHeight}
            style={{ height: `${blockHeight}px` }}
          >
            {items.map((item) => (
              <GridItem
                key={item}
                style={cursorStyle}
              >
                <GridCell item={item} deleteItem={deleteItem} crossStyle={crossStyle} />
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
      ) : null}
    </AppWrapper>
  );
}
