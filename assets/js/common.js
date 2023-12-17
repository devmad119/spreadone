$(document).ready(function () {
  $("#wrapper").hide(); // Initial hide using hide() method
  $("#scroll").click(function () {
    $("#mainvisual").fadeOut("fast", function () {
      $("#wrapper").fadeIn("fast");
    });
  });

  $("#next").click(function () {
    $("#mainvisual").fadeOut("fast", function () {
      $("#wrapper").fadeIn("fast");
    });
  });
  2;
});

$(document).ready(function () {
  $("#close").click(function () {
    $("#mobile").fadeOut("fast", function () {});
    $("#navbar").css("display", "flex");
  });
  $("#open").click(function () {
    $("#mobile").fadeIn("fast", function () {});
    $("#navbar").css("display", "none");
  });
  $("#about").click(function () {
    $("#tab").slideToggle("normal", function () {});
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const introMoonImage = document.querySelector("#intro-moon");
  const serviceSection = document.querySelector("#service");
  const serviceCloud1Image = document.querySelector("#service-cloud1");
  const serviceCloud2Image = document.querySelector("#service-cloud2");
  const serviceTitle = document.querySelector("#service-title");
  const serviceTitleInner = document.querySelector("#service-title-inner");

  serviceCloud1Image.setAttribute(
    "data-aos-offset",
    serviceTitleInner.getBoundingClientRect().height - window.innerHeight
  );
  serviceCloud2Image.setAttribute(
    "data-aos-offset",
    serviceTitleInner.getBoundingClientRect().height - window.innerHeight
  );
  serviceTitle.setAttribute(
    "data-aos-offset",
    serviceTitleInner.getBoundingClientRect().height - window.innerHeight
  );
  serviceTitleInner.setAttribute(
    "data-aos-offset",
    serviceTitleInner.getBoundingClientRect().height - window.innerHeight
  );

  const selfSection = document.querySelector("#self");
  const selfWebRTCSection = document.querySelector("#self-webrtc");
  selfWebRTCSection.style.top = `-${
    selfWebRTCSection.getBoundingClientRect().height / 2
  }px`;
  selfWebRTCSection.style.right = 0;
  const selfWebRTCSectionTop =
    selfSection.offsetTop -
    selfWebRTCSection.getBoundingClientRect().height / 2;

  window.addEventListener("scroll", function () {
    //Intro Moon Image Expand Effect
    if (
      this.window.innerWidth > 640 &&
      this.window.scrollY > 0 &&
      this.window.scrollY <= serviceSection.offsetTop + this.window.innerHeight
    ) {
      const scaleValue =
        1 +
        ((this.window.scrollY - introMoonImage.offsetTop) * 5) /
          (serviceSection.offsetTop +
            this.window.innerHeight -
            introMoonImage.offsetTop); // Adjust the zoom speed as needed
      introMoonImage.style.transform = `scale(${scaleValue})`;
    }

    //WebRTC Parallax Effect
    if (this.window.scrollY >= selfWebRTCSectionTop)
      selfWebRTCSection.style.top = `${
        0 -
        selfWebRTCSection.getBoundingClientRect().height / 2 -
        (this.window.scrollY - selfWebRTCSectionTop)
      }px`;
  });
});
