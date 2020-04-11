
const data = {
    region:{
        name:"Africa",
        aveAge:19.7,
        avgDailyIncomeInUSD:5,
        avgDailyIncomePopulation:0.71,
    },
    periodType:"days",
    timeToElapse:58,
    reportedCases:674,
    population:66622705,
    totalHospitalBeds:1380614
}

const covid19ImpactEstimator = (data) =>{
    let impact={}
    let severeImpact={}

    impact.currentlyInfected=data.reportedCases*10;
    severeImpact.currentlyInfected=data.reportedCases*50;

    converttodays=(data)=>{
            if (data.periodType === "days")
                    {
                     return parseInt(data.timeToElapse / 3);
                    }else if (data.periodType === "week")
                    {
                      return  parseInt((data.timeToElapse * 7) / 3)
                    }
                    else if (data.periodType === "month"){
                       return parseInt((data.timeToElapse * 30) / 3)
                    }
        }
     
        impact.infectionsByRequestedTime = impact.currentlyInfected * Math.pow(2, converttodays(data));
        severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * Math.pow(2, converttodays(data));
        severeImpact.severeCasesByRequestedTime = severeImpact.infectionsByRequestedTime * 0.15;
        impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
     
        impact.hospitalBedsByRequestedTime = ( (data.totalHospitalBeds * 0.35)) - impact.severeCasesByRequestedTime
        severeImpact.hospitalBedsByRequestedTime = ((data.totalHospitalBeds * 0.35)) - severeImpact.severeCasesByRequestedTime
     
        impact.casesForICUByRequestedTime= impact.infectionsByRequestedTime * 0.05;
        severeImpact.casesForICUByRequestedTime=severeImpact.infectionsByRequestedTime * 0.05;
     
        impact.infectionsByRequestedTime=impact.infectionsByRequestedTime * 0.2;
        severeImpact.infectionsByRequestedTime=severeImpact.infectionsByRequestedTime * 0.2;
     
        return{
            impact,
            severeImpact,
            data
        }
     
       
     
     
     
}
// covid19ImpactEstimator(data)
 export default covid19ImpactEstimator;
    