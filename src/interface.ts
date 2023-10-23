interface Step {
  id: string,
  date: string,
  distance: string,
}

interface Row extends Step {
  editRow: CallableFunction,
  deleteRow: CallableFunction, 
}

export type { Step, Row };
