function getPost() {
    let postId = localStorage.getItem('postNumber')
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postBody = document.getElementById('post-body')
        let html =""
        let none = ""

        html += `
        <div>
            <div class="card">
                <div class="card-body">
                    <div class=" d-flex justify-content-end">
                    <h6 class="text-dark">${data.id}</h6>
                    </div>
                    <h5 class="post-title mb-4">${data.title}</h5>
                    <p class="post-body">${data.body}</p>
                </div>
            </div>
        </div>
        `

        none += `
        <div>
            <div class="card">
                <div class="card-body">
                    <h3 class="post-title mb-4 text-danger">Erorr 404</h3>
                    <p class="post-body">Page not found</p>
                </div>
            </div>
        </div>
        `
         if(Object.keys(data).length !== 0) {
            postBody.innerHTML = html
         } else {
            postBody.innerHTML = none
         }
        
    })
}

getPost()