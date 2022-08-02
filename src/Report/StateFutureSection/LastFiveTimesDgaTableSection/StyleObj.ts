import styled from 'styled-components';

const LastFiveTimesDgaTableSectionWrap = styled.div`
  display: flex;
  flex-direction: column;

  td {
    border: 0.5px solid #aaaaaa;
  }
  td:first-child {
    border-left: none;
  }
  td:last-child {
    border-right: none;
  }
`;
export { LastFiveTimesDgaTableSectionWrap };
