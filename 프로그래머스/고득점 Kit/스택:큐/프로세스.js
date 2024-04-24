function solution(priorities, location) {
    let processList = priorities.map((priority, index) => ({
        id: index,
        priority
    }));
    
    let processIdList = [];
    
    while (processList.length > 0) {        
        const process = processList.shift();
        const hasHigherPriority = processList.some(
            (pendingProcess) => process.priority < pendingProcess.priority
        );        
        
        if (hasHigherPriority) {
            processList.push(process);
        } else {
            processIdList.push(process.id);
        }                      
    }
    
    return processIdList.indexOf(location) + 1;
}