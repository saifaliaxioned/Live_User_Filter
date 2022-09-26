// Live User Filter function
var users = document.querySelector('.users');
var inputFilter = document.querySelector('.filter-input');
var listData = [];

inputFilter.addEventListener('keyup', function (e) {
  filterSearch(e.target.value);
});   

apiCall();

function apiCall() {
  
  fetch('https://randomuser.me/api?results=50').then(function (res) {
    return res.json();
  }).then(function (data) {   
    var result = data.results;
    users.innerHTML = '';
    result.forEach(function (resultData) {  
        var userList = document.createElement('li');
        userList.classList.add('user-list');
        userList.innerHTML = ` <figure class="user-img">
                  <img src="${resultData.picture.medium}" alt="user">
                </figure>
                <div class="user-info">
                  <h2 class="user-name">${resultData.name.first} ${resultData.name.last}</h2>
                  <p class="user-location">${resultData.location.city},${resultData.location.country}</p>
                </div>`;
      listData.push(userList);
      users.appendChild(userList);    
    }); 
  })
}

function filterSearch(text) {
  listData.forEach(function (userInfo) {
    if (userInfo.innerText.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
      userInfo.classList.remove('hide-list');
    } else {
      userInfo.classList.add('hide-list');
    }
  });
}
























