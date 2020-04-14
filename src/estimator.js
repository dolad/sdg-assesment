const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};

  const convertDays = (dat) => {
    let days = 0;
    if (dat.periodType === 'days') {
      days = Math.trunc(dat.timeToElapse);
    } else if (dat.periodType === 'weeks') {
      days = Math.trunc(dat.timeToElapse * 7);
    } else if (dat.periodType === 'months') {
      days = Math.trunc(dat.timeToElapse * 30);
    }
    return days;
  };
  const spreadRates = (obj) => {
    let result = 0;
    result = convertDays(obj) / 3;
    return Math.trunc(result);
  };
  const infectedwithTime = (cases, dat) => {
    let result = 0;
    result = cases.currentlyInfected * 2 ** spreadRates(dat);
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
  const vent = (cases) => {
    let result = 0;
    result = Math.trunc(cases.infectionsByRequestedTime * 0.02);
    return result;
  };
  const dollarsInFlight = (dat, cases) => {
    let result = 0;
    const cased = cases.infectionsByRequestedTime;
    const incomeInUSD = dat.region.avgDailyIncomeInUSD;
    const incomePopulation = dat.region.avgDailyIncomePopulation;
    result = Math.trunc((cased * incomeInUSD * incomePopulation) / convertDays(dat));
    return result;
  };
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = infectedwithTime(impact, data);
  impact.severeCasesByRequestedTime = severeByRequestedTime(impact);
  impact.hospitalBedsByRequestedTime = bed(data, impact);
  impact.casesForICUByRequestedTime = icu(impact);
  impact.casesForVentilatorsByRequestedTime = vent(impact);
  impact.dollarsInFlight = dollarsInFlight(data, impact);

  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = infectedwithTime(severeImpact, data);
  severeImpact.severeCasesByRequestedTime = severeByRequestedTime(severeImpact);
  severeImpact.hospitalBedsByRequestedTime = bed(data, severeImpact);
  severeImpact.casesForICUByRequestedTime = icu(severeImpact);
  severeImpact.casesForVentilatorsByRequestedTime = vent(severeImpact);
  severeImpact.dollarsInFlight = dollarsInFlight(data, severeImpact);
  //   severeImpact.infectionsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.2;
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
