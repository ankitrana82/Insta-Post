//Follow Button
document.addEventListener("DOMContentLoaded", function () {
  const followBtn = document.getElementById("followBtn");
  let isFollowing = false;

  followBtn.addEventListener("click", function () {
    isFollowing = !isFollowing;
    updateButton();
  });

  function updateButton() {
    if (isFollowing) {
      followBtn.textContent = "Following";
      followBtn.className =
        "border border-gray-400 bg-white text-black font-semibold px-4 py-1.5 rounded-lg transition";
    } else {
      followBtn.textContent = "Follow";
      followBtn.className =
        "border border-blue-600 text-blue-600 font-semibold px-4 py-1.5 rounded-lg transition";
    }
  }
});

//Like Icon 
document.addEventListener("DOMContentLoaded", function () {
      const likeIcon = document.getElementById("likeIcon");
      let isLiked = false;

      likeIcon.addEventListener("click", function () {
        isLiked = !isLiked;
        if (isLiked) {
          likeIcon.src = "https://cdn-icons-png.flaticon.com/128/833/833472.png"; // Red heart icon
        } else {
          likeIcon.src = "https://cdn-icons-png.flaticon.com/128/535/535285.png"; // Original heart
        }
      });
    });

//Save Icon
document.addEventListener("DOMContentLoaded", function(){
    const saveIcon = document.getElementById("saveIcon");
    let issave = false;

    saveIcon.addEventListener("click", function() {
        issave = !issave;
        if(issave){
            saveIcon.src = "https://cdn-icons-png.flaticon.com/128/9511/9511671.png"; //black save icon
        } else{
            saveIcon.src = "https://cdn-icons-png.flaticon.com/128/9511/9511721.png"; // Original icon
        }
    });
});
