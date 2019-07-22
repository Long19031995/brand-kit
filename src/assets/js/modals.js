class Modal {
  constructor (modal) {
    this.modal = modal
    this.buttonTrigger = []
  }

  start () {
    this.getButtonTriggers()
    
    this.listenTrigger()

    this.listenHideModal()
  }
  
  getButtonTriggers () {
    const id = this.modal.id
    this.buttonTriggers = [...document.querySelectorAll(`[modal-id="${id}"]`)]
  }
  
  listenTrigger () {
    this.buttonTriggers.forEach((buttonTrigger) => {
      buttonTrigger.addEventListener('click', () => {
        this.showModal()
      })
    })
  }

  showModal () {
    this.modal.style.display = 'flex'
  }

  hideModal () {
    this.modal.style.display = 'none'
  }

  listenHideModal () {
    const overlay = this.modal.querySelectorAll('.brand-modal__overlay')[0]

    overlay.addEventListener('click', () => {
      this.hideModal()
    })
  }
}

export const brandModal = {
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
    const modals = [...document.querySelectorAll('.brand-modal')]

    modals.forEach((modal) => {
      (new Modal(modal)).start()
    })
  }
}