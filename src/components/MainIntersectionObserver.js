class MainIntersectionObserver {
     constructor(section, callback, threshold = 0) {
          this.desiredThreshold = threshold
          this.section = section
          this.threshold = calculateThreshold(this.section.clientHeight, this.desiredThreshold)
          this.observer = new IntersectionObserver((entries, observer) => {
               entries.forEach(entry => callback(entry, observer))
          }, { threshold: this.threshold })

          this.resizeHandler = resizeHandler(this.observer, this.section, this.desiredThreshold)
     }

     observe() {
          this.observer.observe(this.section)

          window.addEventListener('resize', this.resizeHandler)
     }

     disconnect() {
          this.observer.disconnect()
          window.removeEventListener('resize', this.resizeHandler)
     }

     unobserve() {
          this.observer.unobserve(this.section)
          window.removeEventListener('resize', this.resizeHandler)
     }
}

const resizeHandler = (observer, section, desiredThreshold) => () => {
     observer.disconnect()
     observer.threshold = calculateThreshold(section.clientHeight, desiredThreshold)
     observer.observe(section)
}

const calculateThreshold = (sectionHeight, desiredThreshold) => {
     const threshold = window.innerHeight / sectionHeight
     const validThreshold = threshold > 1 ? 1 : threshold

     return validThreshold * desiredThreshold
}


export default MainIntersectionObserver