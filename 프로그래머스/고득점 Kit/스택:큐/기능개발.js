function solution(progresses, speeds) {
    const deployDayList = progresses.map(
        (progress, index) => Math.ceil((100 - progress) / speeds[index])
    );
    let deployDayGroupList = [[deployDayList[0]]];
    let maxDeployDay = deployDayList[0];
    
    for (let i = 1; i < deployDayList.length; i++) {
        if (maxDeployDay >= deployDayList[i]) {
            deployDayGroupList[deployDayGroupList.length - 1].push(deployDayList[i]);            
        } else {
            maxDeployDay = deployDayList[i];
            deployDayGroupList.push([deployDayList[i]]);
        }
    }
    
    const answer = deployDayGroupList.map((v) => v.length);
    
    return answer;
}