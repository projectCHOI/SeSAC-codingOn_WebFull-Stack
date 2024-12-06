// 임시 데이터
const Comment = {
  commentInfos: () => [
    { id: 1, name: "Alice", comment: "Hello, world!" },
    { id: 2, name: "Bob", comment: "This is a comment." },
    { id: 3, name: "Charlie", comment: "How are you?" },
    { id: 4, name: "Dave", comment: "Nice to meet you!" },
  ],
};

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  const comments = Comment.commentInfos();
  console.log(comments);
  res.render("comments", { comments });
};

exports.comment = (req, res) => {
  const comments = Comment.commentInfos();
  const commentId = req.params.id;

  if (commentId < 1 || commentId > comments.length || isNaN(commentId)) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
