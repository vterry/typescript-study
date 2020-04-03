import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/comments';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

axios.get(url).then(response => {
  const comments = response.data as Comment[];

  for (var comment of comments) {
    const ID = comment.id;
    const postId = comment.postId;
    const name = comment.name;
    const email = comment.email;
    const body = comment.body;

    logComment(ID, postId, name, email, body);
  }
});

const logComment = (
  id: number,
  postId: number,
  name: string,
  email: string,
  body: string
) => {
  console.log(`
    New comment from ${name}!!!
    Complete log:
     id: ${id}
     postId: ${postId}
     fromUser: ${email} - ${name}
     body: ${body}
  `);
};
