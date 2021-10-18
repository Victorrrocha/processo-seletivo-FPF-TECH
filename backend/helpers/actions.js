const GetRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const playerAtaque = () => {
    let value = GetRandomValue(5, 8)
    return [value, `Jogador atacou o monstro (-${value})`]
}

const playerAtaqueEspecial = () => {
    let value = GetRandomValue(7, 11)
    return [value, `Jogador usou o golpe especial (-${value})`]
}

const curaAposAtaqueEspecial = (dano) => {
    let chance = GetRandomValue(1, 100)
    if(chance <= 25){
        let value = Math.ceil(+dano/2)
        return [value, `Jogador usou a cura (+${value})`]
    }
    return [-1, "no cure"]
}

const playerCurar = () => {
    let value = GetRandomValue(5, 10)
    return [value, `Jogador usou a cura (+${value})`]
}

const monstroAtacar = (hitWithSpecialAttack = false) => {
    if(hitWithSpecialAttack){
        let chance = GetRandomValue(1, 100)
        if(chance <= 40){
            return [0, 'Monstro não atacou']
        }
    }
    
    let value = GetRandomValue(6, 12)
    return [value, `Monstro causou dano (-${value})`]
}

exports.playerAtaque = playerAtaque
exports.playerAtaqueEspecial = playerAtaqueEspecial
exports.curaAposAtaqueEspecial = curaAposAtaqueEspecial
exports.playerCurar = playerCurar
exports.monstroAtacar = monstroAtacar