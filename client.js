window.TrelloPowerUp.initialize({
  "card-buttons": function (t) {
    return [
      {
        text: "Download Power-Up",
        callback: function (t) {
          return t.card("attachments").then(function (card) {
            return t.popup({
              title: "Attachments",
              url: "https://heathkforbes.github.io/trello-attachment-powerup2/attachments-v2.html?v=5",
              args: {
                attachments: card.attachments || []
              }
            });
          });
        }
      }
    ];
  }
});
