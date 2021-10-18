import { createSlice } from '@reduxjs/toolkit'

const initialGameState = {
    status: true,
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
    logEntries: []
}

const gameSlice = createSlice({
    name: 'game',
    initialState: initialGameState,
    reducers: {
        update(state, action) {
            return action.payload
        }
    }
})

export const gameReducer = gameSlice.reducer
export const gameActions = gameSlice.actions