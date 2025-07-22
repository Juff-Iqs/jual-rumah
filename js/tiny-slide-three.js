var slider = tns({
    container: '.tiny-slide-three',
    items: 3,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true, // ⬅️ INI YANG MEMBANTU FREEZE SAAT KURSOR MENDATANGI SLIDER
    autoplayButtonOutput: false,
    controls: true,
    controlsText: ['<', '>'], // ✅ Hapus teks Next dan Prev
    nav: false,
    gutter: 20,
    responsive: {
      640: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 3
      }
    }
  });