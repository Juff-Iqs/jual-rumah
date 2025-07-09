document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const lokasi = document.getElementById('job-keyword')?.value || '';
    const kategori = document.getElementById('choices-catagory-buy')?.value || '';
    const tipe = document.getElementById('choices-min-price-buy')?.value || '';
    const harga = document.getElementById('choices-max-price-buy')?.value || '';

    // Buat URL dengan query string (opsional)
    const query = `Beli.html?lokasi=${encodeURIComponent(lokasi)}&kategori=${encodeURIComponent(kategori)}&tipe=${encodeURIComponent(tipe)}&harga=${encodeURIComponent(harga)}`;

    // Redirect ke halaman hasil.html
    window.location.href = query;
  });


// Contoh data properti dummy
const properties = [
  {
    name: 'Jakarta',
    category: 'Rumah',
    type: 'Hunian',
    price: '≤ 5M'
  },
  {
    name: 'Bandung',
    category: 'Gedung',
    type: 'Komersial',
    price: '10M - 50M'
  },
  {
    name: 'Surabaya',
    category: 'Tanah',
    type: 'Komersial',
    price: '≥ 100M'
  }
];

// Saat tombol Temukan diklik
document.querySelector('#buy form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Ambil input user
  const name = document.getElementById('job-keyword').value.toLowerCase();
  const category = document.getElementById('choices-catagory-buy').value;
  const type = document.getElementById('choices-min-price-buy').value;
  const price = document.getElementById('choices-max-price-buy').value;

  // Filter data
  const filtered = properties.filter(p =>
    p.name.toLowerCase().includes(name) &&
    p.category === category &&
    p.type === type &&
    p.price === price
  );

  // Tampilkan hasil
  const resultContainer = document.getElementById('search-results');
  resultContainer.innerHTML = '';

  if (filtered.length === 0) {
    resultContainer.innerHTML = '<p>Tidak ditemukan properti yang cocok.</p>';
  } else {
    filtered.forEach(p => {
      const card = `
        <div class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${p.category} di ${p.name}</h5>
            <p class="card-text">Tipe: ${p.type}</p>
            <p class="card-text">Harga: ${p.price}</p>
          </div>
        </div>
      `;
      resultContainer.innerHTML += card;
    });
  }
});



  // Fungsi untuk mengubah range harga jadi angka
  function parsePrice(priceText) {
    if (priceText.includes("≤")) return 5;
    if (priceText.includes("≥")) return 100;
    const match = priceText.match(/\d+/g);
    if (match) return parseInt(match[0]);
    return 0;
  }

  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const keywordInput = form.querySelector('#job-keyword');
      const location = keywordInput?.value.toLowerCase() || "";
      const category = form.querySelector('select[id^="choices-catagory"]')?.value.toLowerCase();
      const type = form.querySelector('select[id^="choices-min-price"]')?.value.toLowerCase();
      const priceText = form.querySelector('select[id^="choices-max-price"]')?.value || "";
      const price = parsePrice(priceText);

      document.querySelectorAll('.property-item').forEach(item => {
        const itemLoc = item.dataset.location.toLowerCase();
        const itemCat = item.dataset.category.toLowerCase();
        const itemType = item.dataset.type.toLowerCase();
        const itemPrice = parseInt(item.dataset.price);

        const matchLocation = itemLoc.includes(location);
        const matchCategory = itemCat === category;
        const matchType = itemType === type;
        const matchPrice = itemPrice <= price;

        if (matchLocation && matchCategory && matchType && matchPrice) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });


document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const keyword = document.getElementById('searchKeyword').value.toLowerCase();
  const type = document.querySelector('input[name="propertyType"]:checked').value;
  const category = document.getElementById('propertyCategory').value.toLowerCase();
  const location = document.getElementById('propertyLocation').value.toLowerCase();

  const properties = document.querySelectorAll('.property-item');

  properties.forEach(item => {
    const itemLocation = item.dataset.location.toLowerCase();
    const itemCategory = item.dataset.category.toLowerCase();
    const itemType = item.dataset.type.toLowerCase();

    const matchKeyword = itemLocation.includes(keyword);
    const matchType = itemType === type;
    const matchCategory = itemCategory === category;
    const matchLocation = itemLocation === location;

    if (matchKeyword && matchType && matchCategory && matchLocation) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
