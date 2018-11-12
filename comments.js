import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP, THUMB_DOWN} from './actions';


function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                thumb: 0
            }, ...state.comments ];

        case REMOVE_COMMENT:
            return [{
                comments: state.comments.filter(comment => comment.id !== action.id)
            }];

        case EDIT_COMMENT:
            return [{
                id: state.comments.id,
                text: action.text
            }, ...state.comments];

        case THUMB_UP:
            return [{
                id: state.comments.id,
                thumb: action.thumb++
            }];

        case THUMB_DOWN:
            return [{
                id: state.comments.id,
                thumb: action.thumb--
            }];

        default:
            return state;
    }
}
export default comments;