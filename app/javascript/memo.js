function memo() {
  submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    debugger
    const formData = new FormData(document.getElementById("form"));
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/posts", true);
    xhr.responseType = "json";
    xhr.send(formData);
    xhr.onload = () => {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
        return null;
      }
      const item = xhr.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
      <div class="post" data-id=${item.id}>
         <div class="post-date">
           投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
       </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = ""
    };
    e.preventDefault();
  });
}

window.addEventListener("load", memo)