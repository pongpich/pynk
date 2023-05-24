import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CLEAR_PROGRAM: "CLEAR_PROGRAM",
  CREATE_BASICINFORMAMTION: "CREATE_BASICINFORMAMTION",
}

export const clearProgram = () => ({
  type: types.CLEAR_PROGRAM
})

export const basicInFormation = ( basicSex,basicAge,typeHei_Wig, tbasicHeight, basicWeight, practiceDifficultExercises,injury, arePregnant
    ) => ({
  type: types.CREATE_BASICINFORMAMTION,
  payload: {
    basicSex,
    basicAge, 
    typeHei_Wig,
    tbasicHeight, 
    basicWeight,
    practiceDifficultExercises,
    injury, 
    arePregnant
  }  
})


/* END OF ACTION Section */

/* SAGA Section */



export function* saga() {
  yield all([

  ]);

}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
    create_basicSex: null,
    create_basicAge: null, 
    create_typeHei_Wig: null,
    create_tbasicHeight: null, 
    create_basicWeight: null,
    create_practiceDifficultExercises: null,
    create_injury: null, 
    create_arePregnant: null,
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CLEAR_PROGRAM:
      return INIT_STATE;
    case types.CREATE_BASICINFORMAMTION:
      return {
        ...state,
        create_basicSex: action.payload.basicSex, 
        create_basicAge: action.payload.basicAge, 
        create_typeHei_Wig: action.payload.typeHei_Wig,
        create_tbasicHeight: action.payload.tbasicHeight, 
        create_basicWeight: action.payload.basicWeight,
        create_practiceDifficultExercises: action.payload.practiceDifficultExercises,
        create_injury: action.payload.injury, 
        create_arePregnant: action.payload.arePregnant,
      };
    default:
      return { ...state };
  }
}