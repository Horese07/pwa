const container = document.querySelector(".container")
const coffees = [
  { name: "Tanjia de boeuf", image: "boeuf.jpeg" },
  { name: "Tanjia à la dinde",image: "dinde.jpg"  },
  { name: "Tanjia à l'agneau", image: "agneau.jpg"  },

]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
