// hugging face login:

// email: info@agapebloom.customElements
// password: Eatrealfood!1


// Defines my-header for the template header
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header-container">
          <a href="/index.html"><img class="signature-image" src="/archive/images/brand_assets/t7j_script_logo_under_center.svg"
              alt="Team 7J Ranch" /></a>
          <nav>
            <ul>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/about.html">About</a></li>
              <li><a href="/product.html">Product</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <div class="footer-description">
            <p>Team 7J Ranch (T7J) is a Flordia-based, veteran-owned, family-operated cattle farm dedicating to raising grass-fed
            beef with biblical principles.  Our family takes pride in providing other families weith ethically raise, no-nonsense
            beef through low-stress cattle hadnling practices and sustainable pasture management.</p>
          </div>
        </div>
        <p id="copywright">© Team 7J Ranch, LLC. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define('my-header', myHeader);
customElements.define('my-footer', myFooter);


// Your existing functions
let activeFilters = [];

function toggleFilter(button, category, parent) {
  button.classList.toggle("active");

  const index = activeFilters.indexOf(category);
  if (index > -1) {
    activeFilters.splice(index, 1);
  } else {
    activeFilters.push(category);
  }

  if (activeFilters.length === 0) {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
  }

  filterAndSortLinks(parent, "a");
}

function filterAndSortLinks(containerId, tagName) {
  var container = document.querySelector("." + containerId);
  var elements = Array.from(container.getElementsByTagName(tagName));

  elements.forEach((element) => (element.style.display = "none"));

  if (activeFilters.length > 0) {
    elements
      .filter((element) =>
        activeFilters.some((category) => element.classList.contains(category))
      )
      .forEach((element) => (element.style.display = ""));
  } else {
    elements.forEach((element) => (element.style.display = ""));
  }
}

function resetFilters() {
  activeFilters = [];

  document
    .querySelectorAll(".filter-btn")
    .forEach((button) => button.classList.remove("active"));

  filterAndSortLinks("apps-scripts-cont", "a");
}

function testButtonClick() { alert("Button clicked!"); }
