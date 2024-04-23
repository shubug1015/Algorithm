function solution(genres, plays) {
    const map = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i],
              play = plays[i];
        
        if (!map.get(genre)) {
            map.set(genre, { totalPlay: 0, list: [] });
        }
        
        map.set(genre, {
            totalPlay: map.get(genre).totalPlay + play,
            list: [...map.get(genre).list, { index: i, play }]
        });
    }
    
    const sortedMap = new Map([...map].sort((a, b) => b[1].totalPlay - a[1].totalPlay));
    
    let answer = [];
    for (const [key, value] of sortedMap) {
        value.list.sort((a, b) => b.play - a.play);
        
        for (const { index } of value.list.slice(0, 2)) {
            answer.push(index);
        }
    }

    return answer;
}
