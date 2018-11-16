import uuid from 'uuid';


const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP = 'THUMB_UP';
const THUMB_DOWN = 'THUMB_DOWN';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        thumbs: 0
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumbUp(id) {
	return {
		type: THUMB_UP,
		id
	}
}

function thumbDown(id) {
	return {
		type: THUMB_DOWN,
		id
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => id => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundthumbUp = thumbs => id => dispatch(thumbUp(thumbs, id));
const boundthumbDown = thumbs => id => dispatch(thumbDown(thumbs, id));

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');

boundEditComment('edytowany komentarz!', 50);
boundEditComment('kolejny edytowany komentarz!', 25);

boundRemoveComment(40);
boundRemoveComment(15);

boundthumbUp(1000, 50);
boundthumbDown(190, 25);

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';