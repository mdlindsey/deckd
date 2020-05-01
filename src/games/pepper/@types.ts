// Outward facing GameModel
export interface GameModel {
    readonly data: RoundData[]
    readonly round: RoundModel
    readonly state: ActionState
    readonly score: ScoreModel
    bot(): number // Exposed publicly
    interact(action: ActionInput): GameModel // Exposed publicly
    normalizeRound(): void // Populates this.round
    reduceExpectedState(): void // Populates this.state
}
// ActionState dictates next move expectations
export interface ActionState {
    id: number
    player: number
    modifier: number // eg: on action PLAY modifier is suitId
}
// ActionInput is input by user for next move
export interface ActionInput {
    id: number
    player: number
    payload: number // eg: card being played
}
// Raw data (from db)
export interface RoundData {
    hands: Hand[]
    actions: ActionData[]
}
export interface ActionData {
    id: number
    payload: number
}
// Modeling
export type Hand = number[];
export type ScoreModel = { tricks: number, score: number }[];
export interface RoundModel {
    bids: number[]
    swaps: number[]
    trump: number
    plays: number[]
    hands: Hand[]
}