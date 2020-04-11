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
  impact.infectionsByRequestedTime = impact.currentlyInfected * 2 ** days(data);
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 2 ** days(data);
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
  const bed = (dat, cases) => {
    let result = 0;
    result = (dat.totalHospitalBeds * 0.35) - cases.severeCasesByRequestedTime;
    return result;
  };
  impact.hospitalBedsByRequestedTime = bed(data, impact);
  severeImpact.hospitalBedsByRequestedTime = bed(data, impact);
  impact.casesForICUByRequestedTime = impact.infectionsByRequestedTime * 0.05;
  severeImpact.casesForICUByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;
  //   impact.infectionsByRequestedTime = impact.infectionsByRequestedTime * 0.2;
  //   severeImpact.infectionsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.2;
  return {
    impact,
    severeImpact,
    data
  };
};

export default covid19ImpactEstimator;
