function showSection(sectionNumber) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    const selectedSection = document.querySelector(`.section-${sectionNumber}`);
    selectedSection.style.display = 'flex';
  
    // Update the active state of the navbar item
    const navbarItems = document.querySelectorAll('.nav-item');
    navbarItems.forEach((item) => {
      item.classList.remove('active');
    });
    const selectedNavItem = document.querySelector(`.nav-item:nth-child(${sectionNumber})`);
    selectedNavItem.classList.add('active');
  }
  
  // Show the default section (section 1)
  showSection(1);