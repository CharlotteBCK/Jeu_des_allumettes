
let nombreRestantAllumettes = 50
let questionAllumette = document.getElementById('question')



function promptNombreAllumette(message) {
let nombreAllumettesChoisi = prompt(message)
return nombreAllumettesChoisi
 }

  
  function joueur1() {
    
    let prenom = promptNombreAllumette ("Comment t'appelles-tu ?")

    while(nombreRestantAllumettes > 0) {
      
      let numberAllumettePlayer = promptNombreAllumette(`${prenom}\nCombien d'allumettes veux-tu retirer ? `)
      console.log(numberAllumettePlayer)

      //let numberAllumettePlayer= questionAllumette.textContent = "Combien d'allumettes veux-tu retirer ?"

       if(numberAllumettePlayer >= 1 && numberAllumettePlayer <= 6){
         nombreRestantAllumettes = nombreRestantAllumettes - numberAllumettePlayer
         if (nombreRestantAllumettes<=0){
            alert(`Bravo, ${prenom} tu as gagné !!`)
            return
        }
            alert(`Il te reste ${nombreRestantAllumettes} allumettes à retirer`)

        } else 
            alert(`Tu dois choisir un nombre en-dessous de 6.Il te reste ${nombreRestantAllumettes} allumettes à retirer `)
    }
  }



function gamplay(){
  joueur1()
 
}

gamplay()




