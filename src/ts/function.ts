
interface values {
  val1: number,
  val2: number
}

export let final:number | null;
export const clearFinal = (): void => {
  final = null;
}

export const Multiply = (mount: values):void => {
  final =  mount.val1 * mount.val2
}

export const Subtraction = (mount: values) => {
  final =  mount.val1 - mount.val2
}

export const Addition = (mount: values) => {
  final =  mount.val1 + mount.val2
}

export const Division = (mount: values) => {
  final =  mount.val1 / mount.val2
}



