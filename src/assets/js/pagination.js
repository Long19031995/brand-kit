class Pagination {
  constructor (pagination) {
    this.pagination = pagination
    this.buttonActive = null
    this.buttonEnd = null
    this.total = 0
    this.active = 0
  }

  start () {
    this.createButtons()

    this.showButtonRelated()
  }

  createButtons () {
    this.total = Number(this.pagination.getAttribute('total')) || 0
    this.active = Number(this.pagination.getAttribute('active')) || 0

    for (let i = 0; i < this.total; i++) {
      const button = this.createButton(i + 1, this.active)

      this.pagination.appendChild(button)

      this.listenClick(button)
    }
  }

  createButton (index, active) {
    const button = document.createElement('button')

    button.innerHTML = index
    // get button active
    if (index === active) {
      button.classList.add('selected')
      this.buttonActive = button
    }

    // get button start
    if (index === 1) {
      this.buttonStart = button
    }

    // get button
    if (index === this.total) {
      this.buttonEnd = button
    }

    return button
  }

  listenClick (button) {
    button.addEventListener('click', (e) => {
      if (e.target.style.display !== 'none' && e.target.className !== 'three-dot' && e.target.className !== 'selected') {
        const name = this.pagination.id
        const data = Number(e.target.innerHTML) || 0
        brandPagination.emit(name, data)
      }
    })
  }

  showButtonRelated () {
    const button = this.buttonActive

    // show current
    button.style.display = 'inline-block'

    // show prev
    if (button.previousSibling) {
      button.previousSibling.style.display = 'inline-block'
    }
    if (button.previousSibling && button.previousSibling.previousSibling) {
      button.previousSibling.previousSibling.style.display = 'inline-block'
    }
    if (button.previousSibling && button.previousSibling.previousSibling && button.previousSibling.previousSibling.previousSibling && button.previousSibling.previousSibling.previousSibling !== this.buttonStart) {
      button.previousSibling.previousSibling.previousSibling.style.display = 'inline-block'
      button.previousSibling.previousSibling.previousSibling.classList.add('three-dot')
      button.previousSibling.previousSibling.previousSibling.innerHTML = '...'
    }

    // show next
    if (button.nextSibling) {
      button.nextSibling.style.display = 'inline-block'
    }
    if (button.nextSibling && button.nextSibling.nextSibling && button.nextSibling.nextSibling !== this.buttonEnd) {
      button.nextSibling.nextSibling.style.display = 'inline-block'
      button.nextSibling.nextSibling.classList.add('three-dot')
      button.nextSibling.nextSibling.innerHTML = '...'
    }
  }
}

export const brandPagination = {
  events: [],
  
  on (name, callback) {
    this.events[name] = callback
  },
  
  emit (name, data) {
    if (this.events[name]) {
      this.events[name](data)
    }
  },
  
  start () {
    const paginations = [...document.querySelectorAll('.brand-pagination')]

    paginations.forEach((pagination) => {
      (new Pagination(pagination)).start()
    })
  }
}