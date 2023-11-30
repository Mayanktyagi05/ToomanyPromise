const posts = [];
let lastActivityTime = null;

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve) => {
    posts.push(post);
    resolve(posts);
  });
}

function deletePost() {
  return new Promise((resolve) => {
    if (posts.length > 0) {
      posts.pop(); 
    }
    resolve(posts);
  });
}

createPost('First Post')
  .then(() => updateLastUserActivityTime()) 
  .then((updatedActivityTime) => {
    console.log('Posts:', posts);
    console.log('Last Activity Time:', updatedActivityTime);
    return deletePost();
  })
  .then((remainingPosts) => {
    console.log('Deleted the last post.');
    console.log('Remaining Posts:', remainingPosts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
