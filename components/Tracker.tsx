import {doc, setDoc} from 'firebase/firestore';
import React from 'react';
import Snackbar from 'react-native-snackbar';
import styled from 'styled-components/native';
import {firestore} from '../firebase/clientApp';
import DatePick from './DatePick';
import EndTimeSelector from './EndTimeSelector';
import HorizontalLine from './HorizontalLine';
import StartTimeSelector from './StartTimeSelector';
import TotalHours from './TotalHours';

const TrackerItemContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const TimeContainer = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

type TrackerTypes = {
  item: any;
  setLoadData: any;
};

const Tracker: React.FC<TrackerTypes> = ({item, setLoadData}) => {
  const {date, startTime, endTime, id} = item;
  const updateDateParameter = async (data: any) => {
    try {
      const dateDocRef = doc(firestore, 'dates', id);
      await setDoc(
        dateDocRef,
        {
          ...data,
        },
        {merge: true},
      );
      Snackbar.show({
        text: `${
          Object.keys(data)[0][0].toUpperCase() +
          Object.keys(data)[0].substr(1).toLowerCase()
        } change successful`,
        duration: Snackbar.LENGTH_SHORT,
      });
      setLoadData((prev: boolean) => !prev);
    } catch (error: any) {}
  };

  return (
    <>
      <TrackerItemContainer>
        <DatePick data={date} updateDateParameter={updateDateParameter} />
        <TimeContainer>
          <StartTimeSelector
            data={startTime}
            updateDateParameter={updateDateParameter}
          />
          <EndTimeSelector
            data={endTime}
            updateDateParameter={updateDateParameter}
          />
          <TotalHours data={parseInt(endTime, 10) - parseInt(startTime, 10)} />
        </TimeContainer>
      </TrackerItemContainer>
      <HorizontalLine />
    </>
  );
};

export default Tracker;
