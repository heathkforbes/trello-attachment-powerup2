const APP_KEY = "9cd9af876d2fa7e06cf13dda583a6575";
const APP_NAME = "Attachment JSON Test";
const APP_AUTHOR = "Heath Forbes";

function openDownloader(t) {
  return t.card("id", "name", "attachments").then(function (card) {
    return t.popup({
      title: "Attachments",
      url: "https://heathkforbes.github.io/trello-attachment-powerup2/attachments-v2.html?v=12",
      args: {
        cardId: card.id,
        cardName: card.name,
        attachments: card.attachments || []
      }
    });
  });
}

window.TrelloPowerUp.initialize(
  {
    "card-buttons": function (t) {
      return [
        {
          text: "Download Power-Up",
          callback: openDownloader
        }
      ];
    }
  },
  {
    appKey: APP_KEY,
    appName: APP_NAME,
    appAuthor: APP_AUTHOR
  }
);
