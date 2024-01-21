function averageNumber(n) {
    
    average = 0;
    for (i = 1; i <= n; i++) {
      average += i / n;
    }
    console.log("The average of first", n, "numberas is: ", average);
  }
  
  averageNumber(20);