import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: start; */
`;

const Title = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
`;

const boxStyle = {
  borderColor: 'rgb(50, 160, 113)',
  height: 40,
  width: 100,
  padding: 0,
  margin: 0,
};

const inputStyle = {
  padding: 0,
  margin: 0,
  color: 'rgb(50, 160, 113)',
  fontSize: 12,
};

type EndTimeTypes = {
  data: any;
  updateDateParameter: (date: any) => void;
};

const EndTimeSelector: React.FC<EndTimeTypes> = ({
  data,
  updateDateParameter,
}) => {
  const lists = [...Array(24)].map((item, i) => ({
    key: i + 1,
    value: `${(i % 12) + 1}: 00 ${i + 1 <= 12 ? 'AM' : 'PM'}`,
  }));
  const [endTime, setEndTime] = useState(parseInt(data, 10));

  const handleChange = (val: any) => {
    setEndTime(val);
    updateDateParameter({endTime: val});
  };

  return (
    <Wrapper>
      <Title>End Time </Title>

      <SelectList
        placeholder={endTime ? lists[endTime - 1].value : 'Select Time'}
        search={false}
        setSelected={(val: any) => handleChange(val)}
        data={lists}
        boxStyles={boxStyle}
        inputStyles={inputStyle}
      />
    </Wrapper>
  );
};
export default EndTimeSelector;
