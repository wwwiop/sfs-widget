let url = window.location.href
let title = encodeURI("Free Music and More from Songs for Saplings")
let header = encodeURI("Hey, thought you would enjoy this great kid's music that teaches the Bible!")
let image = "https://songsforsaplings.com/workspace/uploads/images/saplings-music-banner.jpg"
let description = encodeURI("Free Music and More from Songs for Saplings")
let hashtag = encodeURI("Songs4Saplings")

let platforms = [
  {name: 'diggit', alt: 'Digg', href: `http://www.digg.com/submit?url=${url}`},
  {name: 'email', alt: 'Email', href: `mailto:?Subject=${title}&Body=${header}`},
  {name: 'facebook', alt: 'Facebook', href: `http://www.facebook.com/sharer.php?u=${url}`},
  {name: 'google', alt: 'Goole+', href: `https://plus.google.com/share?url=${url}`},
  {name: 'linkedin', alt: 'LinkedIn', href: `http://www.linkedin.com/shareArticle?mini=true&url=${url}`},
  {name: 'pinterest', alt: 'Pinterest', href: `http://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${description}`},
  {name: 'reddit', alt: 'Reddit', href: `http://reddit.com/submit?url=${url}&title=${title}`},
  {name: 'stumbleupon', alt: 'StumbleUpon', href: `http://www.stumbleupon.com/submit?url=${url}&title=${title}`},
  {name: 'tumblr', alt: 'Tumblr', href: `http://www.tumblr.com/share/link?url=${url}&title=${title}`},
  {name: 'twitter', alt: 'Twitter', href: `https://twitter.com/share?url=${url}&text=${url}&hashtags=${hashtag}`},
  {name: 'vk', alt: 'VK', href: `http://vkontakte.ru/share.php?url=${url}`},
  {name: 'yummly', alt: 'Yummly', href: `http://www.yummly.com/urb/verify?url=${url}&title=${title}`}
]

platforms.forEach(platform => {
  platform.logo = require('./resources/share-logos/' + platform.name + '.png')
})

export default platforms