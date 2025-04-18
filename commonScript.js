const header = document.querySelector(".header");
function toggleNav() {
  const sections = document.querySelectorAll("section, footer");
  header.classList.toggle("active"),
    header.classList.contains("active")
      ? sections.forEach((section) => {
          section.addEventListener("click", toggleNav);
        })
      : sections.forEach((section) => {
          section.removeEventListener("click", toggleNav);
        });
}
const anchors = header.querySelectorAll("a"),
  headerAnim = () => {
    const offsetY = window.scrollY;
    header.classList.contains("header-scroll-style")
      ? offsetY < 50 && header.classList.remove("header-scroll-style")
      : offsetY > 200 && header.classList.add("header-scroll-style");
  };
headerAnim(), window.addEventListener("scroll", headerAnim);
const submitForm = (e) => {
  e.preventDefault();
  var nameVal = document.getElementById("name").value.trim(),
    messageVal = document.getElementById("message").value.trim();
  if (nameVal && "" != messageVal) {
    e.preventDefault();
    var templateParams = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    Toastify({
      text: "Sending message..",
      duration: 4500,
      gravity: "top",
      position: "left",
      stopOnFocus: !0,
      offset: { y: 70 },
      style: { background: "#eab308" },
      onClick: function () {},
    }).showToast(),
      emailjs.init(`${publicKey}`),
      emailjs.send(`${serviceID}`, `${templateID}`, templateParams).then(
        function (response) {
          Toastify({
            text: "Your message has been sent successfully!",
            duration: 3e3,
            gravity: "top",
            position: "left",
            stopOnFocus: !0,
            offset: { y: 70 },
            style: { background: "#16a34a" },
          }).showToast(),
            formDiv.classList.remove("open"),
            document.getElementById("myform").reset();
        },
        function (error) {
          window.navigator.onLine
            ? (Toastify({
                text: "Server limit reached",
                duration: 3e3,
                gravity: "top",
                position: "left",
                stopOnFocus: !0,
                offset: { y: 70 },
                style: { background: "#ef4444" },
                onClick: function () {},
              }).showToast(),
              setTimeout(() => {
                Toastify({
                  text: "Mail me at sushain.work@gmail.com",
                  duration: 5e3,
                  gravity: "top",
                  position: "left",
                  stopOnFocus: !0,
                  offset: { y: 70 },
                  style: { background: "#0284c7" },
                  onClick: function () {},
                }).showToast();
              }, 1e3))
            : Toastify({
                text: "Error! Please check your internet connection and try again.",
                duration: 3e3,
                gravity: "top",
                position: "left",
                stopOnFocus: !0,
                offset: { y: 70 },
                style: { background: "#dc2626" },
                onClick: function () {},
              }).showToast();
        }
      );
  } else
    Toastify({
      text: "Field's can not remain empty.",
      duration: 3e3,
      gravity: "top",
      position: "left",
      stopOnFocus: !0,
      offset: { y: 70 },
      style: { background: "#dc2626" },
      onClick: function () {},
    }).showToast();
};
(slowInternet = setTimeout(() => {
  document.querySelector(".loaderDiv p").innerHTML = "Slow internet :(";
}, 3e3)),
  (almostReady = setTimeout(() => {
    document.querySelector(".loaderDiv p").innerHTML =
      "Page is almost ready...";
  }, 7e3)),
  (document.onreadystatechange = () => {
    "complete" === document.readyState &&
      (clearTimeout(slowInternet),
      clearTimeout(almostReady),
      (document.querySelector(".loaderDiv p").innerHTML =
        "Page is almost ready!"),
      setTimeout(() => {
        document.querySelector(".loaderDiv p").innerHTML = "Page is ready!";
      }, 1e3),
      setTimeout(() => {
        document.querySelector(".loaderDiv").classList.add("removeLoader"),
          (document.querySelector("body").style.overflowY = "scroll");
      }, 2500),
      window.scrollTo(0, 0)),
      window.scrollTo(0, 0);
  });
const setSkeleton = () => {
  document.querySelectorAll(".imgDiv").forEach((div) => {
    var image = div.querySelector("img");
    !image.src.includes("/assets") && div.classList.contains("skeleton-box")
      ? ((image.style.scale = 0),
        (image.style.transition = "all 0.2s"),
        (image.onload = (img) => {
          (img.target.style.scale = "1"), div.classList.remove("skeleton-box");
        }))
      : div.classList.remove("skeleton-box");
  });
};
