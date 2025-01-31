//
// Site-wide header and footer script
// (Ⓒ Zachary R. James, Agape Bloom, Team 7J Ranch)
// (@team7jranch)
//

// Defines my-header for the template header
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header-container">
          <a href="/index.html"><img class="main-logo-image" src="/archive/images/brand_assets/t7j_script_logo_under_center.svg"
              alt="Team 7J Ranch" /></a>
          <nav>
            <ul>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/about.html">About</a></li>
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


// Method to activate / deactivate landing screen
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("my-header");
  const landingScreen = document.querySelector(".landing-screen");
  
  function checkScroll() {
      const triggerHeight = landingScreen.offsetHeight; // Height of the landing screen
      if (window.scrollY > triggerHeight) {
          header.classList.add("visible");
      } else {
          header.classList.remove("visible");
      }
  }

  window.addEventListener("scroll", checkScroll);
});
