import { Dispatch } from 'redux';
import { stopSubmit } from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { chatAPI, ChatMessageType, statusType } from "../api/chat-api";

// State
let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as statusType
};

// Reducer
export const chatReducer = (state = initialState, action:ActionsType): InitialStateType => {
     switch (action.type) {
        //Получаем данные о пользователе 
        case "SN/chat/MESSAGES_RECEVIED":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages ]
            }
        case "SN/chat/STATUS_CHANGED":
            return {
                ...state,
                status: action.payload.status
            }
        default: return state
    }
}

// actions
export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({ 
        type: "SN/chat/MESSAGES_RECEVIED", 
        payload:{messages} 
    } as const),
    statusChenged: (status: statusType) => ({ 
        type: "SN/chat/STATUS_CHANGED", 
        payload:{status} 
    } as const),
}

// HOK
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null // _Приватное поле
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}
let _statusChengedHandler: ((status: statusType) => void) | null = null
const statusChengedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChengedHandler === null) {
        _statusChengedHandler = (status) => {
            dispatch(actions.statusChenged(status))
        }
    }
    return _statusChengedHandler
}
// Thank 
export const startMessagesListenung = ():ThunkType => async (dispatch) =>{
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-chenged', statusChengedHandlerCreator(dispatch))
}

export const stoptMessagesListenung = ():ThunkType => async (dispatch) =>{
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-chenged', statusChengedHandlerCreator(dispatch))
    chatAPI.stop()
}

export const seendMessage = (message: string):ThunkType => async (dispatch) =>{
    chatAPI.sendMessage(message)
}

// export
export default initialState;

// Type
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>