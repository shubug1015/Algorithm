function solution(operations) {
    const heap = [];
    const operationList = operations.map((operation) => operation.split(' '));
    
    operationList.forEach(([operation, data]) => {
        if (operation === 'I') {
            heap.push(Number(data))
        }

        if (operation === 'D') {
            const findValue = data === '1' ? Math.max(...heap) : Math.min(...heap);
            const deleteIndex = heap.indexOf(findValue);          	
            heap.splice(deleteIndex, 1);
        }
    })
    
    return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}