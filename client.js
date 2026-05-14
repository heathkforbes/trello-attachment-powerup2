window.TrelloPowerUp.initialize({
  "card-buttons": function (t) {
    return [
      {
        text: "Show attachments JSON",
        callback: function (t) {
          return t.card("attachments").then(function (card) {
            return t.popup({
              title: "Attachments JSON",
              url: "./attachments.html",
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
