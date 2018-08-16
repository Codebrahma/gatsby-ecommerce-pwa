import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border: 0;
  border-collapse: collapse;
  text-transform: capitalize;
  text-align: center;
  font-size: 14px;
`;

export const Stbody = styled.tbody`
border-top: 1px solid #c8bebe;
`;

export const Sthead = styled.thead`
  background: #000;
  color: #fff;
`;

export const Sth = styled.th`
  padding: 15px;
`;

export const Std = styled.td`
  padding: 15px 18px;;
  border: 1px solid #c8bebe;
  &:first-child {
    text-align: left;
  }
`;

export const Sspan = styled.span`
  display: block;
  text-transform: lowercase;
`;
