import { createServer } from 'http'

const server = createServer((req, res) => {
    
    const url = req.url

    if (url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<h2>Index Page</h2>")
    } else if (url === "/hakkimda") {
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write("<h2>About Page</h2>")
    } else if (url === "/iletisim") {
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write("<h2>Contact Page</h2>")
    } else {
        res.writeHead(404, {"Content-Type":"text/html"})
        res.write("<h2>Page Not Found</h2>")
    }

    res.end()
})

const port = 3500

server.listen(port, () => {
    console.log(`Server is starting on port ${port}...`)
})
