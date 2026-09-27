class TopDropdown {
  constructor() {
    this.dropdownTgl = 1
    this.animasiMenu = 0;
    this.animasiMenuY = 4;
  }

  dropdownToggle() {
    const dropdown = document.querySelector('.top-dropdown-ui');
    if (this.dropdownTgl == 1) {
      this.animasiMenuY += 16;
      this.animasiMenu += 1;

      dropdown.style.height = this.animasiMenuY + "px";

      if (this.animasiMenu <= 15) {
        requestAnimationFrame(() => this.dropdownToggle());
      } else {
        this.dropdownTgl = 0;
      }
    } else {

      this.animasiMenuY -= 16;
      this.animasiMenu -= 1;

      dropdown.style.height = this.animasiMenuY + "px";

      if (this.animasiMenu >= 0) {
        requestAnimationFrame(() => this.dropdownToggle());
      } else {
        this.dropdownTgl = 1;
      }
    }
  }
  slidePage(pageSlide) {
    const Home = document.querySelector('.home-page');
    const Script = document.querySelector('.script-page');
    if (pageSlide == "home") {
      Home.style.display = "block";
      Script.style.display = "none";
      if (this.dropdownTgl !== 1) {
        this.dropdownToggle()
      }
    } else if (pageSlide == "script") {
      Home.style.display = "none";
      Script.style.display = "block";
      if (this.dropdownTgl !== 1) {
        this.dropdownToggle()
      }
    }
  }
}
const a = new TopDropdown();

function Page(slide) {
  a.slidePage(slide)
}

document.getElementById("dropdown-btn").addEventListener('click', () => a.dropdownToggle());
