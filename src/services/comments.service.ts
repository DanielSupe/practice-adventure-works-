import { ModelStatic } from 'sequelize';
import { createComment, Icomments } from '../interfaces';

module.exports = (CommentsModel: ModelStatic<Icomments>) => {

    const createComment = async (comment: createComment) => {
        const newComment = await CommentsModel.create({...comment});
        return newComment;
    };

    return {
        createComment
    };
};