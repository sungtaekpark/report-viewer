import styled from 'styled-components';

const CommonInfoTableWrap = styled.div`
  table{
    table-layout: fixed;
    border-collapse: collapse;
    td {
      border-bottom: 0.5px solid #aaaaaa;
    }
  }
  .basic-info-layer {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 20px;
    //height: 100%;
    font-weight: normal;
    font-size: 16px;
    padding-bottom: 12px;
  }
`;

export { CommonInfoTableWrap };
