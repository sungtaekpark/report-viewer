import styled from 'styled-components';

const GasTableSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  table {
    width: 100%;
    table-layout: fixed;
    td {
      padding: 20px 10px 20px 10px;
      border-right: 0.5px solid #aaaaaa;
    }
    td:last-child {
      border-right: none;
    }
  }

  tbody {
    th {
      background-color: #d4d4d4;
    }
    td {
      text-align: center;
    }
  }
`;

export { GasTableSectionWrap };
