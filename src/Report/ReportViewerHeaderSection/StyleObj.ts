import styled from 'styled-components';
import DESIGN_TOKEN from '../../../../constants/token';

const ReportViewerHeaderSectionWrap = styled.div`
  display: flex;
  height: 100px;
  //height: 100%;
  padding: 30px 20px;
  background-color: ${DESIGN_TOKEN.luminance.luminance8};
  .header-text-area {
    flex: 4;
    font-size: 32px;
    font-weight: 800;
    color: #1e1e1e;
    display: flex;
    align-items: center;
    gap: 20px;
    .basic-info-layer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      height: 100%;
      font-weight: normal;
      font-size: 12px;
    }
  }
  .logo-area {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      flex: 1;
      max-width: 100%;
      width: 130px;
    }
  }
`;
export { ReportViewerHeaderSectionWrap };
