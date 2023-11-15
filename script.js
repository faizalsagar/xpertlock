// Header
window.onscroll = function () {
    myFunction();
  };
  
  var header = document.getElementById("Header");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  
  type =
    "application/ld+json" >
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Password Generator",
      description:
        "Generate strong, random passwords with our easy-to-use password generator.",
      url: "https://example.com/password-generator",
    };
  