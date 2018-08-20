token = localStorage.getItem("token");
if (token) {
  window.location = "index.html";
}

new Vue({
  el: "#app",
  data: {
    message: "",
    logo: "https://i.imgur.com/Mei7M7F.png",
    email: "",
    password: ""
  },
  methods: {
    login: function() {
      axios({
        method: "POST",
        url: "http://localhost:3000/signin",
        data: {
          email: this.email,
          password: this.password
        },
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(response => {
          if (response.data.role === "admin") {
            localStorage.setItem("token", response.data.token);
            window.location = "index_admin.html";
          }


          if (response.data.role === "user") {
            localStorage.setItem("token", response.data.token);
            window.location = "index.html";
          }

          
        })
        .catch(err => {
          this.message = "Username / password is wrong";
        });
    }
  }
});
