let d = new Date();
let year = d.getFullYear();
// Although javascriptreturns an index of 0 to 11, 
// in my case it returned 10 when I logged it on the console. so I added + 1 to solve the issue.
let month = d.getMonth()+1;
console.log(month);
let date = d.getDate();

console.log(month + "/" + date + "/" + year);