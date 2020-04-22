$("header").append(`<nav class="navbar navbar-expand-lg navbar-dark bg-success">
<a class="navbar-brand" href="#">Bootstrap Task</a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="index.html"
        >Home <span class="sr-only">(current)</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="map.html">Map</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="contacts.html">Contacts</a>
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Дизайн
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="task.html">Task</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="https://getbootstrap.com/">Bootstrap</a>
        <a class="dropdown-item" href="https://material.io">Matrial Design</a>
      </div>
    </li>
  </ul>
</div>
</nav>`)

$("footer").append(`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<p class="nav-item text-light">Александр Бессонов, группа N3455, Университет ИТМО, 2020г.</p>
</nav>`)