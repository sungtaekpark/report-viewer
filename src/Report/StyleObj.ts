import styled from 'styled-components';
// import DESIGN_TOKEN from '../../../constants/token';

const ReportViewerCompositionSection = styled.div`
  height: 1700px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  table,
  td,
  tr {
    border: 0;
  }

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    vertical-align: middle;
    border-top: 0.5px solid #aaaaaa;
    border-bottom: 0.5px solid #aaaaaa;
  }
  td {
    padding: 20px 10px 20px 10px;
    border-collapse: collapse;
    text-align: center;
    vertical-align: middle;
    word-wrap: break-word;
  }
  .sub-header {
    vertical-align: middle;
    background-color: #ebebeb;

  }
  .data-header {
    background-color: rgb(235, 235, 235);
  }
  .description-box {
    min-height: 100px;
    text-align: left;
    vertical-align: center;
    display: flex;
    overflow: auto;
    line-height: 150%;
  }
`;

const ReportViewerBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
`;

export { ReportViewerCompositionSection, ReportViewerBody };
