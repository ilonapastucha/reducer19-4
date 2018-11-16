import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP, THUMB_DOWN} from './actions';


function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                thumb: 0
            }, ...state ];

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id)

        case EDIT_COMMENT:
            return state.map(comment => comments.id === action.id ? 
                {... comment, text: action.text} : comment
            );

        case THUMB_UP:
            return state.map(comment => comments.id === action.id ? 
                {... comment, thumb: comment.thumb + 1} : comment
            );


        case THUMB_DOWN:
        return state.map(comment => comments.id === action.id ? 
            {... comment, thumb: comment.thumb - 1} : comment
        );

        default:
            return state;
    }
}
export default comments;