function solution(participantList, completionList) {
    completionList.forEach((completion) => {
        participantList.forEach((participant, index) => {
            if (completion === participant) {
                participantList.splice(index, 1);
            }
        })
    });

    return participantList.join('');
}