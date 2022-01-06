
export let final:number | null;
export const clearFinal = (): void => {
  final = null;
}

export const Multiply = (val1: number, val2: number):void => {
  final = val1 * val2
}

export const Subtraction = (val1: number, val2: number) => {
  final = val1 - val2
}

export const Addition = (val1: number, val2: number) => {
  final = val1 + val2
}

export const Division = (val1: number, val2: number) => {
  final = val1 / val2
}



