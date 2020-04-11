const covid19ImpactEstimator = (data) => {
  let impact = {};
  let severeImpact = {};

  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;

  let converttodays = (data) => {
      let date= null
    if (data.periodType === 'days') { 
      date= parseInt(data.timeToElapse / 3);
      return date
    } else if (data.periodType === 'week') {
      date= parseInt((data.timeToElapse * 7) / 3);
      return date
    } else if (data.periodType === 'month') {
      date= parseInt((data.timeToElapse * 30) / 3);
      return date
    }
    return date
  };

  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** converttodays(data));
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** converttodays(data));
  severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;

  impact.hospitalBedsByRequestedTime = data.totalHospitalBeds * 0.35 - impact.severeCasesByRequestedTime;
  severeImpact.hospitalBedsByRequestedTime = data.totalHospitalBeds * 0.35 - severeImpact.severeCasesByRequestedTime;

  impact.casesForICUByRequestedTime = impact.infectionsByRequestedTime * 0.05;
  severeImpact.casesForICUByRequestedTime = severeImpact.infectionsByRequestedTime * 0.05;

  impact.infectionsByRequestedTime = impact.infectionsByRequestedTime * 0.2;
  severeImpact.infectionsByRequestedTime = severeImpact.infectionsByRequestedTime * 0.2;

  return {
    impact,
    severeImpact,
    data
  };
};
// covid19ImpactEstimator(data)
export default covid19ImpactEstimator;
