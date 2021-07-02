const postId = document.querySelector('input[name="post-id"]').value;

console.log(postId)

const editFormHandler = async function(event) {
  event.preventDefault();
  console.log(event.target["data-id"])

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
  console.log(body)
  console.log("body")

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function(e) {
  
  console.log(e.target.name)
  console.log(e.target)
  console.log("TEST BUTTON")
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
  console.log("TEST POST ID")
  console.log(`${postId}`)
  console.log(Post.id)


  
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
