const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};

  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;

  const days = (obj) => {
    let date = 0;
    if (obj.periodType === 'days') {
      date = Math.trunc(obj.timeToElapse / 3);
    } else if (obj.periodType === 'weeks') {
      date = Math.trunc((obj.timeToElapse * 7) / 3);
    } else if (obj.periodType === 'months') {
      date = Math.trunc((obj.timeToElapse * 30) / 3);
    }
    return date;
  };
  const infectedwithTime = (cases, dat) => {
    let result = 0;
    result = cases.currentlyInfected * 2 ** days(dat);
    return Math.trunc(result);
  };
  const severeByRequestedTime = (cases) => {
    let result = 0;
    result = cases.infectionsByRequestedTime * 0.15;
    return Math.trunc(result);
  };
  const bed = (dat, cases) => {
    let result = 0;
    result = (dat.totalHospitalBeds * 0.35) - cases.severeCasesByRequestedTime;
    return Math.trunc(result);
  };
  const icu = (cases) => {
    let result = 0;
    result = cases.infectionsByRequestedTime * 0.05;
    return Math.trunc(result);
  };
  impact.infectionsByRequestedTime = infectedwithTime(impact, data);
  severeImpact.infectionsByRequestedTime = infectedwithTime(severeImpact, data);
  severeImpact.severeCasesByRequestedTime = severeByRequestedTime(severeImpact);
  impact.severeCasesByRequestedTime = severeByRequestedTime(impact);
  impact.hospitalBedsByRequestedTime = bed(data, impact);
  severeImpact.hospitalBedsByRequestedTime = bed(data, severeImpact);
  impact.casesForICUByRequestedTime = icu(impact);
  severeImpact.casesForICUByRequestedTime = icu(severeImpact);
  //   impact.infectionsByRequestedTime = impact.infectionsByRequestedTime * 0.2;
  //   severeImpact.infectionsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.2;
  return {
    impact,
    severeImpact,
    data
  };
};

export default covid19ImpactEstimator;
