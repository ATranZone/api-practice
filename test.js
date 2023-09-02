const app = require('express')()

const port = 2000

var monsterList = []

async function grabMonsters() {
    //debugger
    try {
        const response = await fetch('https://mhw-db.com/monsters')
        const monsters = await response.json()
        return monsters
    } catch (error) {
        console.error(error)
    }
}

(async() => {
    console.log('before start');
    monsterList = await grabMonsters()
    console.log(monsterList[0]) 
    console.log('after start');
})();


app.listen(port, () => console.log("The server is running!")) 
