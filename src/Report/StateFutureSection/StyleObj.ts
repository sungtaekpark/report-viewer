import styled from 'styled-components';

const StateFutureSectionWrap = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  //justify-content: ;
  gap: 40px;

  .chart-section {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .chart-section-left-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export { StateFutureSectionWrap };
