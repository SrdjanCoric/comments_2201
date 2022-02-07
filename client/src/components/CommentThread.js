import Comment from "./Comment";

const CommentThread = ({ comment }) => {
  return (
    <div class="parent-comment">
      <Comment {...comment} />
      <div class="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}

        <a href="/#" class="show_more">
          Show More Replies ({comment.replies_count - 1})
        </a>
      </div>
    </div>
  );
};

export default CommentThread;
