// Un objet qui représente le bus d'événements partagé
export const eventBus = {
    // Un objet pour stocker les événements et leurs callbacks associés
    events: {}, 
    subscribe(event, callback) {
      // Si l'événement n'existe pas encore, créer un tableau vide pour les callbacks
      if (!eventBus.events[event]) { 
        eventBus.events[event] = [];
      }
      // Ajouter le callback à l'array des callbacks de l'événement
      eventBus.events[event].push(callback); 
    },
    publish(event, data) {
      // Vérifier si l'événement a des callbacks enregistrés
      if (eventBus.events[event]) { 
        eventBus.events[event].forEach(callback => {
          // Appeler chaque callback avec les données fournies lors de la publication
          callback(data); 
        });
      }
    }
  };
  
