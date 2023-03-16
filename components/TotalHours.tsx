import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 80px; */
  /* justify-content: center; */
`;

const Title = styled.Text`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
`;

const TotalHour = styled.Text`
  width: 100px;
  height: 40px;
  font-weight: 500;
  font-size: 12px;
  padding: 0;
  margin: 0;
  background: #c7f0df;
  border-radius: 10px;
  color: #2da771;
  text-align: center;
  vertical-align: middle;
`;

type TotalDateType = {
  data: any;
};
const TotalHours: React.FC<TotalDateType> = ({data}) => {
  return (
    <Wrapper>
      <Title>Total Hours </Title>
      <TotalHour>{data ? data : 0} Hour</TotalHour>
    </Wrapper>
  );
};
export default TotalHours;
