function solution(bridge_length, weight, truck_weights) {    
    let bridgeQueue = [{ time: bridge_length, weight: truck_weights.shift() }];    
    let time = 1;
    
    while (bridgeQueue.length > 0) {
        // 경과 시간 1 증가
        time++;
        
        // 트럭의 다리를 건너기까지 남은 시간 -1을 한 후,
        // 남은 시간이 0인 경우(다리는 지난 경우), queue에서 제거
        bridgeQueue = bridgeQueue
            .map(({ time, weight }) => ({ time: time - 1, weight }))
            .filter(({ time }) => time !== 0);
        
        // 다리를 건너는 트럭 무게의 총 합
        const totalWeight = bridgeQueue.reduce((acc, cur) => acc += cur.weight, 0);
        
        // '다리를 건너는 트럭 무게의 총 합 + 대기중인 첫 번째 트럭' 값이
        // 다리가 견딜 수 있는 무게보다 작을 시,
        // queue에 push(다리에 트럭 추가)
        if ((totalWeight + truck_weights[0]) <= weight) {            
            bridgeQueue.push({ time: bridge_length, weight: truck_weights.shift() });
        }        
    }

    return time;
}