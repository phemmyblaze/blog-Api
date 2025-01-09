let postTitle = document.getElementById("post-title");
let postBody = document.getElementById("post-body");
let postForm = document.getElementById("post-form");
let newArray = [];




postForm.addEventListener("submit", (e) => {
    e.preventDefault()

    createPost()
})


function getPosts () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())

    .then((data) => {
        newArray = data
        addedPosts()
    })
    
}


function addedPosts () {
    console.log(newArray)

    let postLayout = document.getElementById("post-layout")
    let html = "";

    newArray.forEach((e, index) => {
        html += `
            <div class="col-mb-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-end">
                            <h6>${index +1}</h6>
                        </div>
                        <h5>${e.title}</h5>
                        <p>${e.body}</p>

                    </div>
                
                </div>
            
            </div>
        `
    })

    postLayout.innerHTML = html
}

getPosts()





function createPost () {

}