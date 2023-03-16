import moment from 'moment';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 55%;
`;

const DayContainer = styled.Text`
  font-size: 18px;
  color: #32a071;
  font-weight: 400;
`;

const DateParagraph = styled.Text`
  color: #32a071;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DatePick = ({data, updateDateParameter}: any) => {
  const [date, setDate] = useState(new Date(data));
  const [open, setOpen] = useState(false);

  const handleChange = (dateParam: any) => {
    const newDate = new Date(dateParam);
    setDate(newDate);
    updateDateParameter({date: newDate.toDateString()});
  };

  const getFormatedDate = (dateValue: any) => {
    return {
      date: moment(dateValue).format('DD MMMM YYYY'),
      day: moment(dateValue).format('dddd'),
    };
  };

  const handleNextDay = () => {
    const newDate = new Date(moment(date).add(1, 'days')?._d);
    setDate(newDate);
    updateDateParameter({date: newDate.toDateString()});
  };
  const handlePrevDay = () => {
    const newDate = new Date(moment(date).subtract(1, 'days')?._d);
    setDate(newDate);
    updateDateParameter({date: newDate.toDateString()});
  };

  return (
    <Wrapper>
      <DayContainer>{getFormatedDate(date).day}</DayContainer>
      <DateContainer>
        <TouchableOpacity onPress={handlePrevDay}>
          <Icon name="keyboard-arrow-left" size={30} color="#B1B1B0" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <DateParagraph>{getFormatedDate(date).date}</DateParagraph>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextDay}>
          <Icon name="keyboard-arrow-right" size={30} color="#B1B1B0" />
        </TouchableOpacity>
      </DateContainer>

      <DatePicker
        textColor="rgba(45, 167, 113, 0.5)"
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={dateValue => handleChange(dateValue)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Wrapper>
  );
};
export default DatePick;
