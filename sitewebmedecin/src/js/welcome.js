function Welcome() {
  return (
    <div class="header">
      <div class="header_texture"></div>
      <div class="container">
        <div class="header_navbar">
          <div class="header_navbar-logo">
            <h1 class="header_navbar-logo-title">Cabinet de Pneumologie</h1>
          </div>
          <div class="header_navbar-menu">
            <a href="" class="header_navbar-menu-link"><i class="fas fa-home"></i>Accueil</a>
            <a href="" class="header_navbar-menu-link"><i class="fas fa-user-md"></i>Qui sommes-nous ?</a>
            <a href="" class="header_navbar-menu-link"><i class="fas fa-notes-medical"></i>Pathologies</a>
            <a href="" class="header_navbar-menu-link"><i class="fas fa-clinic-medical"></i>Le cabinet</a>
            <a href="" class="header_navbar-menu-link"><i class="fas fa-phone"></i>Contact</a>
            <a href="" class="header_navbar-menu-link"><i class="fas fa-file-contract"></i>Tarifs</a>
          </div>
          <div class="header_navbar-toggle">
            <span class="header_navbar-toggle-icons">
            </span>
          </div>
        </div>
        <div class="header_slogan">
           <h1 class="header_slogan-title">Votre cabinet de pneumologie de la région</h1>
           <a href="" class="header_slogan-btn">Contactez-nous</a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;