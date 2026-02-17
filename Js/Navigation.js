function highlightActiveLink() 
{
    const NavLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.ClassList.remove('active')

        if(window.location.pathname===link.getAttribute('href'))
        {
            link.ClassList.add('active');
        }
    
  });
}