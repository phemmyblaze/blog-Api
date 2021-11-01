let postTitle = document.getElementById('post-title');
let postBody = document.getElementById('post-body');
let postForm = document.getElementById('post-form');
let newArray = [];

postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createPost()
})


function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((data) => {
      newArray = data
      addedPosts()
    })
}

function addedPosts() {
    console.log(newArray)
    let postLayout = document.getElementById('post-layout')
      let html = "";
      newArray.forEach((e, index) => {
        html += `
        <div class="pickedPosts col-md-4 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <div class=" d-flex justify-content-end">
                        <h6 class="text-dark">${index + 1}</h6>
                    </div>
                    <h5 class="post-title mb-4">${e.title}</h5>
                    <p class="post-body">${e.body}</p>
                </div>
            </div>
        </div>
        `
      })
      postLayout.innerHTML = html
      upPost()

}


function upPost() {
    let pickedPosts = document.querySelectorAll('.pickedPosts')
    console.log(pickedPosts)
    pickedPosts.forEach((e, index) => {
        e.addEventListener('click', () => {
            console.log(index)
            localStorage.setItem('postNumber', index + 1)
            window.location.href = 'post.html';
        })
    })
}

getPosts()


function createPost() {
    let pTitle = postTitle.value
    let pBody = postBody.value

    if(pTitle == "") {
        alert("Input title is required")
    } else if (pBody == "") {
        alert("Input the body")
    } else {
        let createdPost = {
            title: pTitle,
            body: pBody,
            userId: 5
        }
    
        newArray.push(createdPost)
        postTitle.value= ""
        postBody.value = ""
        addedPosts()
        alert("Blog post created successfully")
    }
}