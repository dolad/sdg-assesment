const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};

  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;

  const converttodays = (obj) => {
    let date = 0;
    if (obj.periodType === 'days') { date = parseInt(obj.timeToElapse / 3);}
    else if (obj.periodType === 'week') { date = parseInt((obj.timeToElapse * 7) / 3);
    } else if (obj.periodType === 'month') { date = parseInt((obj.timeToElapse * 30) / 3);}
    return date
};
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** converttodays(data));
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** converttodays(data));
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;

  impact.hospitalBedsByRequestedTime = data.totalHospitalBeds * 0.35 - impact.severeCasesByRequestedTime;
  severeImpact.hospitalBedsByRequestedTime = (data.totalHospitalBeds * 0.35) - severeImpact.severeCasesByRequestedTime;
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
