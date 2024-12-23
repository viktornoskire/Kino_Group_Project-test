(async function startFooter() {
  try {
    const response = await fetch('../../data/footer.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('error', error);
  }
})();
