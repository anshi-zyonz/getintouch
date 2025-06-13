const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff22";

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("followPopup");
  const followLink = document.getElementById("followLink");
  const popupSeen = localStorage.getItem("popupSeen");

  if (!popupSeen) {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden"; // disable scrolling

    followLink.addEventListener("click", () => {
      localStorage.setItem("popupSeen", "true");
      popup.style.display = "none";
      document.body.style.overflow = "auto"; // enable scrolling
    });
  } else {
    popup.style.display = "none";
  }
});
