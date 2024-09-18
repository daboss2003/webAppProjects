export const data = [
  {
    "userId": 101,
    "ratings": 4,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "are or do repels provide blacked out except option criticizes",
    "body": "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect"
  },
  {
    "userId": 1,
    "ratings": 1,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "who is being",
    "body": "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of pleasure; nor will there be any trouble, so as to reject them."
  },
  {
    "userId": 61,
    "ratings": 3,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "she repels troubles as if she were training, whoever she is",
    "body": "and just but by what right\nthe lust of every one who chooses to be blinded, or to\nthe lust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or"
  },
  {
    "userId": 51,
    "ratings": 5,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "and he is blinded",
    "body": "by rejecting any and often to obtain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
  },
  {
    "userId": 41,
    "ratings": 4,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "they don't know what they hate",
    "body": "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held"
  },
  {
    "userId": 22,
    "ratings": 3,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "but the great easy",
    "body": "may it please some with pain that the things of life\nfor the great who are the ones who are whom no one or often\nwill repulse them because\nthey are to follow them but those which"
  },
  {
    "userId": 13,
    "ratings": 2,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "pain is pain itself",
    "body": "I will open to the most worthy the pain that accepts him\nsome of the easy-minded ones who are able to accept\nthe great elders\nself as comfortable pain of the pleasures of manner or life"
  },
  {
    "userId": 15,
    "ratings": 5,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "they do not know the right of all the pain of the times and accusers",
    "body": "the soul will not know the truth of pain, not because I will come to the fact that it is not for us, or that they provide pleasure, but pleasure"
  },
  {
    "userId": 10,
    "ratings": 3,
    "id": Date.now() + Math.floor(Math.random() * 500),
    "title": "the choice of trouble because him",
    "body": "however expedient ways with duties or great pains that are to be rejected"
  }
]


export function getRatings(rating) {
  switch (Number(rating)) {
    case 1:
      return require('./rating-1.png')
    case 2:
      return require('./rating-2.png')
    case 3:
      return require('./rating-3.png')
    case 4:
      return require('./rating-4.png')
    case 5:
      return require('./rating-5.png')
  }
}
 