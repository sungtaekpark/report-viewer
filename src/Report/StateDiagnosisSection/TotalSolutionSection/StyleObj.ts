import styled from 'styled-components';

const TotalSolutionSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  .text-box {
    flex: 1 1 auto;
    border: 1px solid #aaaaaa;
    padding: 20px;
    //min-height: 300px;
    display: flex;
    flex-direction: column;
  }
  .html-text-box {
    flex: 1;
    line-height: 150%;
  }
`;

export { TotalSolutionSectionWrap };
