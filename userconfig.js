const CONFIG = new Config({
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Birmingham, England', 
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'Pages',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://youtube.com',
            name: 'youtube',
            icon:'brand-youtube',
            icon_color: '#FF0000',
          },
          {
            name: 'Reddit',
            url: 'https://reddit.com',
            icon: 'brand-reddit',
            icon_color: '#64876d'
          },
          {
            name: 'twitter',
            url: 'https://twitter.com',
            icon: 'brand-twitter',
            icon_color: '#1DA1F2',
          },
          {
            name: 'instagram',
            url: 'https://instagram.com',
            icon: 'brand-instagram',
            icon_color: '#8b647b'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: 'rainy mood',
            url: 'https://rainymood.com/'
          },
          {
            name: 'lifeat',
            url: 'lifeat.io'
          }
        ]
      },
     
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
      ]
    }]
  });
  