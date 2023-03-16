import {addDoc, collection, getDocs} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Spinner from 'react-native-spinkit';
import styled from 'styled-components/native';
import {firestore} from '../firebase/clientApp';
import Tracker from './Tracker';
import TrackerFooter from './TrackerFooter';

let ScreenHeight = Dimensions.get('window').height;

const StyledView = styled.View`
  padding: 7px;
  background-color: white;
  min-height: ${ScreenHeight - 95};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const StyledButton = styled.View`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 110px;
  height: 35px;
  background: #c7f0df;
  border-radius: 5px;
  color: #2da771;
  font-weight: 400;
  font-size: 12px;
`;

const Trackers = styled.ScrollView`
  position: relative;
  display: flex;
  margin-top: 15px;
  padding: 0px;
  /* align-items: center; */
  flex-direction: column;
  /* justify-content: flex-start; */
  flex: 1;
  width: 100%;
`;

const StyledSpinner = styled(Spinner)`
  padding: 50px;
  width: 100%;
  margin-top: 100px;
`;
const AddingSpinner = styled(Spinner)`
  height: 25px;
`;

const StyledText = styled.Text`
  text-align: center;
  color: #2da771;
`;

export default function TrackerContainer() {
  const [dates, setDates] = useState<any>([]);
  const [adding, setAdding] = useState(false);
  const [loadData, setLoadData] = useState<boolean>(false);

  const handleAddNewDate = async () => {
    setAdding(true);

    try {
      const newDate = {
        date: new Date().toDateString(),
        startTime: 0,
        endTime: 0,
      };
      await addDoc(collection(firestore, 'dates'), newDate);
      Snackbar.show({
        text: 'New date added successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
      setLoadData(prev => !prev);
    } catch (error: any) {
      console.log(error.message);
    }

    setAdding(false);
  };

  const getDates = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'dates'));
      const dateDoc = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDates(dateDoc);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDates();
  }, [loadData]);

  return (
    <StyledView>
      <TouchableOpacity onPress={handleAddNewDate}>
        <StyledButton>
          {adding ? (
            <AddingSpinner isVisible={true} type="Circle" />
          ) : (
            <StyledText>Add New Date</StyledText>
          )}
        </StyledButton>
      </TouchableOpacity>
      <Trackers>
        <StyledSpinner
          isVisible={dates.length <= 0}
          type="Wave"
          color="#c7f0df"
        />
        {dates.length <= 0 && <StyledText>No date available</StyledText>}
        {dates.map((item: any) => (
          <Tracker key={item.id} setLoadData={setLoadData} item={item} />
        ))}
      </Trackers>
      <TrackerFooter dates={dates} />
    </StyledView>
  );
}

// export default TrackerContainer;
