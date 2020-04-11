
// let data = {
//     region:{
//         name:"Africa",
//         aveAge:19.7,
//         avgDailyIncomeInUSD:5,
//         avgDailyIncomePopulation:0.71,
//     },
//     periodType:"days",
//     timeToElapse:58,
//     reportedCases:674,
//     population:66622705,
//     totalHospitalBeds:1380614
// }

//  const data={};
//  const impact={};
//  const severe={};

const covid19ImpactEstimator = (data) => {
     this.data=data
    // let currentlyInfected;
    impact={
        currentlyInfected:(data)=>{
            console.log(data.reportedCases*10)
            return data.reportedCases*10
        },
        infectionsByRequestedTime:(currentlyInfected,data)=>{
            if(data.periodType == "days")
            {
                time=data.timeToElapse / 3;
                return currentlyInfected * Math.pow(2,time)
            }else if(data.periodType == "week")
            {
                time= parseInt((data.timeToElapse * 7) / 3)
                return currentlyInfected * Math.pow(2,time)
            }
            else if(data.periodType == "month"){
                time=parseInt((data.timeToElapse * 30)/ 3)
                return currentlyInfected * Math.pow(2,time)
            }
        }
    };
    severeImpact={
        currentlyInfected:(data)=>{
            console.log(data.reportedCases*50)
            return data.reportedCases*50
        },
        infectionsByRequestedTime:(currentlyInfected,data)=>{
            if(data.periodType == "days")
            {
                time=data.timeToElapse / 3;
                return currentlyInfected * Math.pow(2,time)
            }else if(data.periodType == "week")
            {
                time= parseInt((data.timeToElapse * 7) / 3)
                return currentlyInfected * Math.pow(2,time)
            }
            else if(data.periodType == "month"){
                time=parseInt((data.timeToElapse * 30)/ 3)
                return currentlyInfected * Math.pow(2,time)
            }
        },
        // severeCasesByRequestedTime:(data,impact)=>{

        // }

    
    }







    // impact.currentlyInfected=(data) => {
    //     console.log(data.reportedCases * 10)
    //     return data.reportedCases * 10
    // }
    // severeImpact.currentlyInfected=(data)=> data.reportedCases * 50 ; 



    //  impact.infectionsByRequestedTime=(this) =>{
    //     console.log(this)
    //     return impact
    //  } 

    // impact.currentlyInfected=data.reportedCases*10;
    // severeImpact.currentlyInfected=data.reportedCases*50;

    // impact.infectionsByRequestedTime=impact.currentlyInfected * Math.pow(2, 19);
    // severeImpact.infectionsByRequestedTime=severeImpact.currentlyInfected * Math.pow(2,19);
    // severeImpact.severeCasesByRequestedTime=severeImpact.infectionsByRequestedTime * 0.15;
    // impact.severeCasesByRequestedTime=impact.infectionsByRequestedTime * 0.15;

    // impact.hospitalBedsByRequestedTime=((data.totalHospitalBeds* 0.35)) - impact.severeCasesByRequestedTime
    // severeImpact.hospitalBedsByRequestedTime=((data.totalHospitalBeds* 0.35)) - severeImpact.severeCasesByRequestedTime

    // impact.casesForICUByRequestedTime=impact.infectionsByRequestedTime*0.05;
    // severeImpact.casesForICUByRequestedTime=severeImpact.infectionsByRequestedTime*0.05;

    // impact.infectionsByRequestedTime=impact.infectionsByRequestedTime*0.2;
    // severeImpact.infectionsByRequestedTime=severeImpact.infectionsByRequestedTime*0.2;



    // console.log(impact)
    // console.log(impact.hospitalBedsByRequestedTime)
    // console.log(data)
    // console.log(severeImpact.severeCasesByRequestedTime);
    // console.log(impact.severeCasesByRequestedTime);

};

covid19ImpactEstimator(data);



// export default covid19ImpactEstimator;
    