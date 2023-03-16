import React from 'react';
import styled from 'styled-components/native';
import HorizontalLine from './HorizontalLine';

const TrackerFooterContainer = styled.View`
  padding-top: 8px;
  padding-bottom: 5px;
  flex-direction: row;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  /* border-top: 2px solid rgba(45, 167, 113, 0.5); */
  color: #00502e;
`;

const FooterItem = styled.View`
  display: flex;
  flex-direction: row;
`;

const SpanLeft = styled.Text`
  margin-right: 10px;
  color: #00502e;
`;

const SpanRight = styled.Text`
  color: #00502e;
`;

type FooterTypes = {
  dates: any;
};

const TrackerFooter: React.FC<FooterTypes> = ({dates}) => {
  const totalHour = dates.reduce(
    (prev: any, curr: any) =>
      prev + (parseInt(curr.endTime, 10) - parseInt(curr.startTime, 10)),
    0,
  );
  return (
    <>
      <HorizontalLine />
      <TrackerFooterContainer>
        <FooterItem>
          <SpanLeft>Total Day</SpanLeft>
          <SpanRight> {dates.length} days</SpanRight>
        </FooterItem>
        <FooterItem>
          <SpanLeft>Total Hours</SpanLeft>
          <SpanRight>{totalHour} Hours</SpanRight>
        </FooterItem>
      </TrackerFooterContainer>
    </>
  );
};

export default TrackerFooter;
