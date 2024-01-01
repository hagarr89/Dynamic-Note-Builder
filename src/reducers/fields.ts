import { FieldType, IFiled } from "../components/NoteBuilder";
import { v4 as uuidv4 } from 'uuid';




// An enum with all the types of actions to use in our reducer
export enum FielddActionKind {
  ADD_FIELD = 'ADD_FIELD',
  DELETE_FIELD = 'DELETE_FIELD',
  EDIT_FIELD  = 'EDIT_FIELD',
  INIT_FIELDS = 'INIT_FIELDS',
  ADD_OPTION='ADD_OPTION'
}


type ActionInitFields = {
  type: FielddActionKind.INIT_FIELDS,
    payload: {
      fields:IFiled[] | [];
  }
};

type ActionDeleteField={
  type: FielddActionKind.DELETE_FIELD,
    payload: {
      uuid:string;
     }
   };
type ActionEditField = {
  type: FielddActionKind.EDIT_FIELD,
  payload: {
     updateField:IFiled;
  }
};
type ActionAddField = {
    type: FielddActionKind.ADD_FIELD
}

export type Action = ActionEditField | ActionInitFields  | ActionDeleteField | ActionAddField;

export type Dispatch = (action:Action)=> void;

type State = {
  fields: IFiled[] | [];
};

// An interface for our actio

const addField = () => {
    return  {
      key: null,
      title: null,
      type:FieldType?.TextArea,
      uuid:uuidv4()
    };
  };
 export const addOption = () => {
    return  {
     label: null,
     value:null,
     uuid:uuidv4()
    }
  };

export const fieldsReducer = (state: State, action: Action): State =>  {
    const fields = state?.fields ?? [];
  switch (action.type) {
    case FielddActionKind.INIT_FIELDS :
        const initFeilds = action?.payload?.fields;
       return {...state , fields:initFeilds};

    case FielddActionKind.ADD_FIELD:{
        const updateFields = [...fields , addField()]
        return  {...state ,fields:updateFields};
    }
    case FielddActionKind.DELETE_FIELD:
        const res = fields?.filter((field) => field?.uuid !==  action?.payload?.uuid);
        return  {...state , fields:res};

    case FielddActionKind.EDIT_FIELD:
        const updateField = action?.payload.updateField;
        const updateFields =  fields?.map((field)=> {
            if(field?.uuid === updateField?.uuid){
                return {...field , ...updateField}
            } 
            return field
        })
        return {...state, fields:updateFields};
      
 
       
    default:
      return {...state , fields:fields}
  }
 } 