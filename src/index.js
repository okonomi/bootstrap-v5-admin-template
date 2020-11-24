import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import './admin.scss'

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar')
  const toggle = document.getElementById('sidebar-toggle')
  toggle.addEventListener('click', (e) => {
    sidebar.classList.toggle('visually-hidden')
  })
})
