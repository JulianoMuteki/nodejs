// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 9091

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World!\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// setTimeout(() => {
//   console.trace()
// }, 10000)


// const rocks = who => {
//   console.log(who + " rocks")
// }
// setTimeout(rocks, 2 * 1000, 'PluralSight');

setInterval(
  () => console.log("You will not see this one!"),
   3000
  );


const timerId = setTimeout(
  () => console.log("You will not see this one!"),
  20
);

clearInterval(timerId);
//clearTimeout