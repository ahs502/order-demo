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
        {
          type: "audio",
          name: "My audio",
          url: "https://google.com",
        },
        {
          type: "video",
          name: "My video",
          url: "https://google.com",
        },
      ],
      text: "My second note",
    },
    {
      type: CardType.MARKDOWN,
      attachments: [
        {
          type: "file",
          name: "My file",
          url: "https://google.com",
        },
      ],
      markdown: "This is _some_ **kind** of _**markdown**_!",
    },
    {
      type: CardType.TEXT,
      attachments: [],
      text: "Another simple text card",
    },
    {
      type: CardType.TODO,
      attachments: [],
      label: "To-do cards have a checkbox!",
      checked: true,
    },
    {
      type: CardType.TODO,
      attachments: [
        {
          type: "link preview",
          name: "My link preview",
          url: "https://google.com",
        },
        {
          type: "image",
          name: "My other image",
          url: "https://google.com",
        },
      ],
      label: "My other to-do card",
      checked: false,
    },
    {
      type: CardType.MARKDOWN,
      attachments: [],
      markdown: "Another <em>simple</em> markdown",
    },
  ],
};

const secondPage: Page = {
  id: "page-id-second",
  name: "My Second Page",
  owner: users[3],
  members: [initialCurrentUser, users[0], users[2]],
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
