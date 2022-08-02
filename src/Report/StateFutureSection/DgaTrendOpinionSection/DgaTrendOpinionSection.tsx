import React from 'react';
import { DgaTrendOpinionSectionWrap } from './StyleObj';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';
import { useTranslation } from 'react-i18next';

function DgaTrendOpinionSection(props: any) {
  const { aiDgaTrendAnalysis, aiDgaTrendAnalysisEn } = props;
  const { t } = useTranslation();
  const dgaTrendOpinionLabel = t(`report:dgaTrendAnalysis`);
  const langType = t('common:langType');

  const targetComment =
    langType === 'ko' ? aiDgaTrendAnalysis : aiDgaTrendAnalysisEn;

  const cutFirstBrComment =
    targetComment?.substring(0, 4) === '<br>'
      ? targetComment.substring(4)
      : targetComment;

  const dgaTrendOpinionComment =
    cutFirstBrComment !== null
      ? cutFirstBrComment.split(/<br>/g).join('<br>')
      : '';

  return (
    <DgaTrendOpinionSectionWrap>
      <ReportCommonLabel label={dgaTrendOpinionLabel} />
      <div className={`text-box`}>
        <div
          className={`html-text-box`}
          dangerouslySetInnerHTML={{ __html: dgaTrendOpinionComment }}
        />
      </div>
    </DgaTrendOpinionSectionWrap>
  );
}

export default DgaTrendOpinionSection;
