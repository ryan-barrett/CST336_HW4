async function fetchEmail() {
  try {
    const response = await fetch('/contact');
    const { email } = await response.json();
    return email;
  }
  catch (error) {
    console.error(error, 'error fetching email');
  }
}

async function renderEmail() {
  const email = await fetchEmail();
  const contactDiv = document.getElementById('contact');
  contactDiv.innerText = `Contact: ${email}`;
}

function handleNavChange() {
  // highlight the current page in nav
  const nav = document.getElementById('top-nav');
  for (const child of Object.keys(nav.children)) {
    const path = nav.children[child].href.split('/')[3];

    if (window.location.pathname.split('/')[1] === path) {
      nav.children[child].classList.add('current-page');
    }
  }
}

function initEventListeners() {
  handleNavChange();
}

async function main() {
  initEventListeners();
  await renderEmail();
}

main();
