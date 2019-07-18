let notify = () => {}

export default {
  on (callback) {
    notify = callback
  },
  
  emit (payload) {
    notify(payload)
  }
}