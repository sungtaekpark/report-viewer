import React, { useEffect, useRef, useState } from 'react';
import { HealthFeatureSectionWrap } from './StyleObj';
import latentSpaceValue from '../../../../../asset/json/LatentSpaceValue.json';
import ReactEcharts from 'echarts-for-react';
import { useTranslation } from 'react-i18next';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';

function HealthFeatureChartSection(props: any) {
  const chartRef = useRef<any>(null);
  const { chartData } = props;
  const { t } = useTranslation();

  const healthFeatureChartLabel = t(`report:healthDiagnosisPlane`);

  const defaultSymbolSize = 12;
  const langSet = {
    normal: t('common:normal'),
    attention: t('common:attention'),
    caution: t('common:caution'),
    abnormal: t('common:abnormal'),
    critical: t('common:critical'),
  };

  const axisInfo = {
    xAxis: {
      name: 'Feature 1',
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        color: '#777',
      },
      axisLabel: {
        color: 'rgb(193, 197, 206)',
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    yAxis: {
      name: '',
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        color: '#777',
      },
      axisLabel: {
        color: 'rgb(193, 197, 206)',
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      scale: true,
    },
  };

  const defaultOptions = {
    title: {
      textStyle: {
        color: '#000',
      },
      left: 'center',
    },
    legend: {
      right: '0',
      top: 26,
      data: [
        langSet['normal'],
        langSet['attention'],
        langSet['caution'],
        langSet['abnormal'],
        langSet['critical'],
      ],
      textStyle: {
        color: '#606060',
        fontSize: 12,
      },
      backgroundColor: '#f6f6f6',
      borderRadius: 20,
      padding: [8, 12, 8, 12],
      icon: 'rect',
      itemWidth: 12,
      itemHeight: 12,
    },
    grid: {
      left: '4%',
      right: '7%',
      bottom: '10%',
      containLabel: true,
    },
    ...axisInfo,
  };

  const [latentSpace, setLatentSpace] = useState<any>({
    normal: [],
    attention: [],
    caution: [],
    abnormal: [],
    critical: [],
  });
  const [aiResultList, setAiResultList] = useState<any>({
    normal: [],
    attention: [],
    caution: [],
    abnormal: [],
    critical: [],
  });

  useEffect(() => {
    if (!chartData) return;
    const aiResult = chartData.reduce(
      (acc: any, curr: any) => {
        const {
          acquisitionDate,
          aiDiagnosisResult,
          aiDiagnosisLatentSpaceX,
          aiDiagnosisLatentSpaceY,
        } = curr;

        const x = Number(aiDiagnosisLatentSpaceX).toFixed(2);
        const y = Number(aiDiagnosisLatentSpaceY).toFixed(2);
        const date = acquisitionDate.slice(0, 10);
        if (acc[aiDiagnosisResult]) {
          acc[aiDiagnosisResult].push([x, y, date]);
        }
        return acc;
      },
      {
        normal: [],
        attention: [],
        caution: [],
        abnormal: [],
        critical: [],
      } as any
    );
    setAiResultList(aiResult);
    return () => {
      return chartData;
    };
  }, [chartData]);

  useEffect((): any => {
    const loadData: any[] = JSON.parse(JSON.stringify(latentSpaceValue));
    const latentSpaceResult = loadData.reduce(
      (acc, curr) => {
        const { feature1, feature2, state } = curr;
        const data = [feature1, feature2, state];
        if (state == '0') acc['normal'].push(data);
        if (state == '1') acc['attention'].push(data);
        if (state == '2') acc['caution'].push(data);
        if (state == '3') acc['abnormal'].push(data);
        if (state == '4') acc['critical'].push(data);
        return acc;
      },
      {
        normal: [],
        attention: [],
        caution: [],
        abnormal: [],
        critical: [],
      } as any
    );
    setLatentSpace(latentSpaceResult);

    return () => {
      return loadData;
    };
  }, []);

  const backgroundSeries = [
    {
      name: '0',
      data: latentSpace.normal,
      type: 'scatter',
      symbolSize: 2,
      itemStyle: {
        color: '#ACC2DB',
      },
      large: true,
    },
    {
      name: '1',
      data: latentSpace.attention,
      type: 'scatter',
      symbolSize: 2,
      itemStyle: {
        color: '#B8D9C2',
      },
      large: true,
    },
    {
      name: '2',
      data: latentSpace.caution,
      type: 'scatter',
      symbolSize: 2,
      itemStyle: {
        color: '#FFEEBD',
      },
      large: true,
    },
    {
      name: '3',
      data: latentSpace.abnormal,
      type: 'scatter',
      symbolSize: 2,
      itemStyle: {
        color: '#F7D0AD',
      },
      large: true,
    },
    {
      name: '4',
      data: latentSpace.critical,
      type: 'scatter',
      symbolSize: 2,
      itemStyle: {
        color: '#EDA6A2',
      },
      large: true,
    },
  ];

  const rowDataSeries = [
    {
      name: langSet['normal'],
      data: aiResultList.normal,
      type: 'scatter',
      symbolSize: defaultSymbolSize,
      emphasis: {
        label: {
          color: '#000',
          formatter: function (param: any) {
            const { data } = param;
            return data[2];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 1,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        color: '#248CD8',
      },
    },
    {
      name: langSet['attention'],
      data: aiResultList.attention,
      type: 'scatter',
      symbolSize: defaultSymbolSize,
      emphasis: {
        label: {
          show: true,
          color: '#fff',
          formatter: function (param: any) {
            return param.data[2];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 1,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        color: '#4DA067',
      },
    },
    {
      name: langSet['caution'],
      data: aiResultList.caution,
      type: 'scatter',
      symbolSize: defaultSymbolSize,
      emphasis: {
        label: {
          show: true,
          color: '#fff',
          formatter: function (param: any) {
            return param.data[2];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 1,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        color: '#ffd459',
      },
    },
    {
      name: langSet['abnormal'],
      data: aiResultList.abnormal,
      type: 'scatter',
      symbolSize: defaultSymbolSize,
      emphasis: {
        label: {
          color: '#fff',
          show: true,
          formatter: function (param: any) {
            return param.data[2];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 1,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        color: '#ea8931',
      },
    },
    {
      name: langSet['critical'],
      data: aiResultList.critical,
      type: 'scatter',
      symbolSize: defaultSymbolSize,
      emphasis: {
        label: {
          color: '#fff',
          show: true,
          formatter: function (param: any) {
            return param.data[2];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 1,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        color: '#d22116',
      },
    },
  ];

  const option = {
    ...defaultOptions,
    series: [...backgroundSeries, ...rowDataSeries],
  };

  return (
    <HealthFeatureSectionWrap>
      <ReportCommonLabel label={healthFeatureChartLabel} />
      <div className={`chart-section`}>
        <ReactEcharts
          ref={chartRef}
          style={{
            width:"100%"
          }}
          className="ai_bg"
          option={option}
        />
      </div>
    </HealthFeatureSectionWrap>
  );
}

export default HealthFeatureChartSection;
