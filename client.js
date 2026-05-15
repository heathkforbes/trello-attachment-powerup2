window.TrelloPowerUp.initialize({
  "card-buttons": function (t) {
    return [
      {
        text: "Download Power-Up",
        callback: function (t) {
          return t.card("attachments").then(function (card) {
            return t.popup({
              title: "Attachments JSON",
              url: "./attachments-v2.html?v=2",
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
