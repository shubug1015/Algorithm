function solution(id_pw, db) {
    const [id, pw] = id_pw;
    let answer = 'fail';
    for (const [dbId, dbPw] of db) {
        if (id === dbId) {
            answer = 'wrong pw'
             if (pw === dbPw) {
                 answer = 'login'
             }
        }
       
    }
    return answer;
}