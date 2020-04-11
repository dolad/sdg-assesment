
const covid19ImpactEstimator = (data) => {
     this.data=data
    // let currentlyInfected;
    impact={
        currentlyInfected:(data) => {
            return data.reportedCases*10
        },
        infectionsByRequestedTime:(currentlyInfected, data) => {
            if(data.periodType == "days")
            {
                time=data.timeToElapse / 3;
                return currentlyInfected * Math.pow(2, time)
            }else if(data.periodType == "week")
            {
                time= parseInt((data.timeToElapse * 7) / 3)
                return currentlyInfected * Math.pow(2,time)
            }
            else if(data.periodType == "month"){
                time=parseInt((data.timeToElapse * 30) / 3)
                return currentlyInfected * Math.pow(2,time)
            }
        }
    };
    severeImpact={
        currentlyInfected:(data) => {
            return data.reportedCases*50
        },
        infectionsByRequestedTime:(currentlyInfected,data) => {
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
        
    
    }

};

export default covid19ImpactEstimator;
    