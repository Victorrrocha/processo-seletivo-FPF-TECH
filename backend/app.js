const express = require('express')
const app = express()
const port = 5000
const { v4: uuidv4 } = require('uuid');

const { playerAtaque, playerAtaqueEspecial, curaAposAtaqueEspecial, playerCurar, monstroAtacar } = require('./helpers/actions')

let RANKING = []

let log = []

let GAME = {
    status: false,
    playerWon: null,
    turn: 0,
    player: {
        health: 100,
        specialAttackCounter: 0
    },
    monster: {
        health: 100,
        hitWithSpecialAttack: false
    },
    logEntries: log
}

app.use(express.json())

app.get('/game', (req, res) => {
    //console.log("Starting new game - Monster goes first")

    GAME = {
        status: false,
        playerWon: null,
        turn: 0,
        player: {
            health: 100,
            specialAttackCounter: 0
        },
        monster: {
            health: 100,
            hitWithSpecialAttack: false
        },
        logEntries: log
    }

    log = []
    const [hit, message] = monstroAtacar()
    
    log = [{id: uuidv4(), type : 1, message: message, contestant: 'monster'}, ...log]

    const newPlayerHealth = GAME.player.health - hit

    GAME = {
        status: true,
        playerWon: null,
        turn: 1,
        player: {
            health: newPlayerHealth,
            specialAttackCounter: 0
        },
        monster: {
            health: 100
        },
        logEntries: log
    }

    return res.json(GAME)
})

app.post('/game', (req, res) => {
    //Get action from body
    let { action } = req.body
    console.log(action)

    let ataque = 0
    let cura = 0
    let type = null
    let message = ""
    let triggeredMessage = ""

    //perform action from player
    switch(action){
        case 'ataque':
            [ataque, message] = playerAtaque()
            GAME.player.specialAttackCounter++
            type = 2
            break
        case 'ataque-especial':
            if(GAME.player.specialAttackCounter >= 2){
                [ataque, message] = playerAtaqueEspecial()
                GAME.monster.hitWithSpecialAttack = true
                GAME.player.specialAttackCounter = 0
                type = 3
            }
            else{
                return res.send("unable to use")
            }
            break
        case 'curar':
            [cura, message] = playerCurar()
            GAME.player.specialAttackCounter++
            type = 4
            break
        case 'desistir':
            // set status to false
            GAME.status = false
            GAME.playerWon = false
            return res.json(GAME)
        default: 
            return 

    }

    GAME.turn += 1
    //Messages after actions
    log = [{id: uuidv4(), type: type, message: message, contestant: 'player'}, ...log]
    if(action === 'ataque-especial'){
        [cura, triggeredMessage] = curaAposAtaqueEspecial(ataque)
        if(cura > 0)
        log = [{id: uuidv4(), type: 4, message: triggeredMessage, contestant: 'player'}, ...log]
    }

    GAME.logEntries = log

    GAME.player.health += cura
    if(GAME.player.health > 100){
        GAME.player.health = 100
    }

    //Monster status
    GAME.monster.health -= ataque
    
    if(GAME.monster.health <= 0) { //won game
        GAME.playerWon = true
        GAME.status = false
        res.json(GAME)
    }

    //perform action from monster
    let [ataqueMonstro, messageMonster] = monstroAtacar(GAME.monster.hitWithSpecialAttack)
    GAME.monster.hitWithSpecialAttack = false

    GAME.player.health -= ataqueMonstro
    log = [{id: uuidv4(), type: 1, message: messageMonster, contestant: 'monster'}, ...log]
    GAME.logEntries = log

    //check if player died - lose game
    if(GAME.player.health <= 0){ // lost
        GAME.player.health = 0
        GAME.playerWon = false
        GAME.status = false
        return res.json(GAME)
    }

    return res.json(GAME)
})

app.get('/ranking', (req, res) => {
    res.json(RANKING)
})

app.post('/ranking', (req, res) => {
    const { playerName, score } = req.body
    const server_date = new Date()
    //format date
    dia  = server_date.getDate().toString().padStart(2, '0')
    mes  = (server_date.getMonth()+1).toString().padStart(2, '0')
    ano  = server_date.getFullYear();

    RANKING.push({playerName, data: `${dia}/${mes}/${ano}`, score})
    res.sendStatus(200)
})

app.listen(port, (err) => {
    if(err){
        console.log(console.error())
    }
    console.log(`started listening on port ${port}`)
})