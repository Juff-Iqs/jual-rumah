document.getElementById('searchForm').addEventListener('submit', e => {
  e.preventDefault();

  const keyword   = document.getElementById('searchKeyword').value.trim().toLowerCase();
  const type      = document.querySelector('input[name="propertyType"]:checked')?.value.toLowerCase() || '';
  const category  = document.getElementById('propertyCategory').value.toLowerCase();
  const location  = document.getElementById('propertyLocation').value.toLowerCase();

  document.querySelectorAll('.property-item').forEach(item => {
    const title   = item.querySelector('.title')?.textContent.toLowerCase() || '';
    const iType   = item.dataset.type?.toLowerCase() || '';
    const iCat    = item.dataset.category?.toLowerCase() || '';
    const iLoc    = item.dataset.location?.toLowerCase() || '';

    
    const show =
      (!keyword  || title.includes(keyword)) &&
      (!type     || iType === type) &&
      (!category || iCat  === category) &&
      (!location || iLoc  === location);

    item.classList.toggle('d-none', !show);
  });
});

document.getElementById('sortButton').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('searchForm').dispatchEvent(new Event('submit'));
});
