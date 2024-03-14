function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
  }
  
  function solution(n) {
      const numList = [...Array(n)].map((_, index) => index + 1);
      const answer = numList.reduce((acc, cur) => {
          if (!isPrime(cur))
              acc += 1;
              return acc;
      }, 0);
      
      return answer;
  }