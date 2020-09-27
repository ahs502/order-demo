import CardType from "../../models/cards/CardType";
import Content from "../../models/Content";
import Page from "../../models/Page";
import User from "../../models/User";
import initialCurrentUser from "./initial-current-user";

const users: readonly User[] = [
  {
    id: "user-id-ali",
    name: "Ali Hakamizadeh",
  },
  {
    id: "user-id-somayeh",
    name: "Somayeh Lotfizadeh",
  },
  {
    id: "user-id-alireza",
    name: "Alireza Vafi",
  },
  {
    id: "user-id-shahriyar",
    name: "Shahriar Entezam",
  },
  {
    id: "user-id-ahmad",
    name: "Ahmad Bagheri",
  },
];

const firstPage: Page = {
  id: "page-id-first",
  name: "My First Page",
  owner: initialCurrentUser,
  members: [users[0], users[1], users[2], users[3]],
  cards: [
    {
      type: CardType.TEXT,
      attachments: [],
      text: "My first note",
    },
    {
      type: CardType.TEXT,
      attachments: [
        {
          type: "image",
          name: "My image",
          url: "https://google.com",
        },
      ],
      text: "My second note",
    },
  ],
};

const secondPage: Page = {
  id: "page-id-second",
  name: "My Second Page",
  owner: users[2],
  members: [initialCurrentUser, users[0], users[3], users[4]],
  cards: [
    {
      type: CardType.TEXT,
      attachments: [],
      text: "My only note in this page",
    },
  ],
};

const initialContent: Content = {
  pages: [firstPage, secondPage],
};

export default initialContent;
