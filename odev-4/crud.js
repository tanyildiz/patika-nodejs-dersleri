import fs from 'fs'

    fs.writeFile('employees.json', '{"name":"Employee 1 Name", "salary":2000}', 'utf8', (err) => {
        if (err) console.log(err)
        console.log("file is created")
    })

    fs.readFile('employees.json', 'utf-8', (err) => {
        if (err) console.log(err)
        console.log("file is read")
    })
    
    fs.appendFile('employees.json', '{"name":"Employee 2 Name", "salary":1000}', (err) => {
        if (err) console.log(err)
        console.log("file is updated")
    })

    
    fs.unlink('employees.json', (err) => {
        if (err) console.log(err)
        console.log("file is deleted")
    })