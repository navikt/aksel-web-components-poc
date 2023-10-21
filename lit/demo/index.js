window.onload = function () {
  var form = document.getElementById("form-id");
  var formWebc = document.getElementById("form-id-webc");
  form.onsubmit = function (e) {
    e.preventDefault();
    console.log(e);
  };
  formWebc.onsubmit = function (e) {
    e.preventDefault();
    console.log(e);
  };
};
