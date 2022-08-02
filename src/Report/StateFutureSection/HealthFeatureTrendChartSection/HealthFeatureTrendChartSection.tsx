import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { HealthFeatureTrendChartSectionWrap } from './StyleObj';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';
import ReactEcharts from 'echarts-for-react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

function HealthFeatureTrendChartSection(props: any) {
  const { t } = useTranslation();
  const { chartData } = props;
  const chartRef = useRef<any>(null);

  const [axisData, setAxisData] = useState([]);
  const [proHealthIndex, setProHealthIndex] = useState([]);
  const [proFaultDate, setProFaultDate] = useState([]);
  const [healthIndex, setHealthIndex] = useState([]);

  useLayoutEffect(() => {
    if (!chartData) return;
    requestAnimationFrame(() => {
      const rowData = chartData
        .map((v: any) => v)
        .sort((a: any, b: any) => {
          const prev = Number(new Date(a.acquisitionDate));
          const next = Number(new Date(b.acquisitionDate));
          return prev - next;
        });

      const xAxis = rowData.map(({ acquisitionDate }: any) => acquisitionDate);

      const tempHealthIndexResult = rowData?.reduce(
        (acc: any, { healthIndex }: any) => {
          // acc.push(healthIndex ? healthIndex.toFixed(2) : 0);
          acc.push(healthIndex?.toFixed(2));
          return acc;
        },
        [] as any
      );

      setAxisData(xAxis);
      setHealthIndex(tempHealthIndexResult);
      const { prognosisHealthIndex, prognosisFaultDate } =
        rowData[rowData.length - 1];

      if (prognosisHealthIndex === null && prognosisFaultDate === null) return;

      const proHealthIndex = prognosisHealthIndex.map((v: any) => v.toFixed(2));
      const proFaultDate = prognosisFaultDate.map((v: any) => v.slice(0, 10));

      setProHealthIndex(proHealthIndex);
      setProFaultDate(proFaultDate);
    });

    return () => {
      return chartData;
    };
  }, [chartData]);

  const [healthData, setHealthData] = useState<any>();
  const [proHealthData, setProHealthData] = useState<any>();

  useLayoutEffect(() => {
    const healthIndexChartData = axisData.map((data, i) => [
      data,
      healthIndex[i],
    ]);
    healthIndexChartData.push([proFaultDate[0], proHealthIndex[0]]);

    const prognosisHealthIndexChartData = proFaultDate.map((data, i) => [
      data,
      proHealthIndex[i],
    ]);

    setHealthData(healthIndexChartData);
    setProHealthData(prognosisHealthIndexChartData);
  }, [axisData, proFaultDate]);

  const option = useMemo(() => {
    const thresholdValues = {
      caution: 0.7,
      warning: 0.5,
      abnormal: 0.2,
      critical: 0,
    };

    const thresholdSeries = [
      {
        name: 'critical',
        type: 'line',
        data: '',
        markLine: {
          symbol: 'none',
          data: [{ yAxis: thresholdValues['critical'] }],
          lineStyle: {
            width: 1,
            type: 'solid',
            color: '#D22116',
          },
        },
      },
      {
        name: 'abnormal',
        type: 'line',
        data: '',
        markLine: {
          symbol: 'none',
          data: [{ yAxis: thresholdValues['abnormal'] }],
          lineStyle: {
            width: 1,
            type: 'solid',
            color: '#EA8931',
          },
        },
      },
      {
        name: 'warning',
        type: 'line',
        data: '',
        markLine: {
          symbol: 'none',
          data: [{ yAxis: thresholdValues['warning'] }],
          lineStyle: {
            width: 1,
            type: 'solid',
            color: '#FFD459',
          },
        },
      },
      {
        name: 'caution',
        type: 'line',
        data: '',
        markLine: {
          symbol: 'none',
          data: [{ yAxis: thresholdValues['caution'] }],
          lineStyle: {
            width: 1,
            type: 'solid',
            color: '#4DA067',
          },
        },
      },
    ];

    const healthIndexSeries = {
      name: t('chart:diagnosis'),
      type: 'line',
      data:
        // proHealthIndex === []
        //   ? healthIndex
        //   : [...healthIndex, proHealthIndex[0]],
        healthData,
      itemStyle: {
        color: '#606060',
      },
      lineStyle: {
        width: 1,
      },
    };

    const prognosisSeries = {
      name: t('chart:prognosis'),
      type: 'line',
      data:
        // proHealthIndex === []
        //   ? []
        //   : [...healthIndex.map(() => undefined), ...proHealthIndex],
        proHealthData,
      itemStyle: {
        color: '#2F80ED',
      },
      lineStyle: {
        type: 'dashed',
        width: 1,
      },
    };

    const singleLineSeries = {
      series: [...thresholdSeries, healthIndexSeries, prognosisSeries],
    };
    return {
      title: {
        subtext: 'HI',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        show: false,
        bottom: 0,
      },
      grid: {
        left: '5%',
        right: '5%',
        top: '30px',
        bottom: '5px',
        containLabel: true,
      },
      // xAxis: {
      //   type: 'category',
      //   boundaryGap: false,
      //   axisTick: {
      //     show: false,
      //   },
      //   data: proFaultDate === [] ? axisData : [...axisData, ...proFaultDate],
      // },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: function (value: string) {
            return dayjs(value).format('YYYY-MM-DD');
          },
        },
      },
      yAxis: {
        type: 'value',
        max: 1,
        min: 0,
      },
      ...singleLineSeries,
    };
  }, [
    axisData,
    proFaultDate,
    proHealthIndex,
    healthIndex,
    healthData,
    proHealthData,
  ]);

  const healthTrendChartLabel = t(`report:healthIndexTrendChart`);

  return (
    <HealthFeatureTrendChartSectionWrap>
      <ReportCommonLabel label={healthTrendChartLabel} />
      <ReactEcharts
        ref={chartRef}
        style={{
          // width: '400px',
          width: '100%',
          // height: '200px',
        }}
        option={option}
      />
    </HealthFeatureTrendChartSectionWrap>
  );
}

export default HealthFeatureTrendChartSection;
